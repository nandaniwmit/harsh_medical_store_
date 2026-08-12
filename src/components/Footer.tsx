import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  // Global Tracking Hook provided by user
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(err => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    // Listen to React Router internal changes by checking state or just let popstate handle,
    // we also trigger page tracking on popstate and layout unmounts
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Business Profile */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                <Heart className="w-5 h-5 text-teal-400 fill-teal-400/20" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Harsh Medical Store</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your most trusted neighbourhood medical store in Gaya. Providing 100% genuine medicines, surgical equipment, baby essentials, and supplements with care and integrity.
            </p>
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Certified Licenced Pharmacy</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 font-medium">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 font-medium">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 font-medium">›</span> Services & Stock
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 font-medium">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 flex items-center">
                  <span className="mr-1.5 font-medium">›</span> Contact Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Working Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Store Info</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Narayan Garh, Near Chadauti Block, Gaya, Bihar 823001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a href="tel:07903501563" className="text-slate-400 hover:text-teal-400 transition-colors duration-200">
                  +91 79035 01563
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-slate-400">info@harshmedicalstore.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-teal-400 font-medium">Open Everyday</p>
                  <p className="text-slate-400 text-xs">08:00 AM – 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation Map */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Our Location</h3>
            <div className="h-32 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
              <iframe
                title="Harsh Medical Store Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1764724982054!2d84.97893977595568!3d25.028045738522645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2bc8b603d33eb%3A0xe54b9d5c48b1d9bf!2sNarayan%20Garh%2C%20near%20Chadauti%20Block!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Harsh+Medical+Store+Narayan+Garh+Chadauti+Gaya+Bihar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-teal-400 hover:underline"
            >
              Get GPS Directions <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

        </div>

        {/* Middle row: legal agreements, local focus */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-slate-300 transition-colors duration-200">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-slate-300 transition-colors duration-200">Medical Disclaimer</Link>
          </div>
          <p className="text-center sm:text-right">
            📍 Serving Gaya, Narayan Garh, Chadauti Block & surrounding areas in Bihar.
          </p>
        </div>

        {/* Bottom row: WMIT Credits and copyrights */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Harsh Medical Store. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span></span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
