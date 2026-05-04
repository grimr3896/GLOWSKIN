import { motion } from 'motion/react';
import { CheckCircle2, Package, Truck, Calendar } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Order } from '../types';

export function OrderConfirmationView() {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('orderNumber');
  
  // In real app, fetch order from database using orderNumber
  // For now, mock order
  const mockOrder: Order = {
    id: '1',
    orderNumber: orderNumber || 'ORD-2024-00123',
    userId: user?.id || '1',
    email: user?.email || 'user@example.com',
    createdAt: new Date().toISOString(),
    status: 'pending',
    shippingName: 'John Doe',
    shippingAddress: '123 Main St',
    shippingCity: 'New York',
    shippingState: 'NY',
    shippingZip: '10001',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    paymentStatus: 'succeeded',
    items: [
      {
        id: '1',
        orderId: '1',
        productId: '1',
        productName: 'Hydrating Serum',
        quantity: 1,
        price: 58,
        subtotal: 58,
      },
    ],
    subtotal: 58,
    shippingCost: 0,
    tax: 4.64,
    total: 62.64,
  };

  return (
    <div className="min-h-screen bg-[#1A0809] pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-12"
        >
          <div className="w-24 h-24 bg-brand-emerald/10 rounded-full flex items-center justify-center border-2 border-brand-emerald">
            <CheckCircle2 className="text-brand-emerald" size={48} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl text-white italic mb-4">Order Confirmed</h1>
          <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest font-black">
            Thank you for your purchase. Your order has been received.
          </p>
          <div className="inline-block bg-brand-black border border-brand-emerald px-6 py-3 rounded-lg">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Order Number</p>
            <p className="font-mono text-brand-emerald-light text-lg">{mockOrder.orderNumber}</p>
          </div>
        </motion.div>

        {/* Order Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-brand-charcoal border border-brand-border rounded-xl p-8 mb-8"
        >
          <h2 className="font-serif text-2xl text-white italic mb-6">Order Details</h2>

          {/* Items */}
          <div className="space-y-4 mb-8 pb-8 border-b border-brand-border">
            {mockOrder.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-widest">{item.productName}</p>
                  <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mt-1">Qty: {item.quantity}</p>
                </div>
                <p className="text-brand-emerald-light font-bold">${item.subtotal.toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-3 mb-8 pb-8 border-b border-brand-border">
            <div className="flex justify-between text-slate-400 text-[10px] uppercase tracking-widest font-bold">
              <span>Subtotal</span>
              <span>${mockOrder.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[10px] uppercase tracking-widest font-bold">
              <span>Shipping</span>
              <span>${mockOrder.shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[10px] uppercase tracking-widest font-bold">
              <span>Tax</span>
              <span>${mockOrder.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white font-bold text-lg pt-2">
              <span className="uppercase tracking-widest text-[11px]">Total</span>
              <span className="text-brand-emerald">${mockOrder.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Info */}
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 font-bold">Shipping Address</p>
            <div className="text-slate-100 italic">
              <p className="font-serif text-lg">{mockOrder.shippingName}</p>
              <p className="text-sm mt-1">{mockOrder.shippingAddress}</p>
              <p className="text-sm">{mockOrder.shippingCity}, {mockOrder.shippingState} {mockOrder.shippingZip}</p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-brand-charcoal border border-brand-border p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-brand-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-border">
              <Package size={24} className="text-brand-emerald" />
            </div>
            <p className="text-white text-[10px] uppercase tracking-widest font-bold mb-1">Confirmed</p>
            <p className="text-slate-500 text-[9px] uppercase font-black">Processed and queued</p>
          </div>

          <div className="bg-brand-charcoal border border-brand-border p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-brand-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-border">
              <Truck size={24} className="text-brand-emerald" />
            </div>
            <p className="text-white text-[10px] uppercase tracking-widest font-bold mb-1">Shipped Soon</p>
            <p className="text-slate-500 text-[9px] uppercase font-black">Within 24-48 hours</p>
          </div>

          <div className="bg-brand-charcoal border border-brand-border p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-brand-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-border">
              <Calendar size={24} className="text-brand-emerald" />
            </div>
            <p className="text-white text-[10px] uppercase tracking-widest font-bold mb-1">Delivery</p>
            <p className="text-slate-500 text-[9px] uppercase font-black">3-5 business days</p>
          </div>
        </motion.div>

        {/* Email Confirmation Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-brand-emerald/10 border border-brand-emerald/30 rounded-lg p-4 mb-8 text-center"
        >
          <p className="text-brand-emerald-light text-xs uppercase tracking-widest font-bold">
            ✓ Confirmation email sent to <span className="text-white">{mockOrder.email}</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <Link
            to="/profile"
            className="block w-full bg-brand-emerald text-brand-surface py-5 rounded-xl font-bold uppercase tracking-[0.3em] text-[10px] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition text-center"
          >
            View Order History
          </Link>
          <Link
            to="/collections"
            className="block w-full border border-brand-border text-slate-400 py-5 rounded-xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white/5 transition text-center"
          >
            Continue Shopping
          </Link>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 pt-8 border-t border-brand-border text-center"
        >
          <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-3">
            Questions about your order?
          </p>
          <a
            href="mailto:support@glowskin.com"
            className="text-brand-emerald-light hover:underline text-[10px] uppercase tracking-widest font-black"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}
