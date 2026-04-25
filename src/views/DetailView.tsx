import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Leaf, RotateCcw, Heart, Share2, Plus, Minus, ChevronLeft } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export function DetailView() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'experience'>('description');

  const currentIndex = PRODUCTS.findIndex(p => p.id === productId);
  const nextProduct = currentIndex !== -1 && currentIndex < PRODUCTS.length - 1 ? PRODUCTS[currentIndex + 1] : null;
  const prevProduct = currentIndex > 0 ? PRODUCTS[currentIndex - 1] : null;

  const product = useMemo(() => 
    PRODUCTS.find(p => p.id === productId), 
    [productId]
  );

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="font-serif text-4xl text-slate-50 mb-8 italic">Artifact Not Found</h1>
        <Link to="/shop" className="text-brand-emerald-light uppercase tracking-[0.2em] text-xs font-bold border-b border-brand-emerald pb-1">
          Return to Collection
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: 'description', label: 'The Essence' },
    { id: 'ingredients', label: 'Composition' },
    { id: 'experience', label: 'The Experience' },
  ];

  return (
    <div className="w-full">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: Product Image */}
        <div className="relative bg-brand-charcoal overflow-hidden pt-32 pb-12 lg:py-0 flex flex-col items-center justify-center border-r border-brand-border h-full">
           <button 
            onClick={() => navigate(-1)}
            className="absolute top-32 left-12 z-20 flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors font-bold"
          >
            <ChevronLeft size={16} /> Back
          </button>

          {/* Inner-Collection Navigation */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-20">
            {prevProduct ? (
              <Link 
                to={`/product/${prevProduct.id}`}
                className="group flex flex-col gap-3 max-w-[140px]"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-slate-600 font-bold group-hover:text-brand-emerald-light transition-colors flex items-center gap-2">
                  <ChevronLeft size={12} /> Previous Artifact
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-white transition-colors truncate">{prevProduct.name}</span>
              </Link>
            ) : <div />}

            {nextProduct ? (
              <Link 
                to={`/product/${nextProduct.id}`}
                className="group flex flex-col gap-3 max-w-[140px] text-right"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-slate-600 font-bold group-hover:text-brand-emerald-light transition-colors flex items-center gap-2 justify-end">
                   Next Artifact <ChevronLeft size={12} className="rotate-180" />
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-white transition-colors truncate">{nextProduct.name}</span>
              </Link>
            ) : <div />}
          </div>

          <div className="w-full h-full max-h-[70vh] lg:max-h-[85vh] relative px-12 transition-transform duration-1000 hover:scale-[1.02]">
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-screen opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-8 text-slate-700">
             <button className="hover:text-brand-emerald transition-colors"><Heart size={20} /></button>
             <button className="hover:text-brand-emerald transition-colors"><Share2 size={20} /></button>
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center px-6 md:px-20 py-20 lg:py-32 bg-brand-black">
          <div className="max-w-xl">
            <nav className="flex items-center space-x-3 text-slate-700 text-[9px] uppercase tracking-[0.4em] font-bold mb-8">
              <Link to="/shop" className="hover:text-slate-400">Archives</Link>
              <span className="text-slate-800">/</span>
              <Link to={`/shop/${product.category.toLowerCase()}`} className="hover:text-slate-400">{product.category}</Link>
              <span className="text-slate-800">/</span>
              <span className="text-slate-500">{product.name}</span>
            </nav>

            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-emerald-light mb-6 block font-bold">
               {product.category} / {product.subcategory}
            </span>
            <h1 className="font-serif text-5xl md:text-8xl text-slate-50 mb-10 leading-[0.9] tracking-tighter uppercase font-medium">{product.name}</h1>
            
            <div className="flex items-baseline gap-8 mb-16 border-b border-brand-border pb-10">
              <span className="text-5xl font-light text-slate-50 tracking-tight font-serif italic text-balance">{product.price}</span>
            </div>

            {/* Tabbed Navigation */}
            <div className="mb-16">
              <div className="flex gap-10 border-b border-brand-border mb-8">
                {tabs.map(tab => (
                   <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all relative
                      ${activeTab === tab.id ? 'text-white' : 'text-slate-600 hover:text-slate-400'}
                    `}
                   >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div layoutId="tab-underline" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-brand-emerald" />
                    )}
                   </button>
                ))}
              </div>

              <div className="min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'description' && (
                      <div className="space-y-8">
                        <p className="text-lg text-slate-400 leading-relaxed font-extralight italic">
                          Targeted solution for professional-grade results. Part of our {product.category} archive.
                        </p>
                        
                        {product.benefits && (
                          <div className="space-y-4 pt-8 border-t border-brand-border/10">
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Key Benefits</h4>
                            <ul className="grid grid-cols-1 gap-4">
                              {product.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald-light mt-1.5 shrink-0" />
                                  <span className="text-sm text-slate-400 font-light italic leading-relaxed">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'ingredients' && (
                      <div className="p-8 bg-brand-charcoal border border-brand-border/30">
                        <p className="text-sm text-slate-400 leading-relaxed font-light italic text-justify">
                          {product.ingredients}
                        </p>
                        <div className="mt-8 pt-8 border-t border-brand-border/10">
                           <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600 font-bold">Clinical Declaration: Formulated without parabens, sulfates, or artificial fragrances.</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'experience' && (
                      <div className="space-y-10">
                        {product.how_to_use.map((text, i) => (
                          <div key={i} className="flex gap-8 group">
                            <span className="font-serif italic text-brand-emerald-light text-3xl opacity-20">0{i+1}</span>
                            <p className="text-sm text-slate-400 leading-relaxed font-light italic border-l border-brand-border/30 pl-8">{text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Action */}
            <div className="space-y-12">
              <button 
                onClick={() => navigate('/checkout', { state: { product, qty } })}
                className="group relative w-full py-8 bg-brand-emerald text-white text-[11px] uppercase tracking-[0.4em] overflow-hidden transition-all active:scale-[0.99] flex items-center justify-center gap-6 font-bold shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                <span className="relative z-10">Purchase Now</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-emerald-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Summary */}
      <section className="py-32 border-t border-brand-border bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-brand-surface p-12 border border-brand-border group hover:border-brand-emerald transition-colors">
              <Leaf className="text-brand-emerald-light mb-10 transition-transform group-hover:scale-110" size={40} />
              <h4 className="text-[10px] uppercase tracking-widest text-slate-200 font-bold mb-4">Ethical Synthesis</h4>
              <p className="text-sm text-slate-500 italic leading-relaxed">Vegan, cruelty-free, and ethically sourced from private nocturnal gardens across three continents.</p>
            </div>
            <div className="bg-brand-surface p-12 border border-brand-border group hover:border-brand-emerald transition-colors">
              <RotateCcw className="text-brand-emerald-light mb-10 transition-transform group-hover:scale-110" size={40} />
              <h4 className="text-[10px] uppercase tracking-widest text-slate-200 font-bold mb-4">Circular Vessel</h4>
              <p className="text-sm text-slate-500 italic leading-relaxed">Encased in infinitely recyclable obsidian glass designed to protect the sensitivity of the botanical molecules.</p>
            </div>
            <div className="bg-brand-surface p-12 border border-brand-border group hover:border-brand-emerald transition-colors">
               <div className="w-10 h-10 border-2 border-brand-emerald-light rounded-full mb-10 flex items-center justify-center text-brand-emerald-light font-bold text-xs italic">98%</div>
              <h4 className="text-[10px] uppercase tracking-widest text-slate-200 font-bold mb-4">Botanical Purity</h4>
              <p className="text-sm text-slate-500 italic leading-relaxed">98% organic extract concentration ensured by lunar-cycle harvesting and cold-press extraction techniques.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
