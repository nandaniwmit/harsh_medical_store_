import React, { lazy, Suspense, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import { Heart } from 'lucide-react';

// Lazy load pages for fast load optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));

// Loading Fallback Spinner
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-3 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-teal-200 dark:border-teal-900 rounded-full animate-pulse" />
        <div className="absolute inset-0 border-4 border-t-teal-600 dark:border-t-teal-400 rounded-full animate-spin" />
        <Heart className="w-5 h-5 text-teal-600 dark:text-teal-400 fill-teal-600/10 animate-bounce" />
      </div>
      <p className="text-xs font-bold text-slate-500 tracking-wider uppercase animate-pulse">Loading Harsh Pharmacy...</p>
    </div>
  );
}

// ScrollToTop component to reset viewport scroll positions on path changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [pathname]);
  return null;
}

export default function App() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  // Handle clicking a drug in stock checker
  const handleSelectMedicineForOrder = (medicineName: string) => {
    setPrefilledMedicine(medicineName);
    setIsOrderFormOpen(true);
  };

  // Open empty order form from Header or buttons
  const handleOpenGeneralOrderForm = () => {
    setPrefilledMedicine('');
    setIsOrderFormOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 pb-16 md:pb-0">
          
          {/* Sticky Navigation Bar */}
          <Header onOpenOrderForm={handleOpenGeneralOrderForm} />

          {/* Main Routing Stage wrapped in high-fidelity loading fallbacks */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <Home 
                      onOpenOrderForm={handleOpenGeneralOrderForm} 
                      onSelectMedicineForOrder={handleSelectMedicineForOrder} 
                    />
                  } 
                />
                <Route path="/about" element={<About />} />
                <Route 
                  path="/services" 
                  element={
                    <Services 
                      onOpenOrderForm={handleOpenGeneralOrderForm} 
                      onSelectMedicineForOrder={handleSelectMedicineForOrder} 
                    />
                  } 
                />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Legal & Policy fallbacks */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                
                {/* Fallback redirect or homepage render */}
                <Route 
                  path="*" 
                  element={
                    <Home 
                      onOpenOrderForm={handleOpenGeneralOrderForm} 
                      onSelectMedicineForOrder={handleSelectMedicineForOrder} 
                    />
                  } 
                />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer containing SEO schemas, and interactive tracking hooks */}
          <Footer />

          {/* Mobile bottom persistent utility bars, back-to-top hooks, etc. */}
          <FloatingControls onOpenOrderForm={handleOpenGeneralOrderForm} />

          {/* Interactive Modal Booking form */}
          <WhatsAppOrderForm 
            isOpen={isOrderFormOpen} 
            onClose={() => setIsOrderFormOpen(false)} 
            prefilledMedicine={prefilledMedicine}
          />

        </div>
      </Router>
    </ThemeProvider>
  );
}
