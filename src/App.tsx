import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Header, Footer } from './components/Layout';
import { HomeView } from './views/HomeView';
import { CollectionView } from './views/CollectionView';
import { DetailView } from './views/DetailView';
import { CheckoutView } from './views/CheckoutView';
import { ProfileView } from './views/ProfileView';
import { SearchView } from './views/SearchView';
import { AdminView } from './views/AdminView';
import { StaticPageView } from './views/StaticPageView';
import { ContactView } from './views/ContactView';
import { SignUpView } from './views/SignUpView';
import { SignInView } from './views/SignInView';
import { CartView } from './views/CartView';
import { OrderConfirmationView } from './views/OrderConfirmationView';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ErrorProvider } from './context/ErrorContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorToastContainer } from './components/ErrorToast';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <CartProvider>
            <ErrorProvider>
              <ScrollToTop />
              <div className="min-h-screen bg-[#1A0809] text-slate-300 flex flex-col">
                <Header onOpenSearch={() => setShowSearch(true)} />
                
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomeView />} />
                    
                    {/* Authenticated Routes */}
                    <Route path="/auth/signup" element={<SignUpView />} />
                    <Route path="/auth/signin" element={<SignInView />} />
                    <Route path="/auth/forgot" element={<StaticPageView />} />

                    {/* Shop & Collections */}
                  <Route path="/shop" element={<CollectionView />} />
                  <Route path="/shop/:category" element={<CollectionView />} />
                  <Route path="/collections" element={<CollectionView />} />
                  <Route path="/collections/:category" element={<CollectionView />} />
                  
                  <Route path="/product/:productId" element={<DetailView />} />
                  <Route path="/checkout" element={<CheckoutView />} />
                  <Route path="/cart" element={<CartView />} />
                  <Route path="/order-confirmation" element={<OrderConfirmationView />} />
                  <Route path="/profile" element={<ProfileView />} />
                  
                  {/* Atelier */}
            <Route path="/atelier/origin" element={<StaticPageView />} />
            <Route path="/atelier/sourcing" element={<StaticPageView />} />
            <Route path="/atelier/sustainability" element={<StaticPageView />} />
            <Route path="/atelier/routines" element={<StaticPageView />} />

            {/* Concierge */}
            <Route path="/concierge/shipping" element={<StaticPageView />} />
            <Route path="/concierge/contact" element={<StaticPageView />} />
            <Route path="/concierge/faq" element={<StaticPageView />} />
            <Route path="/concierge/track" element={<StaticPageView />} />
            <Route path="/contact" element={<ContactView />} />

            {/* Legal */}
            <Route path="/legal/terms" element={<StaticPageView />} />
            <Route path="/legal/privacy" element={<StaticPageView />} />
            <Route path="/legal/refunds" element={<StaticPageView />} />
            
            {/* About */}
            <Route path="/about" element={<StaticPageView />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminView />} />
            <Route path="/admin/login" element={<AdminView />} />
          </Routes>
        </main>

        <Footer />

        <ErrorToastContainer />

        <AnimatePresence>
          {showSearch && (
            <SearchView 
              onClose={() => setShowSearch(false)} 
            />
          )}
        </AnimatePresence>
      </div>
     </ErrorProvider>
    </CartProvider>
   </AuthProvider>
  </Router>
 </ErrorBoundary>
  );
}

