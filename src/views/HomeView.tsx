import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProducts } from '../lib/supabase';
import { Product } from '../types';

export function HomeView() {
  const [scincareProducts, setScincareProducts] = useState<Product[]>([]);
  const [makeupProducts, setMakeupProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data: allProducts } = await getProducts();
        if (allProducts) {
          const skincare = (allProducts as any).filter((p: any) => 
            ['cleansers', 'moisturizers', 'sunscreen'].includes(p.subcategory?.toLowerCase())
          ).slice(0, 4);
          
          const makeup = (allProducts as any).filter((p: any) => 
            ['foundation', 'lip products', 'mascara', 'concealer', 'eyebrow', 'eyeliner'].includes(p.subcategory?.toLowerCase())
          ).slice(0, 4);
          
          setScincareProducts(skincare);
          setMakeupProducts(makeup);
        }
      } catch (error) {
        console.error('Failed to load home products:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);
  return (
    <div className="w-full relative">
      <div className="fixed inset-0 -z-10 bg-brand-black">
        <img 
          src="https://i.pinimg.com/736x/c4/b0/a9/c4b0a9f7bbdffdaba1f1b0d974c2f887.jpg" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
          alt="Global Texture"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/20"></div>
      </div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0 text-white">
          <img 
            src="https://i.pinimg.com/1200x/92/4f/e7/924fe7d17dd4a5c688a072f143a239b0.jpg" 
            className="w-full h-full object-cover opacity-80 brightness-[1.1] scale-105"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black/40"></div>
        </div>
        
        <div className="relative z-10 text-left max-w-5xl px-8 md:px-16 lg:px-24 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-surface font-bold mb-6 drop-shadow-md">
              Essential Radiance
            </span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] text-brand-surface mb-8 leading-[0.9] tracking-tight font-medium drop-shadow-2xl">
              Glow Naturally.<br/>
              <span className="italic font-light">Shine Confidently.</span>
            </h1>
            
            <p className="max-w-md text-brand-surface italic text-base md:text-lg mb-12 leading-relaxed font-medium drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]">
              Discover a curated collection that harmonizes science with the purest natural ingredients.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <Link 
                to="/shop"
                className="inline-block px-12 py-5 bg-brand-surface text-brand-emerald font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-emerald-light hover:text-white transition-all shadow-[0_0_40px_rgba(238,228,218,0.3)] rounded-full"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skincare Section */}
      <section className="py-48 px-6 md:px-12 max-w-[1600px] mx-auto bg-brand-surface my-24 rounded-[4rem] shadow-2xl relative overflow-hidden group/section">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 select-none pointer-events-none opacity-[0.03] group-hover/section:opacity-[0.05] transition-opacity duration-1000">
          <span className="font-serif text-[40rem] text-brand-emerald italic leading-none">D</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-brand-border/30 pb-12 relative z-10">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-8xl text-brand-emerald italic leading-tight">Dermal <br/><span className="font-light not-italic text-brand-emerald/80">Basics</span></h2>
            <p className="font-sans text-[10px] text-brand-emerald/40 tracking-[0.4em] uppercase font-bold">The Archive / Scientifically Formulated</p>
          </div>
          <Link to="/shop" className="text-brand-emerald group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black mt-8 md:mt-0">
            View All <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {scincareProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`group relative bg-white/40 border border-brand-border/20 rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${i % 2 === 1 ? 'lg:mt-12' : ''}`}
            >
              <Link to={`/product/${product.id}`} className="block aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 grayscale-[20%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-emerald/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </Link>
              <div className="p-10 text-center">
                <span className="text-[9px] text-brand-emerald-light uppercase tracking-widest font-black block mb-4">{product.subcategory}</span>
                <h3 className="font-sans text-[14px] uppercase tracking-[0.2em] text-brand-emerald font-black mb-4 leading-relaxed group-hover:text-brand-emerald-light transition-colors h-14 overflow-hidden">{product.name}</h3>
                <div className="h-[1px] w-8 bg-brand-border/40 mx-auto mb-6"></div>
                <span className="text-[13px] font-sans text-brand-border tracking-[0.3em] uppercase font-black">${Number(product.price).toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Makeup Section */}
      <section className="py-48 px-6 md:px-12 max-w-[1600px] mx-auto bg-brand-surface my-24 rounded-[4rem] shadow-2xl relative overflow-hidden group/makeup">
        {/* Background Decorative Element */}
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 select-none pointer-events-none opacity-[0.03] group-hover/makeup:opacity-[0.05] transition-opacity duration-1000">
          <span className="font-serif text-[40rem] text-brand-emerald italic leading-none">A</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-brand-border/30 pb-12 relative z-10">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-7xl text-brand-emerald italic leading-tight">Artistry <br/><span className="font-light not-italic text-brand-emerald/80">Artifacts</span></h2>
            <p className="font-sans text-[10px] text-brand-emerald/40 tracking-[0.4em] uppercase font-bold">Curated Selection / Effortless Wear</p>
          </div>
          <Link to="/shop" className="text-brand-emerald group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black mt-8 md:mt-0">
            Explore Palette <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {makeupProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`group relative bg-white/40 border border-brand-border/20 rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${i % 2 === 0 ? 'lg:mt-12' : ''}`}
            >
              <Link to={`/product/${product.id}`} className="block aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 grayscale-[20%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-emerald/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </Link>
              <div className="p-10 text-center">
                <span className="text-[9px] text-brand-emerald-light uppercase tracking-widest font-black block mb-4">{product.subcategory}</span>
                <h3 className="font-sans text-[14px] uppercase tracking-[0.2em] text-brand-emerald font-black mb-4 leading-relaxed group-hover:text-brand-emerald-light transition-colors h-14 overflow-hidden">{product.name}</h3>
                <div className="h-[1px] w-8 bg-brand-border/40 mx-auto mb-6"></div>
                <span className="text-[13px] font-sans text-brand-border tracking-[0.3em] uppercase font-black">${Number(product.price).toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial Storytelling */}
      <section className="py-48 bg-brand-surface my-24 max-w-[1600px] mx-auto rounded-[4rem] shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden border border-brand-emerald shadow-2xl rounded-[3rem]"
            >
              <img 
                src="https://i.pinimg.com/736x/3c/67/2c/3c672ca9b4dd71d9b7a18914876f0b18.jpg" 
                className="w-full h-full object-cover brightness-95 transition-all duration-1000 hover:scale-105"
                alt="Storytelling Image"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-emerald/20 to-transparent"></div>
            </motion.div>
          </div>
          <div className="lg:col-span-6 lg:pl-16 text-brand-emerald">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs text-brand-emerald-light uppercase tracking-[0.4em] mb-12 block font-extrabold relative">
                The Archive
                <div className="absolute -bottom-4 left-0 w-12 h-[2px] bg-brand-emerald-light"></div>
              </span>
              <h2 className="font-serif text-6xl md:text-8xl text-brand-emerald mb-12 leading-tight italic">Rooted in <br/><span className="italic font-light">Heritage</span></h2>
              <p className="text-xl text-brand-emerald/80 mb-16 leading-relaxed font-light italic">
                Our curated collection features the finest artisanal and clinical formulations. From the world's leading labs to your daily routine, we bridge the gap between tradition and innovation.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 sm:gap-16">
                <Link to="/shop" className="flex items-center gap-6 group">
                  <span className="text-xs uppercase tracking-[0.3em] text-brand-emerald font-black">Unveil the Collection</span>
                  <div className="w-14 h-14 rounded-full border border-brand-emerald flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-brand-surface transition-all duration-500 shadow-lg">
                    <ArrowRight size={22} />
                  </div>
                </Link>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-brand-emerald/40 font-bold mb-1">Global Atelier</span>
                  <span className="text-xs font-serif italic text-brand-emerald">Crafted for Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-8">
            <img 
              src="https://i.pinimg.com/736x/af/e8/90/afe890d10c03f79e30ae9af512216ffd.jpg"
              className="w-full aspect-[3/4] object-cover border border-brand-border shadow-sm transition-transform duration-700 hover:scale-[1.02]"
              alt="Gallery 1"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8 md:pt-32">
            <img 
              src="https://i.pinimg.com/736x/56/0c/04/560c04fa8f2aad334f86fd680802b7bb.jpg"
              className="w-full aspect-[3/4] object-cover border border-brand-border shadow-sm transition-transform duration-700 hover:scale-[1.02]"
              alt="Gallery 2"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <img 
              src="https://i.pinimg.com/1200x/91/1c/2c/911c2cf7e33781a5b8993085c210f881.jpg"
              className="w-full aspect-[3/4] object-cover border border-brand-border shadow-sm transition-transform duration-700 hover:scale-[1.02]"
              alt="Gallery 3"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8 md:pt-32">
            <div className="bg-brand-emerald w-full aspect-[3/4] flex flex-col justify-center items-center p-12 rounded-3xl border border-brand-emerald-light/20 text-center group transition-all hover:bg-brand-emerald-light/10">
              <Sparkles className="text-brand-surface mb-8 transition-transform group-hover:scale-110" size={48} />
              <h4 className="font-serif text-2xl text-brand-surface uppercase mb-4 tracking-widest italic">Skin Analysis</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-emerald-light leading-relaxed font-bold">Personalized routines for your unique profile.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
