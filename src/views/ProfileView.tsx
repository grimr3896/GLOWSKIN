import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, User as UserIcon, AlertCircle, ChevronRight, Package } from 'lucide-react';
import { User, Order } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getOrders } from '../lib/orderService';

export function ProfileView() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);
  const [activeModal, setActiveModal] = useState<'edit' | 'password' | 'order' | 'signout' | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      const allOrders = getOrders();
      // Filter orders for the current user
      const userOrders = allOrders.filter(o => o.userId === user.id);
      setOrders(userOrders);

      // Check for orderNumber in URL
      const params = new URLSearchParams(window.location.search);
      const orderNum = params.get('orderNumber');
      if (orderNum) {
        const orderToShow = userOrders.find(o => o.orderNumber === orderNum);
        if (orderToShow) {
          setSelectedOrder(orderToShow);
          setActiveModal('order');
          // Clear param to avoid re-opening on every render
          window.history.replaceState({}, '', window.location.pathname);
        }
      }
    }
  }, [isAuthenticated, user]);

  const handleSignOut = () => {
    logout();
    setActiveModal(null);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1A0809] flex items-center justify-center pt-32 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-[#1DB679]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#1DB679]/20">
            <UserIcon size={32} className="text-[#1DB679]" />
          </div>
          <h1 className="font-serif text-4xl text-white italic mb-4">Your Glow Journey Starts Here</h1>
          <p className="text-[#B0B0B0] text-sm mb-10 leading-relaxed font-sans">Sign in or create an account to view your orders, manage your profile, and complete your skincare routine.</p>
          
          <div className="space-y-4">
            <Link 
              to="/auth/signup"
              className="block w-full bg-[#1DB679] text-white py-4 rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(29,182,121,0.3)] transition-all text-center"
            >
              Sign Up / Join Us
            </Link>
            <Link to="/auth/signin" className="block text-[#B0B0B0] text-[11px] uppercase tracking-widest font-bold hover:text-white transition-colors">
              Already have an account? Sign In
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
             <div className="text-center">
                <p className="text-white text-xs font-bold mb-1">Track</p>
                <p className="text-[9px] text-[#B0B0B0] uppercase tracking-tighter">Orders</p>
             </div>
             <div className="text-center border-x border-white/5">
                <p className="text-white text-xs font-bold mb-1">Save</p>
                <p className="text-[9px] text-[#B0B0B0] uppercase tracking-tighter">Essentials</p>
             </div>
             <div className="text-center">
                <p className="text-white text-xs font-bold mb-1">Earn</p>
                <p className="text-[9px] text-[#B0B0B0] uppercase tracking-tighter">Glow Points</p>
             </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A0809] pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <h1 className="font-serif text-5xl text-white italic mb-2 tracking-tight">Your Profile</h1>
          <p className="text-[#B0B0B0] text-sm font-sans">Manage your essentials and historical procurements.</p>
        </header>

        <div className="space-y-8">
          {/* Profile Section */}
          <section className="bg-[#0A0E27] border border-[#1DB679] p-8 md:p-10 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-8 border-b border-[#1DB679]/20 pb-6">
              <h2 className="font-serif text-2xl text-white italic">Your Profile</h2>
              <CheckCircle2 className="text-[#1DB679]" size={20} />
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">Name</label>
                  <p className="text-white text-sm font-sans font-medium">{user?.name}</p>
                </div>
                <div>
                  <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">Email</label>
                  <p className="text-white text-sm font-sans font-medium">{user?.email}</p>
                </div>
                <div>
                  <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">Phone</label>
                  <p className="text-white text-sm font-sans font-medium">{user?.phone || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">Member since</label>
                  <p className="text-white text-sm font-sans font-medium">April 2024</p>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4 border-t border-white/5">
                <button 
                  onClick={() => setActiveModal('edit')}
                  className="bg-[#1DB679] text-white px-8 py-3 rounded-xl text-[11px] uppercase tracking-widest font-bold hover:shadow-[0_0_20px_rgba(29,182,121,0.3)] transition-all"
                >
                  Edit Profile
                </button>
                <button 
                  onClick={() => setActiveModal('password')}
                  className="border border-[#1DB679] text-[#1DB679] px-8 py-3 rounded-xl text-[11px] uppercase tracking-widest font-bold hover:bg-[#1DB679]/5 transition-all"
                >
                  Change Password
                </button>
                <button 
                  onClick={() => setActiveModal('signout')}
                  className="border border-[#B0B0B0] text-[#B0B0B0] px-8 py-3 rounded-xl text-[11px] uppercase tracking-widest font-bold hover:border-[#FF6B6B] hover:text-[#FF6B6B] transition-all"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </section>

          {/* Order History Section */}
          <section className="bg-[#0A0E27] border border-[#1DB679] p-8 md:p-10 rounded-2xl shadow-xl">
            <h2 className="font-serif text-2xl text-white italic mb-8 border-b border-[#1DB679]/20 pb-6">Order History</h2>
            
            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div 
                    key={order.id}
                    onClick={() => { setSelectedOrder(order); setActiveModal('order'); }}
                    className="group flex flex-col md:flex-row justify-between items-start md:items-center p-5 hover:bg-white/5 rounded-xl transition-all cursor-pointer border-b border-white/5 last:border-0"
                  >
                    <div className="flex flex-col gap-1 mb-2 md:mb-0">
                      <span className="text-white text-sm font-sans font-bold tracking-tight">{order.orderNumber}</span>
                      <span className="text-[#B0B0B0] text-[10px] uppercase tracking-[0.2em]">{new Date(order.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-10 w-full md:w-auto justify-between">
                      <span className="text-white text-sm font-sans font-bold">${order.total.toFixed(2)}</span>
                      <div className="flex items-center gap-4">
                        <span className={`text-[12px] font-bold ${order.status === 'delivered' ? 'text-[#1DB679]' : 'text-[#00E5FF]'}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)} {order.status === 'delivered' && '✓'}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1DB679]/20 transition-all">
                          <ChevronRight size={14} className="text-white/20 group-hover:text-[#1DB679] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-6 text-center md:text-left">
                  <button className="text-[#00E5FF] text-[12px] font-bold uppercase tracking-widest hover:underline underline-offset-8">View All Orders</button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <Package className="text-white/10 mx-auto mb-4" size={48} />
                <p className="text-[#B0B0B0] text-sm mb-8">Your historical procurements are empty.</p>
                <Link 
                  to="/collections" 
                  className="bg-[#00E5FF] text-[#000000] px-10 py-4 rounded-xl text-[12px] font-bold uppercase tracking-widest hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all"
                >
                  Start Shopping
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0A0E27] border border-[#1DB679] p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-8 right-8 text-[#B0B0B0] hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>

              {activeModal === 'edit' && (
                <div>
                  <h2 className="font-serif text-3xl text-white italic mb-10 border-b border-white/10 pb-6 tracking-tight">Edit Profile</h2>
                  <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); showToast('✓ Profile saved'); }} className="space-y-6">
                    <div className="space-y-5">
                      <div>
                        <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">First Name</label>
                        <input type="text" defaultValue={user?.name.split(' ')[0]} className="w-full bg-black border border-[#1DB679] rounded-xl px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/10" />
                      </div>
                      <div>
                        <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">Last Name</label>
                        <input type="text" defaultValue={user?.name.split(' ')[1]} className="w-full bg-black border border-[#1DB679] rounded-xl px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/10" />
                      </div>
                      <div>
                        <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">Primary Phone</label>
                        <input type="tel" defaultValue={user?.phone} className="w-full bg-black border border-[#1DB679] rounded-xl px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/10" />
                      </div>
                    </div>
                    <div className="flex gap-4 pt-8">
                      <button type="button" onClick={() => setActiveModal(null)} className="flex-1 border border-white/10 text-[#B0B0B0] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:text-white transition-all">Cancel</button>
                      <button type="submit" className="flex-1 bg-[#00E5FF] text-black py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">Save Protocols</button>
                    </div>
                  </form>
                </div>
              )}

              {activeModal === 'password' && (
                <div>
                  <h2 className="font-serif text-3xl text-white italic mb-10 border-b border-white/10 pb-6 tracking-tight">Security Protocol</h2>
                  <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); showToast('✓ Password changed'); }} className="space-y-6">
                    <div className="space-y-5">
                      <div>
                        <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">Current Secret</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-black border border-[#1DB679] rounded-xl px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/10" />
                      </div>
                      <div>
                        <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">New Secret</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-black border border-[#1DB679] rounded-xl px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/10" />
                      </div>
                      <div>
                        <label className="text-[10px] text-[#B0B0B0] uppercase tracking-[0.2em] font-black block mb-2">Confirm Secret</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-black border border-[#1DB679] rounded-xl px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/10" />
                      </div>
                    </div>
                    <div className="flex gap-4 pt-8">
                      <button type="button" onClick={() => setActiveModal(null)} className="flex-1 border border-white/10 text-[#B0B0B0] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:text-white transition-all">Cancel</button>
                      <button type="submit" className="flex-1 bg-[#00E5FF] text-black py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">Update Secret</button>
                    </div>
                  </form>
                </div>
              )}

              {activeModal === 'signout' && (
                <div className="text-center py-6">
                  <div className="w-20 h-20 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#FF6B6B]/20">
                    <AlertCircle size={40} className="text-[#FF6B6B]" />
                  </div>
                  <h2 className="font-serif text-3xl text-white italic mb-4 tracking-tight">End Session?</h2>
                  <p className="text-[#B0B0B0] text-sm mb-12 leading-relaxed">Are you sure you want to end your current GlowSkin routine session?</p>
                  <div className="flex gap-4">
                    <button onClick={() => setActiveModal(null)} className="flex-1 border border-white/10 text-[#B0B0B0] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:text-white transition-all">Cancel</button>
                    <button onClick={handleSignOut} className="flex-1 bg-[#FF6B6B] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,107,107,0.4)] transition-all">End Session</button>
                  </div>
                </div>
              )}

              {activeModal === 'order' && selectedOrder && (
                <div>
                   <h2 className="font-serif text-3xl text-white italic mb-8 border-b border-white/10 pb-6 tracking-tight">{selectedOrder.orderNumber}</h2>
                   <div className="grid grid-cols-2 gap-8 mb-10 text-sm">
                      <div>
                        <span className="text-[#B0B0B0] text-[10px] uppercase tracking-[0.2em] font-black block mb-2">Manifest Date</span>
                        <span className="text-white font-bold">{new Date(selectedOrder.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div>
                        <span className="text-[#B0B0B0] text-[10px] uppercase tracking-[0.2em] font-black block mb-2">Logistical Status</span>
                        <span className={`font-bold ${selectedOrder.status === 'delivered' ? 'text-[#1DB679]' : 'text-[#00E5FF]'}`}>
                          {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)} {selectedOrder.status === 'delivered' && '✓'}
                        </span>
                      </div>
                   </div>

                    <div className="space-y-4 max-h-56 overflow-y-auto mb-10 border-y border-white/5 py-6 pr-4 custom-scrollbar">
                      <p className="text-[#1DB679] text-[10px] uppercase tracking-[0.3em] font-black mb-4">Acquired Items</p>
                      {selectedOrder.items.map((item, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => { setActiveModal(null); navigate(`/product/${item.productId}`); }}
                          className="w-full flex justify-between items-center text-sm group text-left hover:bg-white/5 p-2 rounded-lg transition-all"
                        >
                          <div className="flex flex-col">
                            <span className="text-white font-medium group-hover:text-[#1DB679] transition-colors tracking-tight">{item.productName}</span>
                            <span className="text-[10px] text-[#B0B0B0] uppercase tracking-widest">Qty: {item.quantity}</span>
                          </div>
                          <span className="text-white font-bold tracking-tight">${(item.price * item.quantity).toFixed(2)}</span>
                        </button>
                      ))}
                    </div>

                   <div className="mb-10">
                      <p className="text-[#1DB679] text-[10px] uppercase tracking-[0.3em] font-black mb-4">Destination Routine</p>
                      <address className="not-italic text-white text-sm leading-relaxed tracking-wide opacity-80 font-serif italic">
                        {selectedOrder.shippingName}<br />
                        {selectedOrder.shippingAddress}<br />
                        {selectedOrder.shippingCity}, {selectedOrder.shippingZip}
                      </address>
                   </div>

                   <div className="flex justify-between items-center pt-8 border-t border-white/10">
                      <div>
                        <p className="text-[#B0B0B0] text-[10px] uppercase tracking-[0.2em] font-black mb-1">Total Procurement</p>
                        <span className="text-[#1DB679] font-serif text-3xl italic tracking-tight">${selectedOrder.total.toFixed(2)}</span>
                      </div>
                      <button onClick={() => setActiveModal(null)} className="px-10 py-4 bg-[#00E5FF] text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
                        Terminate View
                      </button>
                   </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] bg-[#1DB679] text-white px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(29,182,121,0.3)] font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-4 border border-white/10"
          >
            <CheckCircle2 size={20} />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1DB679;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
