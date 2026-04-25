import { useState, useEffect } from 'react';
import { Menu, User, Search, X, ChevronRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenSearch: () => void;
}

export function Header({ onOpenSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 80 && !isMenuOpen) { // scroll down
          setIsVisible(false);
        } else { // scroll up
          setIsVisible(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isMenuOpen]);

  const navItems = [
    { label: 'Shop All', path: '/shop' },
    { label: 'Skincare', path: '/shop/skincare' },
    { label: 'Makeup', path: '/shop/makeup' },
  ];

  const handleMobileClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 bg-brand-black/40 backdrop-blur-xl border-b border-brand-border/20"
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8">
        <Link 
          to="/"
          className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-50 uppercase font-serif"
          onClick={handleMobileClick}
        >
          GlowSkin
        </Link>
        
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `font-serif font-light tracking-widest uppercase transition-all duration-500 ease-in-out pb-1
                ${isActive ? 'text-slate-50 border-b border-brand-emerald' : 'text-slate-400 hover:text-slate-50'}
              `}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/profile"
            className={({ isActive }) => `font-serif font-light tracking-widest uppercase transition-all duration-500 ease-in-out pb-1
              ${isActive ? 'text-slate-50 border-b border-brand-emerald' : 'text-slate-400 hover:text-slate-50'}
            `}
          >
            Profile
          </NavLink>
        </nav>

        <div className="flex items-center space-x-6 md:space-x-8">
          <button 
            onClick={onOpenSearch}
            className="hidden md:block text-brand-emerald hover:text-slate-50 transition-colors"
          >
            <Search size={20} />
          </button>
          <Link 
            to="/profile"
            className="hidden md:block text-brand-emerald hover:text-slate-50 transition-colors"
          >
            <User size={20} />
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-emerald hover:text-slate-50 transition-colors md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-brand-black/80 backdrop-blur-2xl flex flex-col pt-32 pb-12 px-8 overflow-y-auto"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-brand-emerald hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col h-full max-w-lg mx-auto w-full">
              {/* Navigation Links */}
              <div className="space-y-10 mb-auto">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleMobileClick}
                      className="flex justify-between items-center text-5xl font-serif italic text-slate-50 border-b border-brand-border/20 pb-6 group"
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={24} className="text-brand-emerald group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions & Bottom Info */}
              <div className="mt-20 space-y-12">
                <div className="grid grid-cols-2 gap-6">
                  <button 
                    onClick={() => {
                      handleMobileClick();
                      onOpenSearch();
                    }}
                    className="flex flex-col items-center justify-center gap-4 p-8 bg-brand-charcoal border border-brand-border text-slate-300 rounded-sm hover:border-brand-emerald transition-colors"
                  >
                    <Search size={24} />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Search</span>
                  </button>
                  <Link 
                    to="/profile"
                    onClick={handleMobileClick}
                    className="flex flex-col items-center justify-center gap-4 p-8 bg-brand-charcoal border border-brand-border text-slate-300 rounded-sm hover:border-brand-emerald transition-colors"
                  >
                    <User size={24} />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Account</span>
                  </Link>
                </div>

                <div className="pt-8 border-t border-brand-border/30 flex justify-between items-center opacity-60">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Global Presence</span>
                    <span className="text-[10px] text-slate-300 uppercase tracking-widest italic">London / Paris / Kyoto</span>
                  </div>
                  <span className="text-[10px] text-brand-emerald font-bold uppercase tracking-widest italic">Aesthetic Integrity</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border pt-16 pb-32 md:pb-16 px-6 md:px-12 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <Link to="/" className="text-xl font-semibold tracking-tighter text-slate-50 mb-6 uppercase block">GlowSkin</Link>
          <p className="font-sans text-xs text-slate-400 leading-relaxed uppercase tracking-widest">
            A curated selection of the world's most trusted skincare and cosmetic brands.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full md:w-auto">
          <div>
            <h3 className="text-xs font-semibold text-slate-50 uppercase mb-6 tracking-widest">Atelier</h3>
            <ul className="space-y-3 text-[11px] text-slate-500 uppercase tracking-wider">
              <li><Link to="/about" className="hover:text-brand-emerald-light transition-colors">Our Origin</Link></li>
              <li><Link to="/sourcing" className="hover:text-brand-emerald-light transition-colors">Sourcing</Link></li>
              <li><Link to="/sustainability" className="hover:text-brand-emerald-light transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-50 uppercase mb-6 tracking-widest">Concierge</h3>
            <ul className="space-y-3 text-[11px] text-slate-500 uppercase tracking-wider">
              <li><Link to="/shipping" className="hover:text-brand-emerald-light transition-colors">Shipping</Link></li>
              <li><Link to="/contact" className="hover:text-brand-emerald-light transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-emerald-light transition-colors">Privacy</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="text-xs font-semibold text-slate-50 uppercase mb-6 tracking-widest">Legal</h3>
              <ul className="space-y-3 text-[11px] text-slate-500 uppercase tracking-wider">
                <li><Link to="/terms" className="hover:text-brand-emerald-light transition-colors">Terms of Service</Link></li>
                <li><Link to="/refund" className="hover:text-brand-emerald-light transition-colors">Refund Policy</Link></li>
                <li className="pt-4 border-t border-brand-border/10">
                  <Link 
                    to="/admin"
                    className="text-[9px] opacity-40 hover:opacity-100 hover:text-brand-emerald-light transition-all flex items-center gap-2 italic"
                  >
                    Curator Portal
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[9px] text-slate-500 uppercase tracking-[0.4em]">© 2024 GlowSkin</span>
        <div className="flex gap-8 text-[9px] text-slate-500 uppercase tracking-[0.4em]">
          <span>London</span>
          <span>Paris</span>
          <span>Kyoto</span>
        </div>
      </div>
    </footer>
  );
}
