import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User as UserIcon, Settings, Package, Heart, LogOut, 
  ChevronRight, Sparkles, Shield, Mail, CheckCircle2
} from 'lucide-react';
import { User, Order } from '../types';

const MOCK_ORDERS: Order[] = [
  {
    id: 'ord-123',
    orderNumber: 'AB-2024-0012',
    date: 'April 12, 2024',
    status: 'delivered',
    total: 345,
    items: []
  },
  {
    id: 'ord-124',
    orderNumber: 'AB-2024-0045',
    date: 'March 28, 2024',
    status: 'shipped',
    total: 184,
    items: []
  }
];

export function ProfileView() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'favorites' | 'settings'>('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock auth state

  if (!isLoggedIn) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-48 flex justify-center min-h-screen">
        <div className="max-w-md w-full bg-brand-surface border border-brand-border p-12 text-center rounded-[3rem] shadow-2xl">
          <Sparkles className="mx-auto mb-8 text-brand-emerald" size={48} />
          <h2 className="font-serif text-4xl text-brand-emerald mb-6 italic">Preserve Your Practice</h2>
          <p className="text-brand-emerald/70 text-sm mb-12 font-extralight leading-relaxed italic">
            Access your curated gallery of essences and historical procurements.
          </p>
          <div className="space-y-4">
            <button className="w-full py-5 bg-brand-emerald text-brand-surface text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-emerald-light transition-all rounded-full shadow-lg">
              Initialize Access
            </button>
            <button className="w-full py-5 border border-brand-border text-brand-emerald text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-emerald/5 transition-all rounded-full">
              Manifest Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 min-h-screen flex flex-col lg:flex-row gap-16 bg-brand-surface mt-24 rounded-[3rem] shadow-2xl relative overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 shrink-0">
        <div className="bg-white/40 backdrop-blur-md border border-brand-border/30 p-12 rounded-[2.5rem] shadow-xl">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="w-24 h-24 rounded-full border border-brand-emerald-light p-1 mb-6 shadow-[0_0_20px_rgba(200,164,159,0.3)]">
              <div className="w-full h-full bg-brand-surface flex items-center justify-center rounded-full overflow-hidden">
                <UserIcon size={40} className="text-brand-emerald" />
              </div>
            </div>
            <h3 className="font-serif text-2xl text-brand-emerald italic mb-1">Aurelius Thorne</h3>
            <span className="text-[10px] uppercase tracking-widest text-brand-emerald/40 font-bold font-sans">Inner Circle Member</span>
          </div>

          <nav className="space-y-4">
            {[
              { id: 'profile', label: 'Sanctuary', icon: UserIcon },
              { id: 'orders', label: 'Procurements', icon: Package },
              { id: 'favorites', label: 'Aura Favorites', icon: Heart },
              { id: 'settings', label: 'Configuration', icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-6 px-6 py-4 rounded-full transition-all text-[11px] uppercase tracking-widest font-bold
                  ${activeTab === item.id 
                    ? 'bg-brand-emerald text-brand-surface shadow-lg' 
                    : 'bg-transparent text-brand-emerald/60 hover:text-brand-emerald hover:bg-brand-emerald/5'}
                `}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center gap-6 px-6 py-4 text-brand-emerald/40 hover:text-red-900 transition-colors text-[11px] uppercase tracking-widest font-bold"
            >
              <LogOut size={16} />
              Dissolve Session
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Areas */}
      <main className="flex-1 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'profile' && (
              <div className="space-y-12">
                <div className="border-b border-brand-border/20 pb-8 mb-8">
                  <h2 className="font-serif text-5xl text-brand-emerald italic mb-4">The Personal Practice</h2>
                  <p className="text-brand-emerald/70 italic font-light text-lg">Your skin is an echo of your environment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/40 border border-brand-border/30 p-10 rounded-3xl shadow-sm">
                    <h3 className="text-xs text-brand-emerald uppercase tracking-widest font-black mb-8 flex items-center gap-3">
                      <Sparkles size={16} className="text-brand-emerald-light" />
                      Dermal Constitution
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] text-brand-emerald/40 uppercase tracking-widest font-bold block mb-3">Skin Type</span>
                        <div className="flex flex-wrap gap-3">
                          {['Combination (Active)', 'Dehydrated', 'Seasonal Tension'].map(tag => (
                            <span key={tag} className="px-4 py-2 bg-brand-surface border border-brand-border/20 rounded-full text-[9px] uppercase tracking-widest text-brand-emerald font-bold">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-emerald border border-brand-emerald p-10 flex flex-col justify-between rounded-3xl shadow-xl">
                    <div>
                      <h3 className="text-xs text-brand-surface uppercase tracking-widest font-black mb-8 flex items-center gap-3">
                        <Shield size={16} className="text-brand-emerald-light" />
                        Inner Circle Benefits
                      </h3>
                      <p className="text-sm text-brand-surface/90 italic mb-8 leading-relaxed">Your preservation practices have earned you exclusive rewards from the atelier.</p>
                    </div>
                    <button className="text-[10px] uppercase tracking-widest text-brand-emerald-light border-b-2 border-brand-emerald-light w-fit font-black hover:text-brand-surface transition-colors pb-1">
                      View Exclusive Offer
                    </button>
                  </div>
                </div>

                <div className="bg-white/60 border border-brand-border/30 p-10 lg:p-16 text-center rounded-[2.5rem] shadow-sm">
                   <CheckCircle2 className="mx-auto mb-8 text-brand-emerald-light" size={32} />
                   <h3 className="font-serif text-3xl text-brand-emerald mb-6 italic">Identity Verified</h3>
                   <div className="flex justify-center gap-12 text-[10px] uppercase tracking-[0.2em] text-brand-emerald/40 font-black">
                     <span className="flex items-center gap-2">Two-Factor Active</span>
                     <span className="flex items-center gap-2 text-brand-emerald-light">Encrypted Vault</span>
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-8">
                 <div className="border-b border-brand-border/20 pb-8 mb-8">
                  <h2 className="font-serif text-5xl text-brand-emerald italic">Historical Archives</h2>
                  <p className="text-brand-emerald/70 italic font-light text-lg mt-4">A chronology of your botanical transitions.</p>
                </div>

                <div className="space-y-6">
                  {MOCK_ORDERS.map(order => (
                    <div key={order.id} className="bg-white/40 border border-brand-border/30 p-8 rounded-3xl hover:border-brand-emerald transition-all flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
                      <div className="flex gap-12">
                        <div>
                          <span className="text-[9px] text-brand-emerald/40 uppercase tracking-widest font-bold block mb-2">Identification</span>
                          <span className="font-serif text-lg text-brand-emerald font-black tracking-tight">{order.orderNumber}</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-brand-emerald/40 uppercase tracking-widest font-bold block mb-2">Manifested</span>
                          <span className="font-serif text-lg text-brand-emerald">{order.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-12">
                        <div className="text-right">
                          <span className="text-[9px] text-brand-emerald/40 uppercase tracking-widest font-bold block mb-2">Total Value</span>
                          <span className="font-serif text-xl text-brand-emerald font-black italic">{order.total}€</span>
                        </div>
                        <div className="px-4 py-2 bg-brand-surface border border-brand-border/20 text-[9px] uppercase tracking-[0.2em] text-brand-emerald font-black rounded-full">
                          {order.status}
                        </div>
                        <button className="p-3 bg-brand-emerald text-brand-surface rounded-full hover:bg-brand-emerald-light transition-all shadow-lg">
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
               <div className="max-w-2xl">
                 <div className="border-b border-brand-border/20 pb-8 mb-12">
                  <h2 className="font-serif text-5xl text-brand-emerald italic">Sanctuary Settings</h2>
                </div>

                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] text-brand-emerald/40 uppercase tracking-widest font-bold block">Appellation</label>
                      <input type="text" defaultValue="Aurelius Thorne" className="w-full bg-transparent border-b border-brand-border/30 py-4 font-serif text-lg text-brand-emerald focus:outline-none focus:border-brand-emerald transition-colors" />
                    </div>
                  </div>

                  <div className="pt-8 space-y-8">
                    <button type="submit" className="px-12 py-5 bg-brand-emerald text-brand-surface text-[10px] uppercase tracking-[0.3em] font-black hover:bg-brand-emerald-light transition-all shadow-xl rounded-full">
                      Preserve Configurations
                    </button>
                  </div>
                </form>
               </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
