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
        <div className="max-w-md w-full bg-brand-charcoal border border-brand-border p-12 text-center">
          <Sparkles className="mx-auto mb-8 text-brand-emerald" size={48} />
          <h2 className="font-serif text-4xl text-slate-50 mb-6 italic">Preserve Your Practice</h2>
          <p className="text-slate-400 text-sm mb-12 font-extralight leading-relaxed italic">
            Access your curated gallery of essences and historical procurements.
          </p>
          <div className="space-y-4">
            <button className="w-full py-5 bg-brand-emerald text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-emerald-800 transition-all">
              Initialize Access
            </button>
            <button className="w-full py-5 border border-brand-border text-slate-300 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white/5 transition-all">
              Manifest Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 min-h-screen flex flex-col lg:flex-row gap-16">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 shrink-0">
        <div className="bg-brand-charcoal border border-brand-border p-12">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="w-24 h-24 rounded-full border border-brand-emerald p-1 mb-6">
              <div className="w-full h-full bg-brand-black flex items-center justify-center">
                <UserIcon size={40} className="text-brand-emerald" />
              </div>
            </div>
            <h3 className="font-serif text-2xl text-slate-50 italic mb-1">Aurelius Thorne</h3>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Inner Circle Member</span>
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
                className={`w-full flex items-center gap-6 px-4 py-4 border transition-all text-[11px] uppercase tracking-widest font-bold
                  ${activeTab === item.id 
                    ? 'bg-brand-emerald border-brand-emerald text-white' 
                    : 'border-transparent text-slate-500 hover:text-slate-200'}
                `}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center gap-6 px-4 py-4 text-slate-500 hover:text-red-400 transition-colors text-[11px] uppercase tracking-widest font-bold"
            >
              <LogOut size={16} />
              Dissolve Session
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Areas */}
      <main className="flex-1">
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
                <div className="border-b border-brand-border pb-8 mb-8">
                  <h2 className="font-serif text-5xl text-slate-50 italic mb-4">The Personal Practice</h2>
                  <p className="text-slate-400 italic font-extralight text-lg">Your skin is an echo of your environment. Curate its response.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-brand-charcoal border border-brand-border p-10">
                    <h3 className="text-xs text-slate-300 uppercase tracking-widest font-bold mb-8 flex items-center gap-3">
                      <Sparkles size={16} className="text-brand-emerald" />
                      Dermal Constitution
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-3">Skin Type</span>
                        <div className="flex flex-wrap gap-3">
                          {['Combination (Active)', 'Dehydrated', 'Seasonal Tension'].map(tag => (
                            <span key={tag} className="px-4 py-2 bg-brand-surface border border-brand-border text-[9px] uppercase tracking-widest text-slate-400">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-3">Concerns</span>
                        <div className="flex flex-wrap gap-3">
                          {['Luminosity', 'Elasticity', 'Nocturnal Repair'].map(tag => (
                            <span key={tag} className="px-4 py-2 border border-brand-emerald/30 text-[9px] uppercase tracking-widest text-brand-emerald-light">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-charcoal border border-brand-border p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs text-slate-300 uppercase tracking-widest font-bold mb-8 flex items-center gap-3">
                        <Shield size={16} className="text-brand-emerald" />
                        Inner Circle Benefits
                      </h3>
                      <p className="text-sm text-slate-400 italic mb-8 leading-relaxed">Your continued preservation has earned you early access to the upcoming Obsidian Moon collection.</p>
                    </div>
                    <button className="text-[10px] uppercase tracking-widest text-brand-emerald-light border-b border-brand-emerald w-fit font-bold hover:text-white transition-colors">
                      View Exclusive Offer
                    </button>
                  </div>
                </div>

                <div className="bg-brand-surface border border-brand-border p-10 lg:p-16 text-center">
                   <CheckCircle2 className="mx-auto mb-8 text-brand-emerald" size={32} />
                   <h3 className="font-serif text-3xl text-slate-50 mb-6 italic">Identity Verified</h3>
                   <div className="flex justify-center gap-12 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                     <span className="flex items-center gap-2">Two-Factor Active</span>
                     <span className="flex items-center gap-2 text-brand-emerald-light">Encrypted Vault</span>
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-8">
                 <div className="border-b border-brand-border pb-8 mb-8">
                  <h2 className="font-serif text-5xl text-slate-50 italic">Historical Archives</h2>
                  <p className="text-slate-400 italic font-extralight text-lg mt-4">A chronology of your botanical transitions.</p>
                </div>

                <div className="space-y-6">
                  {MOCK_ORDERS.map(order => (
                    <div key={order.id} className="bg-brand-charcoal border border-brand-border p-8 hover:border-brand-emerald/50 transition-all flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="flex gap-12">
                        <div>
                          <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold block mb-2">Identification</span>
                          <span className="font-serif text-lg text-slate-100">{order.orderNumber}</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold block mb-2">Manifested</span>
                          <span className="font-serif text-lg text-slate-100">{order.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-12">
                        <div className="text-right">
                          <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold block mb-2">Total Value</span>
                          <span className="font-serif text-xl text-brand-emerald-light italic">€{order.total}</span>
                        </div>
                        <div className="px-4 py-2 bg-brand-surface border border-brand-border text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                          {order.status}
                        </div>
                        <button className="p-3 border border-brand-border hover:bg-brand-emerald hover:border-brand-emerald text-white transition-all">
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
                 <div className="border-b border-brand-border pb-8 mb-12">
                  <h2 className="font-serif text-5xl text-slate-50 italic">Sanctuary Settings</h2>
                </div>

                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">Appellation</label>
                      <input type="text" defaultValue="Aurelius Thorne" className="w-full bg-transparent border-b border-brand-border py-4 font-serif text-lg text-slate-100 focus:outline-none focus:border-brand-emerald transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">Digital Address</label>
                      <input type="email" defaultValue="aurelius@thorne.com" className="w-full bg-transparent border-b border-brand-border py-4 font-serif text-lg text-slate-100 focus:outline-none focus:border-brand-emerald transition-colors" />
                    </div>
                  </div>

                  <div className="pt-8 space-y-8">
                    <div className="flex items-center justify-between p-6 bg-brand-charcoal border border-brand-border">
                      <div className="flex items-center gap-4">
                        <Mail className="text-brand-emerald" size={20} />
                        <div>
                          <p className="text-[11px] uppercase tracking-widest text-slate-200 font-bold mb-1">Botanical Insights</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-[0.1em]">Monthly dispatches from the atelier.</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-brand-emerald rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <button type="submit" className="px-12 py-5 bg-brand-emerald text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-emerald-800 transition-all">
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
