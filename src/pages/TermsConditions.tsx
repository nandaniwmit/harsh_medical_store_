import React from 'react';

export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800 dark:text-slate-200 transition-colors">
      <h1 className="text-3xl font-black mb-6 text-slate-950 dark:text-white">Terms & Conditions</h1>
      <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
        <p>Last Updated: July 28, 2026</p>
        <p>
          Welcome to Harsh Medical Store! These terms and conditions outline the rules and regulations for the use of Harsh Medical Store's Web Platform.
        </p>
        <h2 className="text-lg font-bold text-slate-950 dark:text-white mt-6">1. Prescription Requirements</h2>
        <p>
          Under national and state pharmacological laws of Bihar, India, certain medications (Class Schedule H, H1, or X) cannot be sold or dispensed without a valid registered medical practitioner’s signed prescription copy. We reserve the absolute right to cancel any order if a prescription is missing or suspected of forgery.
        </p>
        <h2 className="text-lg font-bold text-slate-950 dark:text-white mt-6">2. Medicine Pricing</h2>
        <p>
          We strictly adhere to Maximum Retail Prices (MRP) enforced by drug controller agencies. All prices displayed on our medicine stock checker represent standard market retail indicators and might vary slightly in real-time due to manufacturer batch changes.
        </p>
      </div>
    </div>
  );
}
