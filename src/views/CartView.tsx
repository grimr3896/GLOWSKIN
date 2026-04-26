import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export function CartView() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#1A0809] pt-32 pb-20 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-[#1DB679]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#1DB679]/20">
            <ShoppingBag size={32} className="text-[#1DB679]" />
          </div>
          <h1 className="font-serif text-4xl text-white italic mb-4">Cart Empty</h1>
          <p className="text-[#B0B0B0] text-sm mb-10 leading-relaxed font-sans">
            Your procurement cart awaits. Explore our collection to find your next daily ritual.
          </p>
          <Link
            to="/collections"
            className="inline-block bg-[#1DB679] text-white px-10 py-4 rounded-xl font-bold uppercase text-[12px] tracking-[0.2em] hover:shadow-[0_0_20px_rgba(29,182,121,0.3)] transition-all"
          >
            Browse Collection
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A0809] pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-[#B0B0B0] hover:text-[#00E5FF] transition-colors mb-6 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Back</span>
          </button>
          <h1 className="font-serif text-5xl text-white italic mb-2 tracking-tight">Procurement Summary</h1>
          <p className="text-[#B0B0B0] text-sm font-sans">{cart.items.length} items present in current session</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.items.map((item) => (
                <motion.div
                  key={item.productId}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-[#0A0E27] border border-[#1DB679]/30 rounded-2xl p-6 flex gap-6 items-center hover:border-[#1DB679] transition-all group"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-black rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 border border-white/5 relative">
                     <div className="absolute inset-0 bg-[#1DB679]/5 mix-blend-overlay" />
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl text-white italic mb-1 truncate">{item.name}</h3>
                    <p className="text-[10px] text-[#B0B0B0] uppercase tracking-widest mb-3">{item.category}</p>
                    
                    {/* Quantity Control */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-black border border-white/10 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.productId, Math.max(0, item.quantity - 1))}
                          className="px-3 py-1.5 text-[#B0B0B0] hover:text-white hover:bg-white/5 transition-all text-sm font-bold"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-white font-bold text-xs font-sans">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="px-3 py-1.5 text-[#B0B0B0] hover:text-white hover:bg-white/5 transition-all text-sm font-bold"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="text-[#B0B0B0] hover:text-[#FF6B6B] transition-colors p-2"
                        title="Remove Item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-bold mb-1">Subtotal</p>
                    <p className="font-serif text-2xl text-[#1DB679] italic">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button
              onClick={clearCart}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF6B6B]/60 hover:text-[#FF6B6B] transition-colors flex items-center gap-2"
            >
              <Trash2 size={12} />
              Clear Entire Procurement
            </button>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0A0E27] border border-[#1DB679]/50 rounded-3xl p-8 sticky top-32 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DB679]/10 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <h2 className="font-serif text-2xl text-white italic mb-8 pb-4 border-b border-white/5 relative">Summary</h2>
              
              <div className="space-y-6 mb-10 relative">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-[#B0B0B0] uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="text-white text-sm font-bold font-sans">${cart.totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-[#B0B0B0] uppercase tracking-widest font-bold">Logistics</span>
                  <span className="text-[10px] text-[#1DB679] uppercase tracking-widest font-bold">Calculated at Checkout</span>
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                  <span className="text-[10px] text-white uppercase tracking-[0.2em] font-black">Total Acquisition</span>
                  <span className="text-[#00E5FF] font-serif text-4xl italic">${cart.totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-4 relative">
                {isAuthenticated ? (
                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-[#00E5FF] text-black py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[12px] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all"
                  >
                    Proceed to Protocol
                  </button>
                ) : (
                  <Link
                    to="/auth/signup"
                    className="block w-full bg-[#00E5FF] text-black py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[12px] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all text-center"
                  >
                    Authenticate to Purchase
                  </Link>
                )}

                <button
                  onClick={() => navigate('/collections')}
                  className="w-full border border-white/10 text-white/40 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] hover:text-white hover:border-white/30 transition-all"
                >
                  Continue Browsing
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                 <div className="flex items-center gap-3 opacity-30 grayscale">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-2" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-3" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
