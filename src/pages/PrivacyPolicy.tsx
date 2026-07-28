import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800 dark:text-slate-200 transition-colors">
      <h1 className="text-3xl font-black mb-6 text-slate-950 dark:text-white">Privacy Policy</h1>
      <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
        <p>Last Updated: July 28, 2026</p>
        <p>
          At Harsh Medical Store, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Harsh Medical Store and how we use it.
        </p>
        <h2 className="text-lg font-bold text-slate-950 dark:text-white mt-6">1. Information We Collect</h2>
        <p>
          If you use our WhatsApp Medicine Order Form or general contact forms, we collect the personal data you provide such as name, phone number, physical address, and required medicine details to process your request.
        </p>
        <h2 className="text-lg font-bold text-slate-950 dark:text-white mt-6">2. Prescription Security</h2>
        <p>
          All doctor prescriptions transmitted to our pharmacists are held in strict medical confidentiality and are never shared with any unauthorized third parties.
        </p>
        <h2 className="text-lg font-bold text-slate-950 dark:text-white mt-6">3. Tracking & Cookies</h2>
        <p>
          We use tracking scripts (such as WebMaker IT tracking tokens) purely to gauge visitor analytics, local search queries, and device sizes to optimize our layout speeds. No critical personal information is tracked or cached.
        </p>
      </div>
    </div>
  );
}
