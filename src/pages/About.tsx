import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Award, Milestone, Clock, CheckCircle2, ThumbsUp, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: '100% Genuine Care',
      desc: 'Sourcing only from licensed company pipelines to protect patient safety.',
      icon: <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
    },
    {
      title: 'Patient-First Ethics',
      desc: 'Serving with honest standardized MRP rates, complete dosage guides, and empathy.',
      icon: <Heart className="w-5 h-5 text-teal-600 dark:text-teal-400" />
    },
    {
      title: 'Rigorous Expiry Controls',
      desc: 'Systematically filtering stock so no close-to-expiry medication reaches a shelf.',
      icon: <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Foundation',
      desc: 'Harsh Medical Store was founded at Narayan Garh, near Chadauti Block in Gaya, Bihar. Identified the region’s critical gap in emergency prescription supply chain availability.'
    },
    {
      year: '2020',
      title: 'Monsoon Floods & Covid Response',
      desc: 'During global health shortages, established a direct WhatsApp-based reservation system. Kept prices standardized at fair retail rates, serving local families selflessly.'
    },
    {
      year: '2022',
      title: 'Cold-Chain Infrastructure Expansion',
      desc: 'Upgraded facilities to feature multi-unit industrial pharmaceutical refrigerators, protecting diabetic insulins, pediatric vaccines, and life-saving injection vials.'
    },
    {
      year: '2024',
      title: 'Digital Medicine Finder Launch',
      desc: 'Launched interactive online inventory tracker databases to prevent families from travelling long distances only to find medicine out of stock.'
    },
    {
      year: '2026',
      title: 'Current Day Leadership',
      desc: 'Continuing our expansion, serving over 15,000+ happy local families with genuine clinical products, diagnostic tools, and baby-hygiene essentials daily.'
    }
  ];

  return (
    <div id="about-page" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-teal-100/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our History & Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            About Harsh Medical Store
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            The story of how a small pharmacy in Narayan Garh, Gaya, became Chadauti Block’s most trusted partner for authentic life-saving formulations.
          </p>
        </div>

        {/* SECTION 1: BUSINESS STORY */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Our Journey: Solving Regional Healthcare Accessibility
            </h2>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                In 2018, the founders of Harsh Medical Store realized that families in Chadauti and Gaya had to travel for hours into downtown clinical centers simply to buy essential, verified medicines. Counterfeiting, supply fluctuations, and stock-outs were alarmingly common.
              </p>
              <p>
                We started with a simple but radical premise: <strong>Every patient in Narayan Garh deserves direct, instant access to authenticated, properly stored medications.</strong>
              </p>
              <p>
                By building a transparent procurement pipeline directly with major pharmacological partners and maintaining rigorous quality standards, we became a beacon of trust. Today, we are not just a drug retailer, but a dedicated health care hub providing pediatric care, health diagnostics, surgical accessories, and elderly supports.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
                <div className="text-3xl font-black text-teal-600 dark:text-teal-400">15K+</div>
                <div className="text-[10px] text-slate-500 uppercase font-extrabold mt-1">Families Served</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-center">
                <div className="text-3xl font-black text-teal-600 dark:text-teal-400">100%</div>
                <div className="text-[10px] text-slate-500 uppercase font-extrabold mt-1">Genuine Drugs</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-center col-span-2 sm:col-span-1">
                <div className="text-3xl font-black text-teal-600 dark:text-teal-400">8+ Yrs</div>
                <div className="text-[10px] text-slate-500 uppercase font-extrabold mt-1">Local Trust</div>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacist verifying vaccine cold storage temperature logs at Harsh Medical Store Gaya"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-2xl max-w-xs border border-slate-800 shadow-2xl hidden sm:block">
              <div className="text-sm font-extrabold">Registered Pharmacy</div>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Licensed under the Bihar State Pharmacy Council. Standardised drug inspector compliance verified.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: MISSION, VISION, VALUES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-100/50 dark:border-teal-900/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Our Mission</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To supply accessible, high-quality, and completely verified healthcare products and medications to the community of Gaya. We aim to ensure that no patient is ever deprived of life-saving therapeutics due to distribution inefficiencies or stock delays.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-100/50 dark:border-teal-900/30">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Our Vision</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To build an integrated local healthcare ecosystem where genuine diagnostic technology, emergency medication, neonatal supplies, and pharmaceutical consulting are unified under a single, highly ethical retail umbrella.
            </p>
          </div>
        </section>

        {/* SECTION 3: CORE VALUES */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">Our Core Values</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">The principles that guide our everyday interactions with patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-base">{v.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Timeline */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">Our Business Timeline</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">A timeline of consistent growth and community support in Gaya.</p>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-teal-500 group-hover:scale-125 transition-transform" />
                
                <div className="space-y-1">
                  <span className="text-xs font-black font-mono text-teal-600 dark:text-teal-400 tracking-wide bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded-full">
                    {item.year}
                  </span>
                  <h4 className="text-base font-extrabold text-slate-950 dark:text-white pt-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: OWNER MESSAGE */}
        <section className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-y-12 translate-x-12">
            <ThumbsUp className="w-96 h-96" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center relative">
            <div className="md:col-span-1 text-center md:text-left space-y-3">
              <div className="w-24 h-24 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto md:mx-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=200&q=80"
                  alt="Owner Harsh Kumar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Harsh Kumar</h4>
                <p className="text-[10px] text-teal-400 uppercase font-bold">Managing Proprietor</p>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">Owner’s Message</span>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "When we opened our doors in Gaya in 2018, we vowed never to prioritize profits over health. We understand that behind every prescription slips we receive, there is a worried mother, an anxious son, or a grandfather in pain. We guarantee 100% genuine formulation, meticulous storage parameters, and fair billing on every transaction. Thank you for placing your trust in Harsh Medical Store."
              </p>
              <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Standardized licencing: State Drug Inspectorate Registered (Gaya Division).</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
