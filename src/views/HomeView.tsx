import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export function HomeView() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img 
            src="https://i.pinimg.com/1200x/eb/84/7d/eb847d1fbf1da21f7c215fdd31de1658.jpg" 
            className="w-full h-full object-cover opacity-70 brightness-[0.8] scale-105"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black"></div>
        </div>
        
        <div className="relative z-10 text-left max-w-4xl px-12 md:px-24 lg:px-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-50 mb-8 tracking-tight font-light"
          >
            Science Meets <br/><span className="italic font-light">Skin Radiance</span>
          </motion.h1>

          <Link 
            to="/shop"
            className="inline-block px-12 py-5 bg-brand-emerald text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-emerald-800 transition-all border border-brand-emerald"
          >
            Enter the Collection
          </Link>
        </div>
      </section>

      {/* Skincare Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-brand-border pb-8">
          <h2 className="font-serif text-4xl md:text-6xl text-slate-50 uppercase tracking-widest">Skincare Basics</h2>
          <span className="font-sans text-xs text-slate-500 tracking-widest uppercase">Fundamental / Clinical</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => ['cleansers', 'moisturizers', 'sunscreen'].includes(p.subcategory.toLowerCase())).slice(0, 4).map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative bg-brand-charcoal border border-brand-border overflow-hidden ${i % 2 === 1 ? 'lg:mt-12' : ''}`}
            >
              <Link to={`/product/${product.id}`} className="block aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 grayscale-[20%] group-hover:grayscale-0"
                />
              </Link>
              <div className="p-8">
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-slate-100 font-extrabold mb-2 leading-relaxed">{product.name}</h3>
                <span className="text-lg font-serif text-brand-emerald-light tracking-tight italic">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial Storytelling */}
      <section className="py-32 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-video md:aspect-square overflow-hidden border border-brand-border shadow-2xl">
              <img 
                src="https://i.pinimg.com/736x/3c/67/2c/3c672ca9b4dd71d9b7a18914876f0b18.jpg" 
                className="w-full h-full object-cover brightness-75 transition-all duration-1000 group-hover:scale-105"
                alt="Storytelling Image"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/60 to-transparent"></div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-12 text-white">
            <span className="text-xs text-brand-emerald-light uppercase tracking-[0.3em] mb-8 block font-medium">The Science</span>
            <h2 className="font-serif text-5xl md:text-7xl text-slate-50 mb-10 leading-tight italic">Rooted in <br/><span className="italic font-light">Quality</span></h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light italic">
              We curate only the most effective formulations from world-renowned brands. Each product in our selection is dermatologically tested and chosen for its ability to deliver visible, long-lasting results.
            </p>
            <Link to="/shop" className="flex items-center gap-6 group">
              <span className="text-xs uppercase tracking-widest text-slate-100 font-bold">Explore Our Standards</span>
              <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-emerald-light group-hover:bg-brand-emerald group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Makeup Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-brand-border pb-8">
          <h2 className="font-serif text-4xl md:text-6xl text-slate-50 uppercase tracking-widest">Makeup Edits</h2>
          <span className="font-sans text-xs text-slate-500 tracking-widest uppercase">Cosmetic / Artistry</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => ['foundation', 'lip products', 'mascara'].includes(p.subcategory.toLowerCase())).slice(0, 4).map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative bg-brand-charcoal border border-brand-border overflow-hidden ${i % 2 === 1 ? 'lg:mt-12' : ''}`}
            >
              <Link to={`/product/${product.id}`} className="block aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 grayscale-[20%] group-hover:grayscale-0"
                />
              </Link>
              <div className="p-8">
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-slate-100 font-extrabold mb-2 leading-relaxed">{product.name}</h3>
                <span className="text-lg font-serif text-brand-emerald-light tracking-tight italic">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-8">
            <img 
              src="https://i.pinimg.com/736x/91/55/3f/91553f41d408466f657b3ddd7a3570fb.jpg"
              className="w-full aspect-[3/4] object-cover border border-brand-border grayscale transition-all duration-700 hover:grayscale-0 opacity-60 hover:opacity-100"
              alt="Gallery 1"
            />
          </div>
          <div className="space-y-8 md:pt-32">
            <img 
              src="https://i.pinimg.com/1200x/ac/3a/ff/ac3aff4e2e39179aed3df6748635731b.jpg"
              className="w-full aspect-[3/4] object-cover border border-brand-border grayscale transition-all duration-700 hover:grayscale-0 opacity-60 hover:opacity-100"
              alt="Gallery 2"
            />
          </div>
          <div className="space-y-8">
            <img 
              src="https://i.pinimg.com/1200x/c6/5f/e8/c65fe8e361ee1e132574323d60ca877d.jpg"
              className="w-full aspect-[3/4] object-cover border border-brand-border grayscale transition-all duration-700 hover:grayscale-0 opacity-60 hover:opacity-100"
              alt="Gallery 3"
            />
          </div>
          <div className="space-y-8 md:pt-32">
            <div className="bg-brand-surface w-full aspect-[3/4] flex flex-col justify-center items-center p-12 border border-brand-border text-center group transition-all hover:bg-brand-emerald/10">
              <Sparkles className="text-brand-emerald-light mb-8 transition-transform group-hover:scale-110" size={48} />
              <h4 className="font-serif text-2xl text-slate-50 uppercase mb-4 tracking-widest italic">Skin Analysis</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 leading-relaxed font-bold">Personalized routines based on your unique skin profile.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
