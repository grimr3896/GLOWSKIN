import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronRight, Truck, CreditCard, ShieldCheck, 
  CheckCircle2, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { Product } from '../types';

type Step = 'shipping' | 'payment' | 'confirmation';

export function CheckoutView() {
  const [step, setStep] = useState<Step>('shipping');
  const [shippingMethod, setShippingMethod] = useState('std');
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
    cvv: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const location = useLocation();
  const purchaseData = location.state as { product: Product; qty: number } | null;

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
    if (!paymentDetails.cardNumber || paymentDetails.cardNumber.length < 16) newErrors.cardNumber = 'Valid identifier required';
    if (!paymentDetails.expiry || paymentDetails.expiry.length < 4) newErrors.expiry = 'Expiration required (MM/YY)';
    if (!paymentDetails.cvv || paymentDetails.cvv.length < 3) newErrors.cvv = 'Cryptogram required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleShippingAdvance = () => {
    if (validateShipping()) {
      setErrors({});
      setStep('payment');
    }
  };

  const handlePaymentAdvance = () => {
    if (validatePayment()) {
      setErrors({});
      setStep('confirmation');
    }
  };

  const subtotal = useMemo(() => {
    if (!purchaseData) return 0;
    const priceStr = purchaseData.product.price.replace(/[^0-9.]/g, '');
    return parseFloat(priceStr) * purchaseData.qty;
  }, [purchaseData]);

  const shippingPrice = shippingMethod === 'exp' ? 24 : 0;
  const total = subtotal + shippingPrice;

  // If no product is being purchased directly, and they landed here somehow, redirect or show error
  if (!purchaseData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="font-serif text-4xl text-slate-50 mb-8 italic">No Acquisition Initiated</h1>
        <button 
          onClick={() => navigate('/shop')}
          className="text-brand-emerald-light uppercase tracking-[0.2em] text-xs font-bold border-b border-brand-emerald pb-1"
        >
          Return to Collection
        </button>
      </div>
    );
  }

  const { product, qty } = purchaseData;

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
                           { id: 'std', label: 'Ethereal Standard', desc: '4-17 Solar Days', price: 'Free', priceVal: 0 },
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
                    <div className="bg-brand-charcoal border border-brand-border p-10 lg:p-12 space-y-10">
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
                            className="px-12 py-5 bg-brand-emerald text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-emerald-800 transition-all flex items-center gap-4"
                          >
                            Sanction Payment
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
                          <span className="font-serif text-slate-100">AB-2024-9981</span>
                        </div>
                        <div className="flex justify-between border-b border-brand-border pb-3">
                          <span className="text-[11px] uppercase tracking-widest text-slate-300">Arrival Est.</span>
                          <span className="font-serif text-slate-100">3-5 Solar Days</span>
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
                  <div className="flex gap-6 mb-8 pb-8 border-b border-brand-border">
                    <div className="w-20 h-24 bg-brand-black border border-brand-border overflow-hidden shrink-0">
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-contain grayscale opacity-60" />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-100 leading-tight">{product.name}</h4>
                        <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-2">{product.subcategory}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="font-serif text-slate-100">{product.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between text-[11px] uppercase tracking-widest">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="text-slate-200">€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[11px] uppercase tracking-widest">
                      <span className="text-slate-500">Shipping</span>
                      <span className="text-slate-200 italic font-bold">
                        {shippingPrice === 0 ? 'Included' : `€${shippingPrice.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-[13px] uppercase tracking-widest font-bold pt-6 border-t border-brand-border mt-6">
                      <span className="text-white">Total</span>
                      <span className="text-brand-emerald-light">€{total.toFixed(2)}</span>
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
