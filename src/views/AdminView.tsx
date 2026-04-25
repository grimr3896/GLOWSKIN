import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { 
  Package, Users, TrendingUp, 
  Plus, Search, AlertCircle, CheckCircle2 
} from 'lucide-react';
import { Product } from '../types';
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

const COLORS = ['#10b981', '#059669', '#047857', '#064e3b'];

export function AdminView() {
  const products = PRODUCTS;
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div>
          <h1 className="font-serif text-5xl text-slate-50 mb-4 tracking-tight">Curator Dashboard</h1>
          <p className="text-slate-400 font-light italic">Orchestrating the botanical excellence of your atelier.</p>
        </div>
        <button className="mt-6 md:mt-0 flex items-center gap-3 px-8 py-4 bg-brand-emerald text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-800 transition-colors">
          <Plus size={16} />
          Append Artifact
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Fiscal Revenue', value: '€24,840', icon: TrendingUp, delta: '+12.5%' },
          { label: 'Purchases', value: '142', icon: Package, delta: '+8.2%' },
          { label: 'Client Base', value: '3,842', icon: Users, delta: '+2.4%' },
        ].map((stat) => (
          <div key={stat.label} className="bg-brand-charcoal border border-brand-border p-8 group hover:border-brand-emerald transition-colors">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</span>
              <stat.icon size={18} className="text-brand-emerald opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-baseline gap-4">
              <h3 className="font-serif text-3xl text-slate-50">{stat.value}</h3>
              <span className="text-[10px] text-brand-emerald-light font-bold uppercase tracking-widest">{stat.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-brand-charcoal border border-brand-border p-10">
          <h3 className="text-xs text-slate-300 uppercase tracking-widest font-bold mb-8">Revenue Projection (6 Mo)</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <XAxis dataKey="name" stroke="#525252" axisLine={false} tickLine={false} fontSize={10} />
                <YAxis stroke="#525252" axisLine={false} tickLine={false} fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '0px' }}
                  itemStyle={{ color: '#10b981' }}
                />
                <Bar dataKey="sales" fill="#14532d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-brand-charcoal border border-brand-border p-10">
          <h3 className="text-xs text-slate-300 uppercase tracking-widest font-bold mb-8">Category Saturation</h3>
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
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Inventory Management */}
      <div className="bg-brand-charcoal border border-brand-border overflow-hidden">
        <div className="p-8 border-b border-brand-border flex justify-between items-center bg-brand-black/20">
          <h3 className="text-xs text-slate-300 uppercase tracking-widest font-bold">Artifact Inventory</h3>
          <div className="relative w-64">
            <input 
              type="text" 
              placeholder="Query Stock..." 
              className="w-full bg-brand-black/40 border border-brand-border py-2 px-10 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-emerald transition-colors"
            />
            <Search className="absolute left-3 top-2.5 text-slate-500" size={14} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-black/40 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                <th className="px-8 py-6">Artifact</th>
                <th className="px-8 py-6">Category</th>
                <th className="px-8 py-6">Pecuniary</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6 text-right">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-brand-black/40 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img src={product.image_url} className="w-8 h-10 object-cover border border-brand-border grayscale opacity-50" referrerPolicy="no-referrer" />
                      <span className="font-sans text-[10px] uppercase tracking-[0.1em] font-extrabold text-slate-200">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-[10px] uppercase tracking-widest text-slate-500">{product.category}</td>
                  <td className="px-8 py-6 font-sans text-[10px] uppercase tracking-widest text-slate-300 font-bold">{product.price}</td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-brand-emerald-light font-bold">
                      <CheckCircle2 size={12} /> Active
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-200 transition-colors font-bold">Modify</button>
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
