import React from 'react';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800 dark:text-slate-200 transition-colors">
      <h1 className="text-3xl font-black mb-6 text-slate-950 dark:text-white">Medical Disclaimer</h1>
      <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
        <p>Last Updated: July 28, 2026</p>
        <p>
          All content, articles, and inventory logs provided on Harsh Medical Store’s website represent public educational and promotional references only. None of the text should be taken as a substitute for professional medical diagnosis, surgery, or clinical advice.
        </p>
        <h2 className="text-lg font-bold text-slate-950 dark:text-white mt-6">1. Consult a Professional Doctor</h2>
        <p>
          Never disregard professional medical advice or delay seeking it because of something you have read on this website. Always consult with your family physician, clinical doctor, or licensed caregiver regarding any disease symptoms, medication interactions, or vital indicators.
        </p>
        <h2 className="text-lg font-bold text-slate-950 dark:text-white mt-6">2. Stock Checker accuracy</h2>
        <p>
          The Live Medicine Stock Checker is for convenience only and does not represent a legally binding promise of availability. Actual on-shelf inventory levels depend on physical traffic.
        </p>
      </div>
    </div>
  );
}
