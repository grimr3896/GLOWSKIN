import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { 
  Package, Users, TrendingUp, 
  Plus, Search, CheckCircle2 
} from 'lucide-react';
import { PRODUCTS } from '../constants';

const data = [
  { name: 'Jan', sales: 4000, orders: 240 },
  { name: 'Feb', sales: 3000, orders: 198 },
  { name: 'Mar', sales: 2000, orders: 98 },
  { name: 'Apr', sales: 2780, orders: 390 },
  { name: 'May', sales: 1890, orders: 480 },
  { name: 'Jun', sales: 2390, orders: 380 },
];

const categoryData = [
  { name: 'Hydration', value: 400 },
  { name: 'Essence', value: 300 },
  { name: 'Experience', value: 300 },
  { name: 'Treatment', value: 200 },
];

const COLORS = ['#C8A49F', '#4D0E13', '#2C0F12', '#1A0809'];

export function AdminView() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1A0809] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-[#2C0F12] border border-[#4D0E13]/30 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A49F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h1 className="font-serif text-4xl text-white italic mb-4">Curator Portal</h1>
          <p className="text-sm text-[#C8A49F]/60 mb-10 leading-relaxed">This is the private administrative dashboard for GlowSkin curators and staff.</p>
          
          <form 
            onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#C8A49F]/40 font-bold">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-[#4D0E13] py-3 text-white outline-none focus:border-[#C8A49F] transition-colors" 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#C8A49F]/40 font-bold">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-[#4D0E13] py-3 text-white outline-none focus:border-[#C8A49F] transition-colors" 
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-[#C8A49F] text-[#4D0E13] text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-[1.02] active:scale-[0.98] transition-all rounded-full shadow-lg shadow-[#C8A49F]/20"
            >
              Sign In
            </button>
            <button type="button" className="w-full text-[10px] text-[#C8A49F]/40 uppercase tracking-widest hover:text-white transition-colors pt-4">
              Forgot password?
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-40 min-h-screen bg-[#1A0809]">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C8A49F] font-bold">The Archive Control</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white italic tracking-tight">Curator Dashboard</h1>
          <p className="text-[#C8A49F]/60 font-light italic">Orchestrating the botanical excellence of your atelier.</p>
        </div>
        <div className="flex gap-4 mt-8 md:mt-0">
          <button className="flex items-center gap-3 px-8 py-4 bg-[#2C0F12] border border-[#4D0E13]/30 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#4D0E13]/10 transition-colors rounded-full">
            Export Report
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-[#4D0E13] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#4D0E13]/80 transition-colors rounded-full shadow-lg">
            <Plus size={16} />
            Append Artifact
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Fiscal Revenue', value: '€24,840', icon: TrendingUp, delta: '+12.5%' },
          { label: 'Purchases', value: '142', icon: Package, delta: '+8.2%' },
          { label: 'Client Base', value: '3,842', icon: Users, delta: '+2.4%' },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#2C0F12] border border-[#4D0E13]/20 p-8 group hover:border-[#C8A49F] transition-all rounded-3xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] text-[#C8A49F]/60 uppercase tracking-widest font-bold">{stat.label}</span>
              <stat.icon size={18} className="text-[#C8A49F] opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-baseline gap-4">
              <h3 className="font-serif text-4xl text-white italic">{stat.value}</h3>
              <span className="text-[10px] text-[#4D0E13] font-bold uppercase tracking-widest">{stat.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-[#2C0F12] border border-[#4D0E13]/20 p-10 rounded-3xl">
          <h3 className="text-[10px] text-[#C8A49F]/40 uppercase tracking-[0.2em] font-bold mb-8 opacity-60">Revenue Projection (6 Mo)</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4D0E13" opacity={0.1} vertical={false} />
                <XAxis dataKey="name" stroke="#C8A49F" opacity={0.4} axisLine={false} tickLine={false} fontSize={10} />
                <YAxis stroke="#C8A49F" opacity={0.4} axisLine={false} tickLine={false} fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#2C0F12', border: '1px solid rgba(77, 14, 19, 0.3)', borderRadius: '12px', fontSize: '10px', textTransform: 'uppercase' }}
                  itemStyle={{ color: '#C8A49F' }}
                />
                <Bar dataKey="sales" fill="#4D0E13" radius={[12, 12, 12, 12]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-[#2C0F12] border border-[#4D0E13]/20 p-10 rounded-3xl">
          <h3 className="text-[10px] text-[#C8A49F]/40 uppercase tracking-[0.2em] font-bold mb-8 opacity-60">Category Saturation</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#2C0F12', border: '1px solid rgba(77, 14, 19, 0.3)', borderRadius: '12px', fontSize: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-[#2C0F12] border border-[#4D0E13]/20 overflow-hidden rounded-[2.5rem]">
        <div className="p-8 border-b border-[#4D0E13]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-[10px] text-[#C8A49F]/60 uppercase tracking-[0.2em] font-bold">Artifact Inventory</h3>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Query Stock..." 
              className="w-full bg-[#1A0809] border border-[#4D0E13]/30 rounded-full py-3 px-12 text-[10px] uppercase tracking-widest text-white focus:outline-none focus:border-[#C8A49F] transition-colors"
            />
            <Search className="absolute left-4 top-3 text-[#C8A49F]/40" size={16} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1A0809]/50 text-[10px] text-[#C8A49F]/40 uppercase tracking-widest font-bold">
                <th className="px-8 py-6">Artifact</th>
                <th className="px-8 py-6">Category</th>
                <th className="px-8 py-6">Pecuniary</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6 text-right">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#4D0E13]/10">
              {PRODUCTS.slice(0, 10).map((product) => (
                <tr key={product.id} className="hover:bg-[#1A0809]/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-6">
                      <img src={product.image_url} className="w-12 h-16 object-cover border border-[#4D0E13]/20 grayscale-[50%] group-hover:grayscale-0 transition-all rounded-lg" referrerPolicy="no-referrer" />
                      <span className="font-sans text-[11px] uppercase tracking-[0.1em] font-black text-white group-hover:text-[#C8A49F] transition-colors">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-[10px] uppercase tracking-widest text-[#C8A49F]/40">{product.category}</td>
                  <td className="px-8 py-6 text-[11px] text-white font-bold">{product.price}</td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#C8A49F] font-bold">
                      <CheckCircle2 size={14} /> Active
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="px-6 py-2 border border-[#4D0E13]/30 rounded-full text-[9px] uppercase tracking-widest text-[#C8A49F]/60 hover:text-[#C8A49F] hover:border-[#C8A49F] transition-all font-bold">Modify</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

