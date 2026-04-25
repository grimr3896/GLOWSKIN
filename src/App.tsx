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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-black text-slate-300 flex flex-col">
        <Header onOpenSearch={() => setShowSearch(true)} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/shop" element={<CollectionView />} />
            <Route path="/shop/:category" element={<CollectionView />} />
            <Route path="/product/:productId" element={<DetailView />} />
            <Route path="/checkout" element={<CheckoutView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/admin" element={<AdminView />} />
          </Routes>
        </main>

        <Footer />

        <AnimatePresence>
          {showSearch && (
            <SearchView 
              onClose={() => setShowSearch(false)} 
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
