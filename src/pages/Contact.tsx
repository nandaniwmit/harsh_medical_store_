import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ExternalLink, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Medicine Availability Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submit
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      alert('Thank you! Your general inquiry has been received. Our pharmacist will contact you shortly.');
    }, 800);
  };

  const timings = [
    { day: 'Monday', hours: '08:00 AM – 10:00 PM', status: 'Open' },
    { day: 'Tuesday', hours: '08:00 AM – 10:00 PM', status: 'Open' },
    { day: 'Wednesday', hours: '08:00 AM – 10:00 PM', status: 'Open' },
    { day: 'Thursday', hours: '08:00 AM – 10:00 PM', status: 'Open' },
    { day: 'Friday', hours: '08:00 AM – 10:00 PM', status: 'Open' },
    { day: 'Saturday', hours: '08:00 AM – 10:00 PM', status: 'Open' },
    { day: 'Sunday', hours: '08:00 AM – 10:00 PM', status: 'Open' }
  ];

  return (
    <div id="contact-page" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-teal-100/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Contact Harsh Medical Store
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Reach out to our pharmacological experts near Chadauti Block, Gaya for prompt medicine inquiries, orders, and diagnostic hardware assistance.
          </p>
        </div>

        {/* Section 2: Cards grid with Map & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Block: Business details & Timings (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info Cards */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-bold text-lg text-slate-950 dark:text-white">Store Information</h3>
              
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Physical Address</h4>
                    <p className="text-xs text-slate-500 mt-1">Narayan Garh, near Chadauti Block, Chadauti Block, Gaya, Bihar 823001</p>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Call Store Phone</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href="tel:07903501563" className="hover:underline text-teal-600 font-bold dark:text-teal-400">+91 79035 01563</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5">
                  <MessageSquare className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">WhatsApp Medicine Desk</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href="https://wa.me/917903501563" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-600 font-bold dark:text-teal-400">07903501563 (Click to Chat)</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Email Address</h4>
                    <p className="text-xs text-slate-500 mt-1">info@harshmedicalstore.com</p>
                  </div>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  href="tel:07903501563"
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-xl text-xs font-bold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store</span>
                </a>
                <a
                  href="https://wa.me/917903501563"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Timing schedules card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-bold text-lg text-slate-950 dark:text-white flex items-center space-x-2">
                <Clock className="w-5 h-5 text-teal-600" />
                <span>Store Working Hours</span>
              </h3>
              <div className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
                {timings.map((t, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <span className="font-bold text-slate-700 dark:text-slate-300">{t.day}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-slate-500 dark:text-slate-400">{t.hours}</span>
                      <span className="bg-emerald-50 text-emerald-600 font-black px-2 py-0.5 rounded-full text-[10px] uppercase">
                        {t.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Interactive Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="font-bold text-xl text-slate-950 dark:text-white">Submit General Inquiry</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Need feedback on rare medicines, wholesale medical consumables, or diagnostic equipment? Fill out the form, and we will get back to you within a few business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Kumar"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Contact Phone <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 7903501563"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="optional@example.com"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Subject of Inquiry
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:border-teal-500 focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Medicine Availability Inquiry">Medicine Availability Inquiry</option>
                  <option value="Surgical / Clinical Equipment Quotation">Surgical / Clinical Equipment Quotation</option>
                  <option value="Baby Care Products Restock Details">Baby Care Products Restock Details</option>
                  <option value="General Health Advice / Feedback">General Health Advice / Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Write Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify details, brand, or requirements here..."
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 py-2.5 rounded-lg font-bold text-sm shadow-md transition-colors cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? 'Submitting...' : 'Submit General Inquiry'}</span>
              </button>

              <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg text-xs text-amber-700 dark:text-amber-400 flex items-start space-x-2 border border-amber-100/40 dark:border-amber-900/20">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Note: General inquiry forms are monitored periodically. To place orders or ask about immediate availability, always use the <strong>WhatsApp Order Form</strong> in the header for fastest service.</span>
              </div>
            </form>

          </div>

        </div>

        {/* Section 3: Interactive Google Maps integration with route launching */}
        <section className="space-y-6 max-w-6xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">Interactive Store Map</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Find Harsh Medical Store situated strategically near Chadauti Block in Narayan Garh, Gaya.</p>
          </div>

          <div className="h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-850 relative">
            <iframe
              title="Harsh Medical Store Gaya Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1764724982054!2d84.97893977595568!3d25.028045738522645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2bc8b603d33eb%3A0xe54b9d5c48b1d9bf!2sNarayan%20Garh%2C%20near%20Chadauti%20Block!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Quick Map launching shortcut card */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-slate-950/90 text-white p-4 rounded-2xl max-w-xs border border-slate-800 shadow-2xl backdrop-blur-sm space-y-2.5">
              <div className="space-y-1">
                <h4 className="font-bold text-xs">Harsh Medical Store</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed">Narayan Garh, near Chadauti Block, Gaya, Bihar 823001</p>
              </div>
              <a
                href="https://maps.google.com/?q=Harsh+Medical+Store+Narayan+Garh+Chadauti+Gaya+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center space-x-1.5 bg-rose-600 hover:bg-rose-700 text-white py-1.5 rounded-lg text-xs font-bold transition-all text-center"
              >
                <span>Navigate on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
