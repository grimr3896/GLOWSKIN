import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft, ArrowRight, Sparkles, Search, SlidersHorizontal } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { dbService } from '../services/dbService';
import { Product } from '../types';

export function CollectionView() {
  const { category: categoryUrl } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'default'>('default');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 8;
  
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const data = await dbService.getProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  const storeStructure = [
    {
      title: 'Skincare',
      categories: ['Cleansers', 'Moisturizers', 'Serums', 'Exfoliants', 'Toners']
    },
    {
      title: 'Makeup',
      categories: ['Foundation', 'Concealer', 'Lip Products', 'Mascara', 'Eyeliner']
    }
  ];

  // Map incoming URL slugs to display names and logic
  const activeCategory = categoryUrl?.toLowerCase();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.benefits.some(b => b.toLowerCase().includes(query)) ||
        p.subcategory.toLowerCase().includes(query)
      );
    }

    // Category / Subcategory filter
    if (activeCategory) {
      result = result.filter(p => {
        const pCat = p.category.toLowerCase();
        const pSub = p.subcategory.toLowerCase();
        
        // If the URL matches a major category (skincare/makeup)
        if (activeCategory === 'skincare' || activeCategory === 'makeup') {
          return pCat === activeCategory;
        }

        // If the URL matches a specific subcategory
        const normalizedSub = activeCategory.replace(/-/g, ' ');
        return pSub === normalizedSub || pSub === activeCategory;
      });
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => (a.price_amount || parseFloat(a.price.replace('$', ''))) - (b.price_amount || parseFloat(b.price.replace('$', ''))));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => (b.price_amount || parseFloat(b.price.replace('$', ''))) - (a.price_amount || parseFloat(a.price.replace('$', ''))));
    }

    return result;
  }, [products, searchQuery, sortBy, activeCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-brand-surface mt-24 rounded-[3rem] shadow-2xl relative">
      {/* Header */}
      <div className="mb-16">
        <nav className="flex items-center space-x-3 text-brand-emerald/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
          <Link to="/" className="hover:text-brand-emerald-light transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-brand-emerald-light transition-colors">Shop</Link>
          {categoryUrl && (
            <>
              <ChevronRight size={12} />
              <span className="text-brand-emerald">{categoryUrl}</span>
            </>
          )}
        </nav>
        <h1 className="font-serif text-4xl md:text-6xl italic text-brand-emerald border-b border-brand-border/30 pb-10 mb-10 leading-tight">
          {activeCategory ? activeCategory.replace(/-/g, ' ') : 'The Collection'}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <p className="max-w-xl text-brand-emerald/70 text-lg leading-relaxed font-light italic">
            Curated clinical and cosmetic solutions for radiant skin and effortless beauty. From foundational basics to targeted treatments.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-border group-focus-within:text-brand-emerald-light transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-brand-border rounded-full py-4 pl-14 pr-8 text-[11px] uppercase tracking-[0.2em] font-bold text-brand-emerald focus:outline-none focus:border-brand-emerald-light w-full md:w-72 transition-all placeholder:text-brand-border"
              />
            </div>
            
            <div className="relative group">
              <SlidersHorizontal className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-border transition-colors" size={16} />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-brand-border rounded-full py-4 pl-14 pr-12 text-[11px] uppercase tracking-[0.2em] font-bold text-brand-emerald focus:outline-none focus:border-brand-emerald-light w-full md:w-56 appearance-none transition-all cursor-pointer"
              >
                <option value="default">Sort by relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 space-y-16">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-emerald mb-10 pb-4 border-b border-brand-border">Shop</h3>
            {storeStructure.map((group) => (
              <div key={group.title} className="mb-10 last:mb-0">
                <Link 
                  to={`/shop/${group.title.toLowerCase()}`}
                  className={`text-[10px] font-black uppercase tracking-[0.1em] mb-6 block transition-colors hover:text-brand-emerald-light ${activeCategory === group.title.toLowerCase() ? 'text-brand-emerald' : 'text-brand-emerald/60'}`}
                >
                  {group.title}
                </Link>
                <ul className="space-y-4 text-[10px] text-brand-emerald/40 uppercase tracking-widest font-bold pl-4">
                  {group.categories.map((cat) => (
                    <li key={cat}>
                      <Link 
                        to={`/shop/${cat.toLowerCase().replace(/\s/g, '-')}`}
                        className={`flex items-center justify-between group hover:text-brand-emerald-light transition-colors ${activeCategory === cat.toLowerCase().replace(/\s/g, '-') ? 'text-brand-emerald' : ''}`}
                      >
                        <span>{cat}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <div className="p-10 bg-brand-emerald text-brand-surface rounded-3xl font-serif relative group overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-emerald-light/30 group-hover:bg-brand-emerald-light transition-all"></div>
              <p className="italic text-brand-surface/90 text-base mb-8 leading-relaxed font-light">"The water of life is not a substance, but a state of being."</p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-emerald-light font-sans font-extrabold flex items-center gap-2">
                <Sparkles size={14} /> The Archives
              </span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
              {paginatedProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-brand-border mb-10 rounded-[2rem] border border-brand-border shadow-lg">
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-emerald/5 group-hover:bg-transparent transition-colors"></div>
                      {product.limited && (
                        <div className="absolute top-8 right-8">
                           <span className="bg-brand-emerald text-brand-surface px-6 py-2 text-[10px] tracking-[0.3em] uppercase font-bold shadow-xl rounded-full">Limited Selection</span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-start px-2">
                      <div className="pr-4">
                        <h2 className="font-sans text-[11px] uppercase tracking-[0.2em] mb-3 leading-relaxed group-hover:text-brand-emerald-light transition-colors text-brand-emerald font-extrabold">{product.name}</h2>
                        <span className="text-[9px] uppercase tracking-widest text-brand-border font-extrabold">{product.subcategory}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-sans text-[10px] text-brand-emerald tracking-[0.2em] uppercase font-black block mb-1">{product.price}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-40 border border-brand-border/20 bg-brand-charcoal/30">
               <span className="font-serif italic text-4xl text-slate-600 mb-6">No selections found</span>
               <Link to="/shop" className="text-brand-emerald hover:text-white transition-colors uppercase tracking-[0.4em] text-[10px] font-bold">Clear All Filters</Link>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-32 flex items-center justify-center space-x-16 border-t border-brand-border pt-16">
              <button 
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`text-[10px] uppercase tracking-[0.4em] transition-colors flex items-center gap-3 font-bold ${currentPage === 1 ? 'text-slate-700 cursor-not-allowed' : 'text-slate-500 hover:text-brand-emerald-light'}`}
              >
                <ArrowLeft size={16} /> Previous
              </button>
              
              <div className="flex items-center space-x-12 font-serif italic text-2xl text-slate-600">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <span 
                    key={i} 
                    onClick={() => goToPage(i + 1)}
                    className={`cursor-pointer pb-2 border-b transition-all duration-300 ${currentPage === i+1 ? 'text-slate-50 border-brand-emerald' : 'border-transparent hover:text-slate-300'}`}
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`text-[10px] uppercase tracking-[0.4em] transition-colors flex items-center gap-3 font-bold ${currentPage === totalPages ? 'text-slate-700 cursor-not-allowed' : 'text-slate-500 hover:text-brand-emerald-light'}`}
              >
                Next <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
