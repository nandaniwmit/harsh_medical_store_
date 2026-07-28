import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, Heart, ClipboardPlus } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenOrderForm: () => void;
}

export default function Header({ onOpenOrderForm }: HeaderProps) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services & Stock', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center shadow-sm shadow-teal-600/10 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-extrabold text-xl leading-none">H</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-slate-900 dark:text-white leading-tight">Harsh Medical Store</span>
              <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold tracking-wider uppercase">Genuine Medicines & Healthcare</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-teal-600 dark:text-teal-400 bg-teal-50/60 dark:bg-teal-950/40 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right actions (Dark mode, Call now, WhatsApp order) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle dark/light mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Quick Phone call */}
            <a
              href="tel:07903501563"
              className="flex items-center space-x-1 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-semibold transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 animate-pulse" />
              <span>07903501563</span>
            </a>

            {/* Premium WhatsApp Order Form Trigger */}
            <button
              onClick={onOpenOrderForm}
              className="inline-flex items-center space-x-1.5 bg-[#0A8F6A] hover:bg-[#087355] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-teal-700/10 hover:shadow-teal-700/20 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ClipboardPlus className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle dark/light mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Burger Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle main menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-3 transition-all duration-300">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex flex-col space-y-2.5">
            <a
              href="tel:07903501563"
              className="flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100"
            >
              <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Call Store: 07903501563</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderForm();
              }}
              className="flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-[#0A8F6A] text-white text-sm font-bold shadow-md shadow-teal-800/10 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ClipboardPlus className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
