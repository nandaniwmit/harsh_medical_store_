import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, ClipboardPlus, MessageSquare } from 'lucide-react';

interface FloatingControlsProps {
  onOpenOrderForm: () => void;
}

export default function FloatingControls({ onOpenOrderForm }: FloatingControlsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. FLOATING CONTROL BAR (DESKTOP / TABLET / MOBILE SIDES) */}
      <div className="fixed bottom-6 right-6 z-45 flex flex-col items-center space-y-3 print:hidden">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-slate-900/80 hover:bg-teal-600 text-white flex items-center justify-center shadow-lg border border-slate-850 hover:border-teal-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href="tel:07903501563"
          className="w-12 h-12 rounded-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center shadow-lg border border-teal-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
          title="Call Harsh Medical Store"
          aria-label="Directly call store"
        >
          <Phone className="w-5 h-5 animate-pulse" />
        </a>

        {/* Floating WhatsApp Quick Form Launcher */}
        <button
          onClick={onOpenOrderForm}
          className="w-14 h-14 rounded-full bg-[#0A8F6A] hover:bg-[#087355] text-white flex items-center justify-center shadow-2xl hover:shadow-teal-700/30 transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white dark:border-slate-900 cursor-pointer"
          title="Place Medicine Order on WhatsApp"
          aria-label="Open WhatsApp Medicine Order Form"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

      </div>

      {/* 2. STICKY BOTTOM CTA FOR MOBILE (Visible below 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200/60 dark:border-slate-800/60 backdrop-blur px-4 py-2.5 flex items-center gap-3 shadow-lg print:hidden">
        
        <a
          href="tel:07903501563"
          className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition-all"
        >
          <Phone className="w-4 h-4 text-teal-600" />
          <span>Call Store</span>
        </a>

        <button
          onClick={onOpenOrderForm}
          className="flex-1.5 inline-flex items-center justify-center space-x-1.5 py-3.5 bg-[#0A8F6A] hover:bg-[#087355] text-white font-black text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <ClipboardPlus className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>

      </div>
    </>
  );
}
