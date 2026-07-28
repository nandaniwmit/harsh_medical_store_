import React, { useState } from 'react';
import { Pill, Activity, ShieldCheck, Heart, Stethoscope, Baby, ShieldAlert, Apple, HeartHandshake, Phone, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/staticData';
import MedicineStockChecker from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenOrderForm: () => void;
  onSelectMedicineForOrder?: (medName: string) => void;
}

export default function Services({ onOpenOrderForm, onSelectMedicineForOrder }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Prescription Medicines', 'OTC Medicines', 'Health Devices', 'Medical Equipment', 'Baby Care', 'Personal Care', 'Supplements', 'Home Care'];

  const filteredServices = SERVICES.filter(srv => 
    selectedCategory === 'All' || srv.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Prescription Medicines':
        return <Pill className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'OTC Medicines':
        return <Pill className="w-5 h-5 text-emerald-500" />;
      case 'Health Devices':
        return <Activity className="w-5 h-5 text-indigo-500" />;
      case 'Medical Equipment':
        return <Stethoscope className="w-5 h-5 text-sky-500" />;
      case 'Baby Care':
        return <Baby className="w-5 h-5 text-rose-500" />;
      case 'Personal Care':
        return <ShieldAlert className="w-5 h-5 text-teal-500" />;
      case 'Supplements':
        return <Apple className="w-5 h-5 text-amber-500" />;
      case 'Home Care':
        return <HeartHandshake className="w-5 h-5 text-orange-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <div id="services-page" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Page header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-teal-100/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store Departments & Inventory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Pharmacy Departments & Services
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            We provide a broad, highly organized range of prescription formulations, surgical consumables, elderly home comfort equipment, and authentic baby hygiene lines.
          </p>
        </div>

        {/* EXCLUSIVE FEATURE: Live Medicine Stock Checker */}
        <section className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">Search Medicine Availability</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Query our actual local shelf inventory live before placing your order.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <MedicineStockChecker onSelectMedicineForOrder={onSelectMedicineForOrder} />
          </div>
        </section>

        {/* Section 2: Department Categories Filter and Cards */}
        <section className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">Explore Categories</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Filter services by medical and non-medical health departments.</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-700/10'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:scale-[1.005] transition-transform duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100/50 dark:border-teal-900/30 flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white text-base sm:text-lg">{service.title}</h3>
                      <span className="text-[10px] text-teal-600 dark:text-teal-400 font-extrabold uppercase tracking-wide">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.detailedDescription || service.description}
                  </p>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-5 border-t border-slate-100/60 dark:border-slate-850/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wide flex items-center">
                    🟢 Authentic & Licenced Source
                  </span>
                  <button
                    onClick={() => onOpenOrderForm()}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 bg-[#0A8F6A] hover:bg-[#087355] text-white px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer"
                  >
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pharmacy Standards CTA segment */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 max-w-5xl mx-auto relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wide">Specialist Stock Inquiries</span>
              <h3 className="text-2xl font-extrabold">Cannot find your required medicines?</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                Some critical anti-cancer drugs, complex biological injections, or chronic illness treatments are imported on-demand to safeguard drug potency. We can secure them for you within 24–48 hours directly from authorized carrying agents.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="tel:07903501563"
                className="inline-flex items-center justify-center space-x-2 bg-white text-slate-900 hover:bg-slate-50 py-2.5 rounded-xl text-xs font-bold transition-all text-center"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Store Specialist</span>
              </a>
              <button
                onClick={onOpenOrderForm}
                className="inline-flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                <span>WhatsApp Reservation</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
