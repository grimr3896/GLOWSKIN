import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, X, Sprout, Sparkles, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export function SearchView({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'hydration' | 'essence'>('all');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) || 
                       p.subcategory.toLowerCase().includes(query.toLowerCase()) ||
                       p.benefits.some(b => b.toLowerCase().includes(query.toLowerCase()));
    const matchesFilter = filter === 'all' || p.category.toLowerCase() === filter.toLowerCase();
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="fixed inset-0 z-[60] bg-brand-black/95 backdrop-blur-xl overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header Search Input */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex-1 relative">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-emerald" size={32} />
            <input 
              type="text" 
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Query the archives..."
              className="w-full bg-transparent border-b-2 border-brand-border py-8 px-12 text-4xl md:text-6xl font-serif text-slate-100 placeholder:text-slate-800 focus:outline-none focus:border-brand-emerald transition-colors"
            />
          </div>
          <button onClick={onClose} className="ml-12 p-4 text-slate-500 hover:text-slate-100 transition-colors">
            <X size={40} />
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-12 mb-24 border-b border-brand-border pb-8">
           <div className="flex items-center gap-4 text-slate-500">
             <SlidersHorizontal size={16} />
             <span className="text-[10px] uppercase tracking-widest font-bold">Curation Filters:</span>
           </div>
           {[
             { id: 'all', label: 'All Artifacts' },
             { id: 'hydration', label: 'Hydration Essences' },
             { id: 'essence', label: 'Nocturnal Blooms' },
           ].map(f => (
             <button
               key={f.id}
               onClick={() => setFilter(f.id as any)}
               className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors
                 ${filter === f.id ? 'text-brand-emerald-light border-b border-brand-emerald' : 'text-slate-500 hover:text-slate-200'}
               `}
             >
               {f.label}
             </button>
           ))}
        </div>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                onClick={onClose}
                className="group cursor-pointer block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-brand-charcoal border border-brand-border mb-8 relative">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-brand-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Sparkles className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-slate-100 font-extrabold mb-2 leading-relaxed">{product.name}</h3>
                  <span className="font-serif text-xl text-brand-emerald-light">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-48 text-center bg-brand-charcoal border border-brand-border">
             <Sprout className="mx-auto mb-8 text-slate-800" size={64} />
             <h3 className="font-serif text-4xl text-slate-600 italic">The archives remain silent.</h3>
             <p className="text-slate-700 text-[10px] uppercase tracking-[0.3em] font-bold mt-4">Try refining your query or curator filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
