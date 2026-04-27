import React, { useState, useEffect } from 'react';
import { Menu, User, Search, X, ChevronRight, Leaf, ShoppingBag, Instagram, Youtube, Mail, ArrowRight, Music2, Pin, LogOut } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenSearch: () => void;
}

export function Header({ onOpenSearch }: HeaderProps) {
  const { user, logout, isAuthenticated } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 80 && !isMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  const navSections = [
    { 
      label: 'Collections', 
      id: 'collections',
      items: [
        { name: 'All Products', path: '/collections' },
        { name: 'Hydration Remedies', path: '/collections/hydration' },
        { name: 'Anti-Aging Essences', path: '/collections/anti-aging' },
        { name: 'Clarity Treatments', path: '/collections/clarity' },
        { name: 'Sensitivity Support', path: '/collections/sensitivity' },
        { name: 'Seasonal Collections', path: '/collections/seasonal' },
      ]
    },
    { 
      label: 'About', 
      id: 'about',
      items: [
        { name: 'Our Story', path: '/about#story' },
        { name: 'Sustainability', path: '/about#sustainability' },
      ]
    },
    { 
      label: 'Atelier', 
      id: 'atelier',
      items: [
        { name: 'Our Origin', path: '/atelier/origin' },
        { name: 'Sourcing', path: '/atelier/sourcing' },
        { name: 'Sustainability', path: '/atelier/sustainability' },
        { name: 'Routines Guide', path: '/atelier/routines' },
      ]
    },
    { 
      label: 'Concierge', 
      id: 'concierge',
      items: [
        { name: 'Shipping Info', path: '/concierge/shipping' },
        { name: 'Contact Us', path: '/concierge/contact' },
        { name: 'FAQ', path: '/concierge/faq' },
        { name: 'Track Order', path: '/concierge/track' },
      ]
    }
  ];

  const handleMobileClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 bg-[#1A0809] border-b border-[#4D0E13]/30"
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 lg:py-6 max-w-[1600px] mx-auto">
        <Link 
          to="/"
          className="text-xl md:text-2xl font-serif text-white hover:text-[#C8A49F] transition-all flex items-center gap-2 group"
          onClick={handleMobileClick}
        >
          <GlowSkinLogo />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-12">
          <NavLink to="/" className="text-[12px] uppercase tracking-[0.3em] font-bold text-white hover:text-[#C8A49F] transition-colors">
            Home
          </NavLink>
          <NavLink to="/collections" className="text-[12px] uppercase tracking-[0.3em] font-bold text-white hover:text-[#C8A49F] transition-colors">
            Shop
          </NavLink>
          <div 
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown('info')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`text-[12px] uppercase tracking-[0.3em] font-bold flex items-center gap-1 transition-colors ${activeDropdown === 'info' ? 'text-[#C8A49F]' : 'text-white hover:text-[#C8A49F]'}`}>
              Info
            </button>
            
            <AnimatePresence>
              {activeDropdown === 'info' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#2C0F12] border-t-2 border-[#C8A49F] shadow-2xl py-4 px-2 mt-2 rounded-b-lg overflow-hidden"
                >
                  <div className="flex flex-col gap-1">
                    <Link
                      to="/about"
                      className="px-6 py-3 text-[11px] text-white hover:text-[#C8A49F] hover:bg-[#C8A49F]/5 transition-all uppercase tracking-widest font-bold rounded-md"
                      onClick={() => setActiveDropdown(null)}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="px-6 py-3 text-[11px] text-white hover:text-[#C8A49F] hover:bg-[#C8A49F]/5 transition-all uppercase tracking-widest font-bold rounded-md"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center space-x-6 md:space-x-8">
          <button 
            onClick={onOpenSearch}
            className="text-[#C8A49F]/60 hover:text-[#C8A49F] transition-colors"
          >
            <Search size={20} />
          </button>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold">
                <Link to="/profile" className="text-white hover:text-[#C8A49F] transition-colors flex items-center gap-2">
                  <User size={20} className="text-[#C8A49F]" />
                  <span className="hidden xl:block">{user?.name.split(' ')[0]}</span>
                </Link>
                <button onClick={handleLogout} className="text-[#C8A49F]/40 hover:text-[#FF6B6B] transition-colors">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link 
                to="/auth/signup"
                className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold text-[#C8A49F]/60 hover:text-white transition-colors border-b border-transparent hover:border-[#C8A49F] pb-1"
              >
                Sign Up
              </Link>
            )}
            <Link 
              to="/profile"
              className="md:hidden text-[#C8A49F]/60 hover:text-[#C8A49F] transition-colors"
            >
              <User size={20} />
            </Link>
          </div>
          <Link to="/cart" className="relative group">
            <ShoppingBag size={20} className="text-[#C8A49F]/60 group-hover:text-[#C8A49F] transition-colors" />
            <AnimatePresence>
              {cart.totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 bg-[#00E5FF] text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,229,255,0.4)]"
                >
                  {cart.totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#C8A49F]/60 hover:text-[#C8A49F] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[60] bg-[#1A0809] border-r-2 border-[#C8A49F] lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-[#4D0E13]/20">
              <GlowSkinLogo />
              <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col py-12 px-8 space-y-10 mt-12">
              <MobileNavItem to="/" label="Home" onClick={handleMobileClick} />
              <MobileNavItem to="/collections" label="Shop" onClick={handleMobileClick} />
              
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#C8A49F]/60 font-bold block mb-4 border-b border-[#4D0E13]/10 pb-2">Info</span>
                <div className="flex flex-col gap-6 pl-4 border-l border-[#C8A49F]/20">
                  <MobileNavItem to="/about" label="About" onClick={handleMobileClick} sub />
                  <MobileNavItem to="/contact" label="Contact" onClick={handleMobileClick} sub />
                </div>
              </div>
              
              <div className="pt-12 border-t border-[#4D0E13]/10 flex flex-col gap-8">
                <MobileNavItem to="/profile" label="Account" onClick={handleMobileClick} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function GlowSkinLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="font-serif text-2xl text-white tracking-tight group-hover:text-[#C8A49F] transition-colors underline decoration-[#4D0E13] decoration-2 underline-offset-8">GlowSkin</span>
      <Leaf size={20} className="text-[#C8A49F] group-hover:rotate-12 transition-transform" />
    </div>
  );
}

function MobileNavItem({ to, label, onClick, sub = false }: { to: string; label: string; onClick: () => void; sub?: boolean; key?: string }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${sub ? 'text-lg font-light text-[#C8A49F]/60' : 'text-3xl font-serif italic text-white'} hover:text-[#C8A49F] transition-colors tracking-wide`}
    >
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A0809] border-t border-[#4D0E13] pt-24 pb-12 px-6 md:px-12 mt-32 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl text-white">GlowSkin</h3>
            <p className="text-[#C8A49F]/70 text-sm leading-relaxed max-w-[280px] font-sans">
              Discover a curated collection that harmonizes science with the purest natural ingredients.
            </p>
            <div className="flex gap-6 pt-4">
              <SocialIcon href="https://instagram.com/glowskin"><Instagram size={22} /></SocialIcon>
              <SocialIcon href="https://pinterest.com/glowskin"><Pin size={22} /></SocialIcon>
              <SocialIcon href="https://tiktok.com/@glowskin"><Music2 size={22} /></SocialIcon>
              <SocialIcon href="https://youtube.com/glowskin"><Youtube size={22} /></SocialIcon>
              <SocialIcon href="mailto:hello@glowskin.com"><Mail size={22} /></SocialIcon>
            </div>
          </div>

          {/* Sourcing/Atelier Column */}
          <FooterSection title="Atelier">
            <li><Link to="/atelier/origin" className="footer-link">Our Origin</Link></li>
            <li><Link to="/atelier/sourcing" className="footer-link">Sourcing</Link></li>
            <li><Link to="/atelier/sustainability" className="footer-link">Sustainability</Link></li>
          </FooterSection>

          {/* Concierge Column */}
          <FooterSection title="Concierge">
            <li><Link to="/concierge/shipping" className="footer-link">Shipping</Link></li>
            <li><Link to="/concierge/faq" className="footer-link">FAQ</Link></li>
            <li><Link to="/concierge/track" className="footer-link">Track Order</Link></li>
          </FooterSection>

          {/* Legal Column */}
          <FooterSection title="Legal">
            <li><Link to="/legal/terms" className="footer-link">Terms of Service</Link></li>
            <li><Link to="/legal/refunds" className="footer-link">Refund Policy</Link></li>
            <li><Link to="/legal/privacy" className="footer-link">Privacy Policy</Link></li>
          </FooterSection>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-[#4D0E13]/20 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-6">
          <div className="flex flex-col gap-4 text-center lg:text-left">
             <span className="text-[11px] text-[#C8A49F]/40 uppercase tracking-[0.2em]">© 2024 GlowSkin. All rights reserved.</span>
             <div className="flex gap-4 text-[10px] text-[#C8A49F]/40 uppercase tracking-widest">
               <Link to="/legal/privacy" className="hover:text-[#C8A49F] transition-all">Privacy Policy</Link>
               <span>•</span>
               <Link to="/legal/terms" className="hover:text-[#C8A49F] transition-all">Terms</Link>
               <span>•</span>
               <Link to="/legal/refunds" className="hover:text-[#C8A49F] transition-all">Refunds</Link>
             </div>
          </div>


        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[#C8A49F]/60 hover:text-[#C8A49F] hover:scale-115 transition-all duration-300"
    >
      {children}
    </a>
  );
}

function FooterSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#C8A49F]/60 border-b border-[#4D0E13] pb-3 inline-block min-w-[80px]">
        {title}
      </h4>
      <ul className="space-y-4">
        {children}
      </ul>
      <style>{`
        .footer-link {
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          color: #FFFFFF;
          text-decoration: none;
          transition: all 300ms ease;
          display: block;
        }
        .footer-link:hover {
          color: #C8A49F;
          padding-left: 4px;
        }
      `}</style>
    </div>
  );
}
