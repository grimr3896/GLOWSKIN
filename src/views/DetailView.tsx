import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Leaf, RotateCcw, Heart, Share2, Plus, Minus, ChevronLeft, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useError } from '../context/ErrorContext';
import { ErrorCode } from '../types/errors';

export function DetailView() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const { addError } = useError();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'experience'>('description');
  const [toast, setToast] = useState<string | null>(null);

  const currentIndex = PRODUCTS.findIndex(p => p.id === productId);
  const nextProduct = currentIndex !== -1 && currentIndex < PRODUCTS.length - 1 ? PRODUCTS[currentIndex + 1] : null;
  const prevProduct = currentIndex > 0 ? PRODUCTS[currentIndex - 1] : null;

  const product = useMemo(() => 
    PRODUCTS.find(p => p.id === productId), 
    [productId]
  );

  useEffect(() => {
    if (!product && productId) {
      addError(ErrorCode.PRODUCT_NOT_FOUND);
    }
  }, [product, productId, addError]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/auth/signup');
      return;
    }
    if (product) {
      addToCart(product, qty);
      showToast(`✓ Added ${qty} to cart`);
      setQty(1);
    }
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      navigate('/auth/signup');
      return;
    }
    if (product) {
      addToCart(product, qty);
      navigate('/checkout');
    }
  };

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
        <div className="relative bg-brand-black overflow-hidden pt-32 pb-12 lg:py-0 flex flex-col items-center justify-center border-r border-brand-border/10 h-full">
           <button 
            onClick={() => navigate(-1)}
            className="absolute top-32 left-12 z-20 flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-emerald-light hover:text-brand-surface transition-colors font-bold"
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
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-emerald-light/40 font-bold group-hover:text-brand-emerald-light transition-colors flex items-center gap-2">
                  <ChevronLeft size={12} /> Previous Artifact
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-surface group-hover:text-white transition-colors truncate">{prevProduct.name}</span>
              </Link>
            ) : <div />}

            {nextProduct ? (
              <Link 
                to={`/product/${nextProduct.id}`}
                className="group flex flex-col gap-3 max-w-[140px] text-right"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-brand-emerald-light/40 font-bold group-hover:text-brand-emerald-light transition-colors flex items-center gap-2 justify-end">
                   Next Artifact <ChevronLeft size={12} className="rotate-180" />
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-surface group-hover:text-white transition-colors truncate">{nextProduct.name}</span>
              </Link>
            ) : <div />}
          </div>

          <div className="w-full h-full max-h-[70vh] lg:max-h-[85vh] relative px-12 transition-transform duration-1000 hover:scale-[1.02]">
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-screen opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-8 text-brand-emerald-light/40">
             <button className="hover:text-brand-emerald-light transition-colors"><Heart size={20} /></button>
             <button className="hover:text-brand-emerald-light transition-colors"><Share2 size={20} /></button>
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center px-6 md:px-20 py-20 lg:py-32 bg-brand-surface">
          <div className="max-w-xl">
            <nav className="flex items-center space-x-3 text-brand-emerald/40 text-[9px] uppercase tracking-[0.4em] font-bold mb-8">
              <Link to="/shop" className="hover:text-brand-emerald">Archives</Link>
              <span className="text-brand-border">/</span>
              <Link to={`/shop/${product.category.toLowerCase()}`} className="hover:text-brand-emerald">{product.category}</Link>
              <span className="text-brand-border">/</span>
              <span className="text-brand-emerald">{product.name}</span>
            </nav>

            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-emerald-light mb-6 block font-extrabold">
               {product.category} / {product.subcategory}
            </span>
            <h1 className="font-serif text-5xl md:text-8xl text-brand-emerald mb-10 leading-[0.9] tracking-tighter uppercase font-medium">{product.name}</h1>
            
            <div className="flex items-baseline gap-8 mb-16 border-b border-brand-border/20 pb-10">
              <span className="text-3xl font-sans text-brand-emerald tracking-[0.1em] uppercase font-light">{product.price}</span>
            </div>

            {/* Tabbed Navigation */}
            <div className="mb-16">
              <div className="flex gap-10 border-b border-brand-border/20 mb-8">
                {tabs.map(tab => (
                   <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all relative
                      ${activeTab === tab.id ? 'text-brand-emerald' : 'text-brand-emerald/30 hover:text-brand-emerald'}
                    `}
                   >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div layoutId="tab-underline" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-brand-emerald-light" />
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
                        <p className="text-lg text-brand-emerald/70 leading-relaxed font-light italic">
                          Targeted solution for professional-grade results. Part of our {product.category} archive.
                        </p>
                        
                        {product.benefits && (
                          <div className="space-y-4 pt-8 border-t border-brand-emerald/10">
                            <h4 className="text-[10px] text-brand-emerald-light uppercase tracking-widest font-black">Benefits</h4>
                            <ul className="grid grid-cols-1 gap-4">
                              {product.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald-light mt-1.5 shrink-0" />
                                  <span className="text-sm text-brand-emerald/80 font-light italic leading-relaxed">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'ingredients' && (
                      <div className="p-10 bg-white/40 border border-brand-border/20 rounded-3xl backdrop-blur-sm">
                        <p className="text-sm text-brand-emerald/70 leading-relaxed font-light italic text-justify">
                          {product.ingredients}
                        </p>
                        <div className="mt-8 pt-8 border-t border-brand-border/10">
                           <span className="text-[9px] uppercase tracking-[0.2em] text-brand-emerald/40 font-bold">Clinical Declaration: For every skin type.</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'experience' && (
                      <div className="space-y-10">
                        {product.how_to_use.map((text, i) => (
                          <div key={i} className="flex gap-8 group">
                            <span className="font-serif italic text-brand-emerald-light text-3xl opacity-40">0{i+1}</span>
                            <p className="text-sm text-brand-emerald/70 leading-relaxed font-light italic border-l border-brand-border/30 pl-8">{text}</p>
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
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-black border border-brand-emerald/30 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-5 py-3 text-brand-emerald-light hover:bg-white/5 transition-all font-bold"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-brand-emerald-light font-serif italic text-xl">{qty}</span>
                  <button 
                    onClick={() => setQty(Math.min(10, qty + 1))}
                    className="px-5 py-3 text-brand-emerald-light hover:bg-white/5 transition-all font-bold"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="text-[9px] text-brand-emerald-light/40 uppercase tracking-widest font-black leading-tight">
                  Maximum 10 units <br /> per procurement
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-brand-surface border border-brand-emerald-light text-brand-emerald py-6 rounded-full text-[11px] uppercase tracking-[0.4em] font-black hover:bg-brand-emerald-light hover:text-brand-surface transition-all flex items-center justify-center gap-3 group shadow-xl"
                >
                  <ShoppingBag size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                  Add to Reserve
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-brand-emerald text-brand-surface py-6 rounded-full text-[11px] uppercase tracking-[0.4em] font-black hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-3 group"
                >
                  Acquire Now
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] bg-brand-emerald text-brand-surface px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-4 border border-white/10"
          >
            <CheckCircle2 size={18} />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Specs Summary */}
      <section className="py-32 border-t border-brand-border/10 bg-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-brand-surface p-14 rounded-[2rem] border border-brand-border/20 group hover:border-brand-emerald-light transition-all shadow-sm">
              <Leaf className="text-brand-emerald-light mb-10 transition-transform group-hover:scale-110" size={40} />
              <h4 className="text-[10px] uppercase tracking-widest text-brand-emerald font-black mb-4">Ethical Synthesis</h4>
              <p className="text-sm text-brand-emerald/60 italic leading-relaxed">Vegan, cruelty-free, and ethically sourced from private gardens.</p>
            </div>
            <div className="bg-brand-surface p-14 rounded-[2rem] border border-brand-border/20 group hover:border-brand-emerald-light transition-all shadow-sm">
              <RotateCcw className="text-brand-emerald-light mb-10 transition-transform group-hover:scale-110" size={40} />
              <h4 className="text-[10px] uppercase tracking-widest text-brand-emerald font-black mb-4">Circular Vessel</h4>
              <p className="text-sm text-brand-emerald/60 italic leading-relaxed">Infinitely recyclable materials designed to protect the purity of the formulae.</p>
            </div>
            <div className="bg-brand-surface p-14 rounded-[2rem] border border-brand-border/20 group hover:border-brand-emerald-light transition-all shadow-sm">
               <div className="w-10 h-10 border-2 border-brand-emerald-light rounded-full mb-10 flex items-center justify-center text-brand-emerald-light font-black text-xs italic">98%</div>
              <h4 className="text-[10px] uppercase tracking-widest text-brand-emerald font-black mb-4">Botanical Purity</h4>
              <p className="text-sm text-brand-emerald/60 italic leading-relaxed">98% organic extract concentration ensured by advanced harvesting techniques.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
