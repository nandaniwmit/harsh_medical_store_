import React, { useState, useEffect } from 'react';
import { X, Send, Phone, ClipboardCheck, Clock, FileText } from 'lucide-react';

interface WhatsAppOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export default function WhatsAppOrderForm({ isOpen, onClose, prefilledMedicine = '' }: WhatsAppOrderFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicines, setMedicines] = useState('');
  const [hasPrescription, setHasPrescription] = useState('No');
  const [message, setMessage] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('Anytime (08:00 AM - 10:00 PM)');

  useEffect(() => {
    if (isOpen) {
      if (prefilledMedicine) {
        setMedicines(`1. ${prefilledMedicine} - 1 strip`);
      } else {
        setMedicines('');
      }
    }
  }, [isOpen, prefilledMedicine]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the elegant formatted text for WhatsApp
    const businessName = "Harsh Medical Store";
    const formattedText = `Hello ${businessName},

I want to place a Medicine Order:

*Customer Name:* ${name}
*Phone:* ${phone}
*Email:* ${email || 'N/A'}
*Medicine Required:* ${medicines}
*Address:* ${address}
*Prescription Ready:* ${hasPrescription}
*Preferred Time:* ${deliveryTime}
*Notes/Message:* ${message || 'None'}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/917903501563?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'referrerPolicy=no-referrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300">
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Form Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <ClipboardCheck className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Quick Medicine Order</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Order is instantly sent to our WhatsApp at +91 79035 01563</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Customer Name */}
            <div>
              <label htmlFor="order-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="order-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Grid for Phone and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="order-phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <input
                  id="order-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 7903501563"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="order-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  id="order-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="optional@example.com"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Medicines Required */}
            <div>
              <label htmlFor="order-medicines" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Required Medicines & Quantities <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="order-medicines"
                required
                rows={3}
                value={medicines}
                onChange={(e) => setMedicines(e.target.value)}
                placeholder="e.g.,&#10;1. Dolo 650 - 2 strips&#10;2. Volini Gel - 1 tube"
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Delivery Address */}
            <div>
              <label htmlFor="order-address" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Delivery / Delivery Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="order-address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Your address in Gaya / Chadauti"
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Prescription Status and Time Slots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Do you have a Prescription?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="radio"
                      name="prescription"
                      value="Yes"
                      checked={hasPrescription === 'Yes'}
                      onChange={() => setHasPrescription('Yes')}
                      className="text-teal-600 focus:ring-teal-500"
                    />
                    <span>Yes (I have a copy)</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="radio"
                      name="prescription"
                      value="No"
                      checked={hasPrescription === 'No'}
                      onChange={() => setHasPrescription('No')}
                      className="text-teal-600 focus:ring-teal-500"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="order-time" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Preferred Delivery Time</span>
                </label>
                <select
                  id="order-time"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-1.5 text-sm text-slate-900 dark:text-white focus:border-teal-500 focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Anytime (08:00 AM - 10:00 PM)">Anytime (08:00 AM - 10:00 PM)</option>
                  <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                  <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                  <option value="Late Evening (08:00 PM - 10:00 PM)">Late Evening (08:00 PM - 10:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Message / Remarks */}
            <div>
              <label htmlFor="order-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Special Instructions (Optional)
              </label>
              <textarea
                id="order-message"
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any special storage instructions or details"
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Note on Prescription upload */}
            {hasPrescription === 'Yes' && (
              <div className="p-3 bg-teal-50 dark:bg-teal-950/20 rounded-lg text-xs text-teal-700 dark:text-teal-400 flex items-start space-x-2 border border-teal-100 dark:border-teal-900/40">
                <FileText className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Excellent! When you click below to send via WhatsApp, we will format your text. You can easily click the <strong>attach icon</strong> inside WhatsApp to send a photo of your prescription directly.</span>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row sm:space-x-3 pt-3 gap-2">
              <button
                type="submit"
                className="w-full sm:w-2/3 inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg font-bold text-sm shadow-md shadow-emerald-800/10 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <a
                href="tel:07903501563"
                className="w-full sm:w-1/3 inline-flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 py-2.5 rounded-lg font-bold text-sm border border-slate-200 dark:border-slate-700 active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
