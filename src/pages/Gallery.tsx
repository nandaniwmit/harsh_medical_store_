import React, { useState } from 'react';
import { GALLERY } from '../data/staticData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'store', label: 'Store Front & Interior' },
    { value: 'shelves', label: 'Medicine Shelves' },
    { value: 'products', label: 'OTC & Products' },
    { value: 'equipment', label: 'Diagnostic Equipment' }
  ];

  // Filter gallery items
  const filteredGallery = GALLERY.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const openLightbox = (id: string) => {
    const idx = GALLERY.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return null;
        return prev === 0 ? GALLERY.length - 1 : prev - 1;
      });
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return null;
        return prev === GALLERY.length - 1 ? 0 : prev + 1;
      });
    }
  };

  const currentLightboxItem: GalleryItem | null = lightboxIndex !== null ? GALLERY[lightboxIndex] : null;

  return (
    <div id="gallery-page" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section 1: Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-teal-100/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store Walkthrough</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Store Photo Gallery
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Take a virtual tour of Harsh Medical Store near Chadauti Block. See our clinical arrangements, verified wellness shelves, and diagnostic stock displays.
          </p>
        </div>

        {/* Section 2: Filters */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Section 3: Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredGallery.map((item) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
            >
              {/* Image Container with Zoom hover effect */}
              <div className="h-56 relative overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Expand overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-5 h-5 text-teal-600" />
                  </div>
                </div>

                <span className="absolute bottom-4 right-4 bg-slate-900/85 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-lg">
                  {item.category}
                </span>
              </div>

              {/* Photo Metadata */}
              <div className="p-5 space-y-1.5">
                <h3 className="font-bold text-slate-950 dark:text-white text-base group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* LIGHTBOX POPUP MODAL */}
        {currentLightboxItem && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 right-4 flex items-center space-x-3 z-10">
              <span className="text-xs font-mono text-slate-400">
                {lightboxIndex! + 1} / {GALLERY.length}
              </span>
              <button 
                onClick={closeLightbox}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-850 hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Stage content wrapper */}
            <div className="relative w-full max-w-4xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="absolute left-2 sm:-left-16 p-2 rounded-full bg-slate-900/80 text-white border border-slate-800 hover:bg-teal-600/80 transition-colors"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <div className="max-h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden border border-slate-850 shadow-2xl bg-slate-900">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="absolute right-2 sm:-right-16 p-2 rounded-full bg-slate-900/80 text-white border border-slate-800 hover:bg-teal-600/80 transition-colors"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Bottom Caption bar */}
            <div 
              className="mt-6 text-center max-w-xl space-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-white font-extrabold text-lg sm:text-xl">
                {currentLightboxItem.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {currentLightboxItem.description}
              </p>
              <span className="inline-block mt-2 text-[10px] font-black uppercase tracking-wider text-teal-400 bg-teal-950/40 px-2.5 py-0.5 rounded-full">
                Department: {currentLightboxItem.category}
              </span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
