import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  ChevronRight, Truck, CreditCard, ShieldCheck, 
  CheckCircle2, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { Product, Order } from '../types';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useError } from '../context/ErrorContext';
import { ErrorCode } from '../types/errors';
import { createOrder, createOrderItems, clearCart as clearCartInDB } from '../lib/supabase';

// Mock email service replacement if needed or just remove it if not used
// import { sendOrderConfirmationEmail } from '../lib/emailService';

type Step = 'shipping' | 'payment' | 'confirmation';

export function CheckoutView() {
  const { user, isAuthenticated } = useAuth();
  const { cart, clearCart } = useCart();
  const { addError } = useError();
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>('shipping');
  const [shippingMethod, setShippingMethod] = useState('std');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mpesa'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);

  // If not authenticated, show gateway
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1A0809] flex items-center justify-center pt-32 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-[#0A0E27] border border-brand-emerald p-12 rounded-3xl shadow-2xl text-center"
        >
          <div className="w-16 h-16 bg-brand-emerald/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck size={32} className="text-brand-emerald" />
          </div>
          <h2 className="font-serif text-3xl text-white italic mb-4">Collective Member Exclusive</h2>
          <p className="text-slate-400 text-sm mb-10 leading-relaxed font-bold uppercase tracking-widest">To ensure the sanctity of our procurement process and provide precise logistical tracking, acquisition is currently reserved for our registered collective members.</p>
          
          <div className="space-y-4">
            <Link 
              to="/auth/signup"
              className="block w-full bg-brand-emerald text-brand-surface py-4 rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all text-center"
            >
              Sign Up / Join Us
            </Link>
            <Link 
              to="/auth/signin"
              className="block w-full border border-white/10 text-white/40 py-4 rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] hover:text-white hover:border-white/20 transition-all text-center"
            >
              Already a member? Sign In
            </Link>
          </div>

          <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest leading-loose font-black">
            By joining, you agree to our Archive Terms & Privacy Protocol.
          </p>
        </motion.div>
      </div>
    );
  }

  // If cart is empty, show empty state
  if (cart.items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#1A0809]">
        <h1 className="font-serif text-4xl text-slate-50 mb-8 italic uppercase tracking-tighter">Procurement Empty</h1>
        <Link 
          to="/collections" 
          className="text-brand-emerald-light uppercase tracking-[0.3em] text-[10px] font-bold border-b border-brand-emerald pb-1 hover:text-white transition-colors"
        >
          Return to Archive
        </Link>
      </div>
    );
  }

  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateShipping = () => {
    const newErrors: Record<string, string> = {};
    if (!shippingDetails.name) newErrors.name = 'Appellation required';
    if (!shippingDetails.email || !/^\S+@\S+\.\S+$/.test(shippingDetails.email)) newErrors.email = 'Valid digital address required';
    if (!shippingDetails.address) newErrors.address = 'Sanctuary address required';
    if (!shippingDetails.city) newErrors.city = 'Metropolis required';
    if (!shippingDetails.zip) newErrors.zip = 'Postal code required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: Record<string, string> = {};
    if (paymentMethod === 'card') {
      if (!paymentDetails.cardNumber || paymentDetails.cardNumber.length < 16) newErrors.cardNumber = 'Valid identifier required';
      if (!paymentDetails.expiry || paymentDetails.expiry.length < 4) newErrors.expiry = 'Expiration required (MM/YY)';
      if (!paymentDetails.cvv || paymentDetails.cvv.length < 3) newErrors.cvv = 'Cryptogram required';
    } else {
      if (!paymentDetails.phone || paymentDetails.phone.length < 10) newErrors.phone = 'Valid M-Pesa number required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleShippingAdvance = () => {
    if (validateShipping()) {
      setErrors({});
      setStep('payment');
    } else {
      addError(ErrorCode.INVALID_SHIPPING_DETAILS);
    }
  };

  const handlePaymentSuccess = async (stripePaymentIntentId: string) => {
    if (!user) {
      addError(ErrorCode.AUTH_LOGIN_FAILED);
      return;
    }

    setIsProcessing(true);

    try {
      const orderNumber = `ORD-${Date.now()}`;
      const calculateTax = (subtotal: number) => subtotal * 0.08;
      const tax = calculateTax(cart.totalPrice);
      const shippingPrice = shippingMethod === 'exp' ? 24 : 0;

      // 1. Create order in database
      const { data: orderData, error: orderError } = await createOrder({
        order_number: orderNumber,
        user_id: user.id,
        customer_email: shippingDetails.email,
        customer_name: shippingDetails.name,
        customer_phone: paymentDetails.phone,
        shipping_address: shippingDetails.address,
        shipping_city: shippingDetails.city,
        shipping_state: '', // Not collected in current form
        shipping_zip: shippingDetails.zip,
        shipping_country: 'US',
        shipping_method: shippingMethod === 'std' ? 'standard' : 'express',
        payment_method: paymentMethod,
        payment_status: 'succeeded',
        subtotal: cart.totalPrice,
        shipping_cost: shippingPrice,
        tax,
        total: cart.totalPrice + shippingPrice + tax,
        status: 'pending',
      });

      if (orderError || !orderData) {
        throw new Error(orderError?.message || 'Order creation failed');
      }

      const createdOrder = orderData[0] as Order;
      setOrder(createdOrder);

      // 2. Create order items
      const orderItems = cart.items.map(item => ({
        order_id: createdOrder.id,
        product_id: item.productId,
        product_name: item.name,
        quantity: item.quantity,
        price_per_unit: item.price,
        subtotal: item.price * item.quantity,
      }));

      const { error: itemsError } = await createOrderItems(orderItems);
      if (itemsError) {
        console.error('Order items creation failed:', itemsError);
      }

      // 3. Clear cart in DB and locally
      await clearCartInDB(user.id);
      clearCart();

      // 4. Show confirmation page
      setStep('confirmation');
      
      // Auto-redirect after 5 seconds to profile with order number
      const timer = setTimeout(() => {
        navigate(`/profile?orderNumber=${createdOrder.order_number}`);
      }, 5000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Post-payment error:', error);
      addError(ErrorCode.CHECKOUT_FAILED);
      setIsProcessing(false);
    }
  };

  const handlePaymentAdvance = async () => {
    if (validatePayment()) {
      setErrors({});
      setIsProcessing(true);
      
      // Simulate alchemy/processing
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await handlePaymentSuccess(`pi_${Math.random().toString(36).substring(7)}`);
      } catch (error) {
        addError(ErrorCode.PAYMENT_FAILED);
        setIsProcessing(false);
      }
    } else {
      addError(ErrorCode.INVALID_PAYMENT_DETAILS);
    }
  };

  const shippingPrice = shippingMethod === 'exp' ? 24 : 0;
  const total = cart.totalPrice + shippingPrice;

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-4 md:gap-12 mb-20">
          {[
            { id: 'shipping', label: 'Logistics', icon: Truck },
            { id: 'payment', label: 'Settle', icon: CreditCard },
            { id: 'confirmation', label: 'Sanction', icon: ShieldCheck },
          ].map((s, i) => (
            <div key={s.id} className="flex items-center gap-4 lg:gap-8">
              <div className={`flex items-center gap-3 ${step === s.id ? 'text-brand-emerald-light' : 'text-slate-600'}`}>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${step === s.id ? 'border-brand-emerald bg-brand-emerald/10' : 'border-slate-800'}`}>
                  <s.icon size={14} />
                </div>
                <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold">{s.label}</span>
              </div>
              {i < 2 && <div className={`w-8 lg:w-16 h-px ${i === 0 && step !== 'shipping' ? 'bg-brand-emerald' : 'bg-slate-800'}`}></div>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
          <div className="xl:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {step === 'shipping' && (
                  <div className="space-y-12">
                    <h2 className="font-serif text-5xl text-slate-50 italic mb-12 text-center md:text-left">Delivery Coordinates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-4">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Appellation</label>
                        <input 
                          type="text" 
                          value={shippingDetails.name}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
                          maxLength={50}
                          className={`w-full bg-brand-charcoal border p-5 text-sm text-slate-200 tracking-[0.15em] uppercase focus:outline-none focus:border-brand-emerald transition-colors ${errors.name ? 'border-red-500/50' : 'border-brand-border'}`} 
                          placeholder="Full Name" 
                        />
                        {errors.name && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.name}</p>}
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Digital Address</label>
                        <input 
                          type="email" 
                          value={shippingDetails.email}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                          maxLength={100}
                          className={`w-full bg-brand-charcoal border p-5 text-sm text-slate-200 tracking-[0.1em] focus:outline-none focus:border-brand-emerald transition-colors ${errors.email ? 'border-red-500/50' : 'border-brand-border'}`} 
                          placeholder="email@address.com" 
                        />
                        {errors.email && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.email}</p>}
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Sanctuary Address</label>
                        <input 
                          type="text" 
                          value={shippingDetails.address}
                          onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                          maxLength={150}
                          className={`w-full bg-brand-charcoal border p-5 text-sm text-slate-200 tracking-[0.1em] focus:outline-none focus:border-brand-emerald transition-colors ${errors.address ? 'border-red-500/50' : 'border-brand-border'}`} 
                          placeholder="Street Address" 
                        />
                        {errors.address && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.address}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-8 md:col-span-2">
                         <div className="space-y-4">
                           <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Metropolis</label>
                           <input 
                             type="text" 
                             value={shippingDetails.city}
                             onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                             maxLength={50}
                             className={`w-full bg-brand-charcoal border p-5 text-sm text-slate-200 tracking-[0.1em] focus:outline-none focus:border-brand-emerald transition-colors ${errors.city ? 'border-red-500/50' : 'border-brand-border'}`} 
                             placeholder="City" 
                           />
                           {errors.city && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.city}</p>}
                         </div>
                         <div className="space-y-4">
                           <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Postal Code</label>
                           <input 
                             type="text" 
                             value={shippingDetails.zip}
                             onChange={(e) => setShippingDetails({ ...shippingDetails, zip: e.target.value })}
                             maxLength={12}
                             className={`w-full bg-brand-charcoal border p-5 text-sm text-slate-200 tracking-[0.2em] focus:outline-none focus:border-brand-emerald transition-colors ${errors.zip ? 'border-red-500/50' : 'border-brand-border'}`} 
                             placeholder="ZIP / Parcel Code" 
                           />
                           {errors.zip && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.zip}</p>}
                         </div>
                      </div>
                    </div>

                    <div className="bg-brand-charcoal border border-brand-border p-10 mb-12">
                       <h3 className="text-[10px] uppercase tracking-widest text-slate-300 font-bold mb-8">Preferred Courier</h3>
                       <div className="space-y-4">
                         {[
                           { id: 'std', label: 'Ethereal Standard', desc: '1-5 Solar Days', price: 'Free', priceVal: 0 },
                           { id: 'exp', label: 'Celestial Express', desc: '1-2 Solar Days', price: '€24.00', priceVal: 24 },
                         ].map(opt => (
                           <div 
                             key={opt.id} 
                             onClick={() => setShippingMethod(opt.id)}
                             className={`flex items-center justify-between p-6 border transition-all cursor-pointer group
                               ${shippingMethod === opt.id ? 'border-brand-emerald bg-brand-emerald/10' : 'border-brand-border hover:border-slate-500'}
                             `}
                           >
                             <div className="flex items-center gap-6">
                               <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${shippingMethod === opt.id ? 'border-brand-emerald' : 'border-slate-700'}`}>
                                 <div className={`w-2 h-2 rounded-full bg-brand-emerald transition-opacity ${shippingMethod === opt.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`}></div>
                               </div>
                               <div>
                                 <p className="text-[11px] uppercase tracking-widest text-slate-100 font-bold mb-1">{opt.label}</p>
                                 <p className="text-[10px] text-slate-500 italic">{opt.desc}</p>
                               </div>
                             </div>
                             <span className="font-serif text-slate-200">{opt.price}</span>
                           </div>
                         ))}
                       </div>
                    </div>

                    <button 
                      onClick={handleShippingAdvance}
                      className="w-full py-6 bg-brand-emerald text-white text-[11px] uppercase tracking-[0.3em] hover:bg-emerald-800 transition-all font-bold flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                    >
                      Advance to Settle
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {step === 'payment' && (
                  <div className="max-w-2xl mx-auto md:mx-0">
                    <h2 className="font-serif text-5xl text-slate-50 italic mb-12 text-center md:text-left">Pecuniary Settlement</h2>
                    
                    {/* Payment Method Selector */}
                    <div className="flex gap-4 mb-8">
                      <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`flex-1 py-4 px-6 border text-[10px] uppercase tracking-widest font-bold font-sans transition-all flex items-center justify-center gap-3
                          ${paymentMethod === 'card' ? 'border-brand-emerald bg-brand-emerald/10 text-white' : 'border-brand-border text-slate-500 hover:border-slate-600'}
                        `}
                      >
                        <CreditCard size={16} />
                        Card
                      </button>
                      <button 
                        onClick={() => setPaymentMethod('mpesa')}
                        className={`flex-1 py-4 px-6 border text-[10px] uppercase tracking-widest font-bold font-sans transition-all flex items-center justify-center gap-3
                          ${paymentMethod === 'mpesa' ? 'border-brand-emerald bg-brand-emerald/10 text-white' : 'border-brand-border text-slate-500 hover:border-slate-600'}
                        `}
                      >
                        <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-[10px] font-black italic text-white">M</div>
                        M-Pesa
                      </button>
                    </div>

                    <div className="bg-brand-charcoal border border-brand-border p-10 lg:p-12 space-y-10">
                      {paymentMethod === 'card' ? (
                        <>
                          <div className="space-y-4">
                            <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Vault Identifier</label>
                            <div className="relative">
                              <input 
                                type="text" 
                                value={paymentDetails.cardNumber.replace(/\D/g, '').match(/.{1,4}/g)?.join(' ') || ''}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value.replace(/\D/g, '').slice(0, 16) })}
                                className={`w-full bg-brand-black border p-5 pr-16 text-sm text-slate-200 tracking-[0.3em] font-mono focus:outline-none focus:border-brand-emerald transition-colors ${errors.cardNumber ? 'border-red-500/50' : 'border-brand-border'}`} 
                                placeholder="XXXX XXXX XXXX XXXX" 
                              />
                              <div className="absolute right-5 top-5 flex gap-2">
                                <CreditCard size={18} className="text-slate-600" />
                              </div>
                            </div>
                            {errors.cardNumber && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.cardNumber}</p>}
                          </div>

                          <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Expiration</label>
                              <input 
                                type="text" 
                                value={paymentDetails.expiry.replace(/\D/g, '').match(/.{1,2}/g)?.join(' / ').slice(0, 7) || ''}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                                className={`w-full bg-brand-black border p-5 text-sm text-slate-200 tracking-[0.2em] font-mono focus:outline-none focus:border-brand-emerald transition-colors ${errors.expiry ? 'border-red-500/50' : 'border-brand-border'}`} 
                                placeholder="MM / YY" 
                              />
                              {errors.expiry && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.expiry}</p>}
                            </div>
                            <div className="space-y-4">
                              <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Cryptogram (CVV)</label>
                              <input 
                                type="text" 
                                value={paymentDetails.cvv}
                                onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                                className={`w-full bg-brand-black border p-5 text-sm text-slate-200 tracking-[0.3em] font-mono focus:outline-none focus:border-brand-emerald transition-colors ${errors.cvv ? 'border-red-500/50' : 'border-brand-border'}`} 
                                placeholder="***" 
                              />
                              {errors.cvv && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.cvv}</p>}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="space-y-6">
                          <div className="bg-brand-black/50 border border-brand-emerald/20 p-6 rounded-lg mb-8">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest italic leading-relaxed">
                              Upon sanctioning, an M-Pesa STK push will be dispatched to your mobile artifact. Please authenticate the transaction with your pin.
                            </p>
                          </div>
                          <div className="space-y-4">
                            <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Mobile Artifact Number</label>
                            <input 
                              type="tel" 
                              value={paymentDetails.phone}
                              onChange={(e) => setPaymentDetails({ ...paymentDetails, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                              className={`w-full bg-brand-black border p-5 text-sm text-slate-200 tracking-[0.3em] font-mono focus:outline-none focus:border-brand-emerald transition-colors ${errors.phone ? 'border-red-500/50' : 'border-brand-border'}`} 
                              placeholder="07XX XXX XXX" 
                            />
                            {errors.phone && <p className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.phone}</p>}
                          </div>
                        </div>
                      )}

                      <div className="pt-8 space-y-6">
                        <div className="flex items-center gap-4 text-slate-500 pb-8 border-b border-brand-border">
                          <ShieldCheck size={20} className="text-brand-emerald" />
                          <p className="text-[10px] uppercase tracking-widest font-semibold italic">Transmissions encrypted via Atelier Vault Security Protocol 4.0</p>
                        </div>

                        <div className="flex justify-between items-center py-4">
                          <button 
                            onClick={() => setStep('shipping')}
                            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-200 transition-colors"
                          >
                            <ArrowLeft size={14} /> Back to Coordinates
                          </button>
                          <button 
                            onClick={handlePaymentAdvance}
                            disabled={isProcessing}
                            className={`px-12 py-5 bg-brand-emerald text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-emerald-800 transition-all flex items-center gap-4 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            {isProcessing ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                Transmitting...
                              </>
                            ) : (
                              paymentMethod === 'card' ? 'Sanction Payment' : 'Initiate STK Push'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 'confirmation' && (
                  <div className="text-center py-20 bg-brand-charcoal border border-brand-border p-12">
                    <div className="w-24 h-24 rounded-full bg-brand-emerald/10 border border-brand-emerald mx-auto mb-12 flex items-center justify-center">
                      <CheckCircle2 size={48} className="text-brand-emerald" />
                    </div>
                    <h2 className="font-serif text-6xl text-slate-50 italic mb-8">Procurement Sanctioned</h2>
                    <p className="text-slate-400 text-lg font-extralight italic mb-12 max-w-xl mx-auto leading-relaxed">
                      The alchemy has begun. Your selection of botanical artifacts is being curated for delivery. You will receive a digital dispatch shortly.
                    </p>
                    
                    <div className="max-w-md mx-auto bg-brand-black border border-brand-border p-8 mb-16 text-left">
                      <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-6">Archive Record</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-brand-border pb-3">
                          <span className="text-[11px] uppercase tracking-widest text-slate-300">Reference No.</span>
                          <span className="font-serif text-slate-100">{order?.order_number || 'AB-2024-9981'}</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-border pb-3">
                          <span className="text-[11px] uppercase tracking-widest text-slate-300">Arrival Est.</span>
                          <span className="font-serif text-slate-100">{shippingMethod === 'exp' ? '1-2' : '1-5'} Solar Days</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => navigate('/')}
                      className="px-16 py-6 bg-brand-emerald text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-emerald-800 transition-all"
                    >
                      Return to the Collection
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Persistent Sidebar for shipping/payment */}
          {(step === 'shipping' || step === 'payment') && (
            <div className="xl:col-span-4">
              <div className="sticky top-32">
                <div className="bg-brand-charcoal border border-brand-border p-10">
                  <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-8">Acquisition Manifest</h3>
                  <div className="space-y-6 mb-8 pb-8 border-b border-brand-border max-h-[400px] overflow-auto">
                    {cart.items.map((item) => (
                      <div key={item.productId} className="flex gap-4">
                        <div className="w-16 h-20 bg-brand-black border border-brand-border overflow-hidden shrink-0">
                          <img src={item.image_url} alt={item.name} className="w-full h-full object-contain grayscale opacity-60" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex flex-col justify-between py-1 min-w-0">
                          <div>
                            <h4 className="font-sans text-[9px] uppercase tracking-[0.2em] font-extrabold text-slate-100 leading-tight truncate">{item.name}</h4>
                            <p className="text-[8px] uppercase tracking-widest text-slate-500 font-bold mt-1">Qty: {item.quantity}</p>
                          </div>
                          <span className="font-sans text-[10px] text-brand-emerald-light tracking-[0.2em] uppercase font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between text-[11px] uppercase tracking-widest">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="text-slate-200">${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[11px] uppercase tracking-widest">
                      <span className="text-slate-500">Shipping</span>
                      <span className="text-slate-200">${shippingPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base uppercase tracking-widest font-bold pt-6 border-t border-brand-border mt-6">
                      <span className="text-white">Total Acquisition</span>
                      <span className="text-brand-emerald-light">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
