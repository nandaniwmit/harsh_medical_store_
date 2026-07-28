import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Heart, Star, MessageSquare, ClipboardPlus, MapPin, Clock, CheckCircle, ChevronRight, Sparkles, Mail, Pill, Activity, ShieldAlert } from 'lucide-react';
import { SERVICES, PRODUCTS, REVIEWS, FAQS, HEALTH_TIPS } from '../data/staticData';

interface HomeProps {
  onOpenOrderForm: () => void;
  onSelectMedicineForOrder?: (medName: string) => void;
}

export default function Home({ onOpenOrderForm }: HomeProps) {
  // Take maximum 6 services for preview
  const featuredServices = SERVICES.slice(0, 6);
  // Take maximum 3 products for preview
  const featuredProducts = PRODUCTS.slice(0, 3);
  // FAQs preview (first 3)
  const faqPreview = FAQS.slice(0, 3);

  return (
    <div id="home-page" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 pt-12 pb-24 sm:py-32 border-b border-slate-100 dark:border-slate-900">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-900 opacity-50 pointer-events-none" />
        
        {/* Quarter-circle professional badge overlay on top right */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-600 opacity-[0.03] dark:opacity-[0.02] rounded-bl-full pointer-events-none" />
        
        {/* Soft atmospheric colors */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 dark:bg-teal-500/5 blur-3xl rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Text */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-1.5 bg-teal-100/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 fill-teal-400/20" />
                <span>Trusted Healthcare Partner in Gaya, Bihar</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                Providing Trusted <span className="text-teal-600 dark:text-teal-400">Healthcare</span> Solutions in Gaya
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Providing genuine medicines, surgical supplies, baby care, and daily medical essentials at affordable prices. Your health is our priority since 2012.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                {/* Button 1: Call Now */}
                <a
                  href="tel:07903501563"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-slate-950/10 dark:shadow-white/5 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                {/* Button 2: WhatsApp Order */}
                <button
                  onClick={onOpenOrderForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0A8F6A] hover:bg-[#087355] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-teal-800/10 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <ClipboardPlus className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                {/* Button 3: Get Directions */}
                <a
                  href="https://maps.google.com/?q=Harsh+Medical+Store+Narayan+Garh+Chadauti+Gaya+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-800 shadow-sm transition-all active:scale-[0.98]"
                >
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left border-t border-slate-200/60 dark:border-slate-800/60">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">100%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Genuine Drugs</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">14+ Hrs</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Daily Service</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">Local</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Trusted Gaya Care</div>
                </div>
              </div>
            </div>

            {/* Right Col: Graphic card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur p-4">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                  alt="Pharmacist dispensing medicines at Harsh Medical Store Gaya Bihar"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl w-full object-cover aspect-[4/3] shadow-md transition-transform duration-500 hover:scale-[1.02]"
                />
                
                {/* Floating info banner */}
                <div className="mt-4 p-4 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/50 flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Store Operating Hours</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Open 08:00 AM – 10:00 PM every day including Sundays.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: SHORT ABOUT PREVIEW */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                Caring for Gaya’s Health with Dedication & Integrity
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Harsh Medical Store, located strategically near Chadauti Block in Narayan Garh, Gaya, has been serving as the cornerstone of regional wellness. We dispense 100% certified pharmaceutical formulations, medical consumables, surgical aids, infant wellness kits, and clinical gadgets.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                By maintaining a direct chain of custody with reputed multinational and Indian pharmacological manufacturers, we eliminate counterfeit risks, ensuring you get exactly what your doctor prescribed.
              </p>
              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 hover:underline transition-colors group"
                >
                  <span>Discover our full story</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white text-base">Verified Authenticity</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  We verify batched expiry, serial barcodes, and cold-storage seals directly with manufacturer registries.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white text-base">Quick WhatsApp Order</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Order through WhatsApp and your medicines are packed, checked, and kept ready for speedy collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED SERVICES PREVIEW */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">Our Healthcare Categories</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Explore our core pharmacy classifications. We stock verified drugs and healthcare tools spanning all primary medical disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div 
                key={service.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-teal-600 dark:text-teal-400 border border-teal-100/50 dark:border-teal-900/30">
                    {/* Render corresponding Lucide icon */}
                    {service.id === 'srv-1' && <Pill className="w-5 h-5" />}
                    {service.id === 'srv-2' && <Pill className="w-5 h-5 text-emerald-500" />}
                    {service.id === 'srv-3' && <Activity className="w-5 h-5" />}
                    {service.id === 'srv-4' && <Activity className="w-5 h-5 text-indigo-500" />}
                    {service.id === 'srv-5' && <Heart className="w-5 h-5 text-rose-500" />}
                    {service.id === 'srv-6' && <ShieldAlert className="w-5 h-5 text-teal-500" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{service.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{service.description}</p>
                </div>

                <div className="pt-5 border-t border-slate-100/60 dark:border-slate-850/60 mt-5">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline group"
                  >
                    <span>View medicines & check availability</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center space-x-2 bg-white dark:bg-slate-900 hover:bg-slate-50 border border-slate-200 dark:border-slate-800 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all text-slate-800 dark:text-slate-200"
            >
              <span>Explore All {SERVICES.length} Pharmacy Services</span>
              <ArrowRight className="w-4 h-4 text-teal-500" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative space-y-4">
              <span className="text-xs font-black text-teal-600 dark:text-teal-400 tracking-wider uppercase">Our Core Unifying Principle</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">Why Harsh Medical Store?</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                As a fully registered and licensed pharmaceutical store, we believe in patient-centered ethics. Medicine is not just retail; it is a critical pillar of community survival.
              </p>
              
              <div className="h-64 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 p-2">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbbc88?auto=format&fit=crop&w=600&q=80"
                  alt="Stock room of Harsh Medical Store Gaya Bihar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white text-base">Direct Sourcing Only</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  We acquire medicines exclusively from corporate carrying & forwarding agents. Zero retail-to-retail intermediate handling.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white text-base">Ethical Fair Pricing</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  No artificial markups or gouging. We stick to standardized Maximum Retail Prices (MRP) with honest consumer discounts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white text-base">Cold Chain Storage</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  High-end pharmaceutical refrigerators protect temperature-sensitive products like insulin and life-saving vials.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white text-base">Expert Consultation</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Our pharmacists verify every formulation and take time to guide patients on dosage guidelines and allergy hazards.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PRODUCTS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">Featured Wellness Products</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Browse our selection of popular premium healthcare monitoring systems, infant skincare items, and daily nutritional supplements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm overflow-hidden flex flex-col hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="h-56 relative bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute bottom-4 right-4 bg-slate-900/85 text-white text-xs font-mono px-2.5 py-1 rounded-lg">
                    {product.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center space-x-1 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                      ))}
                      <span className="text-[11px] text-slate-400 font-bold ml-1">{product.rating}</span>
                    </div>
                    <h3 className="font-bold text-slate-950 dark:text-white text-base line-clamp-1">{product.title}</h3>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-850">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Standard MRP</span>
                      <span className="text-lg font-black text-slate-950 dark:text-white">₹{product.mrp.toFixed(2)}</span>
                    </div>

                    <button 
                      onClick={() => onOpenOrderForm()}
                      className="inline-flex items-center space-x-1 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-3.5 py-2 rounded-xl text-xs font-extrabold shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
                    >
                      <ClipboardPlus className="w-4 h-4" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline group"
            >
              <span>View full healthcare product line catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 6: CUSTOMER REVIEWS PREVIEW */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">What Our Customers Say</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              We take pride in our service. Read real testimonials from patient families residing in Gaya and around Chadauti Block.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div 
                key={review.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    {review.isGoogleReview && (
                      <span className="text-[10px] font-black tracking-wide text-teal-600 dark:text-teal-400 uppercase bg-teal-100/60 dark:bg-teal-950/40 px-2 py-0.5 rounded-full">
                        Google Review
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-950 dark:text-white">{review.name}</span>
                  <span className="text-slate-400 font-mono">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-teal-50/60 dark:bg-teal-950/20 rounded-2xl border border-teal-100/40 dark:border-teal-900/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-3xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-teal-500" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-950 dark:text-white">Did we help you or your family?</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Share your experience on Google Maps to help others find genuine care.</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Harsh+Medical+Store+Narayan+Garh+Chadauti+Gaya+Bihar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 shadow"
            >
              Write a Review
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 7: FAQ PREVIEW */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Find instant answers to common questions about prescription ordering, store policies, and diagnostic services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqPreview.map((faq, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-2.5"
              >
                <h3 className="text-sm font-extrabold text-slate-950 dark:text-white flex items-start">
                  <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline group"
            >
              <span>Have more questions? Read full FAQ or Ask us directly</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Need Urgent Medicine Delivery in Gaya?</h2>
          <p className="text-teal-50 max-w-2xl mx-auto text-sm leading-relaxed">
            Don’t stress. Fill out our simplified WhatsApp Medicine Order Form, specify your address near Chadauti Block or Narayan Garh, and let us check the stock and verify pricing instantly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenOrderForm}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-xl text-sm font-bold shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <ClipboardPlus className="w-4.5 h-4.5 text-teal-600" />
              <span>Fill WhatsApp Order Form</span>
            </button>
            <a
              href="tel:07903501563"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-teal-850 hover:bg-teal-900 text-white px-6 py-3 rounded-xl text-sm font-bold border border-teal-500/30 transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call +91 79035 01563</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: LATEST HEALTH TIPS PREVIEW */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">Recent Health & Wellness Articles</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Read professional health advice, dosage guidelines, and preventative care methods curated by our core pharmacologists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HEALTH_TIPS.map((tip) => (
              <div 
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all"
              >
                <div className="h-48 bg-slate-200 overflow-hidden relative">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {tip.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-[11px] text-slate-400 font-mono">
                      <span>{tip.date}</span>
                      <span>•</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-950 dark:text-white text-base line-clamp-1">{tip.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {tip.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-850">
                    <Link
                      to="/about"
                      className="inline-flex items-center text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline group"
                    >
                      <span>Read entire article</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: NEWSLETTER */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center mx-auto border border-teal-500/20">
            <Mail className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">Subscribe to Immunization & Health Alerts</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              Get timely notifications about local pediatric vaccination camps in Chadauti, specialized health drives, and store inventory restock notifications.
            </p>
          </div>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing! We will send health alerts to your email.');
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your personal email"
              className="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-900 dark:hover:bg-slate-100 px-6 py-2.5 rounded-xl text-sm font-bold shadow-md transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-slate-400">We respect your privacy. No spam. Unsubscribe anytime.</p>
        </div>
      </section>

    </div>
  );
}
