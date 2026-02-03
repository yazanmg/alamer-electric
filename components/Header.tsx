import React, { useState, useEffect } from 'react';
import { RoutePath, NavLink } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  // Helper to generate correct path based on current language
  const getLocalizedPath = (basePath: string) => {
    if (language === 'ar') {
      return basePath === '/' ? '/ar' : `/ar${basePath}`;
    }
    return basePath;
  };

  const handleNavClick = (basePath: string) => {
    onNavigate(getLocalizedPath(basePath));
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    let newPath = currentPath;
    if (language === 'en') {
      // Switch to Arabic
      if (currentPath === '/') {
        newPath = '/ar';
      } else {
        newPath = `/ar${currentPath}`;
      }
    } else {
      // Switch to English
      if (currentPath === '/ar') {
        newPath = '/';
      } else if (currentPath.startsWith('/ar/')) {
        newPath = currentPath.substring(3);
      }
    }
    onNavigate(newPath);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu if screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Check if link is active (ignoring language prefix for logic)
  const isActive = (basePath: string) => {
    const localized = getLocalizedPath(basePath);
    // Exact match for home
    if (basePath === RoutePath.Home) {
      return currentPath === localized;
    }
    // Prefix match for others
    return currentPath.startsWith(localized);
  };

  const navLinks: NavLink[] = [
    { label: t.home, path: RoutePath.Home },
    { label: t.about, path: RoutePath.About },
    { label: t.services, path: RoutePath.Services },
    { label: t.products, path: RoutePath.Products },
    { label: t.projects, path: RoutePath.Projects },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Background Layer with Blur */}
      <div className="absolute inset-0 bg-white/95 dark:bg-[#101722]/95 border-b border-[#e7ecf3] dark:border-gray-800 backdrop-blur-sm -z-10 shadow-sm"></div>

      <div className="layout-container h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 text-[#0d131c] dark:text-white cursor-pointer select-none"
          onClick={() => handleNavClick(RoutePath.Home)}
        >
          <div className="size-8 text-primary flex items-center justify-center">
             {language === 'ar' ? (
                <span className="material-symbols-outlined text-3xl">electric_bolt</span>
             ) : (
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                </svg>
             )}
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">{t.brandName}</h2>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? 'text-primary font-bold' : 'text-[#0d131c] dark:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleNavClick(RoutePath.Contact)}
            className="hidden sm:flex h-10 px-4 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm"
          >
            <span>{t.contact}</span>
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="flex h-10 px-3 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-white border border-transparent dark:border-slate-700"
            aria-label="Toggle Language"
          >
            <span className="material-symbols-outlined text-lg me-1">language</span>
            <span>{t.language}</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white dark:bg-[#101722] z-40 overflow-y-auto transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-t border-slate-100 dark:border-slate-800 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex flex-col min-h-full">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`flex items-center w-full text-start py-6 px-6 border-b border-slate-100 dark:border-slate-800 transition-all active:bg-slate-50 dark:active:bg-slate-800 ${
                isActive(link.path) 
                  ? 'bg-slate-50/80 dark:bg-slate-800/50 text-primary font-bold' 
                  : 'text-[#0d131c] dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className="text-xl">{link.label}</span>
              {isActive(link.path) && (
                <span className="material-symbols-outlined ms-auto text-primary text-2xl">check_circle</span>
              )}
            </button>
          ))}
          
          {/* Contact Link in Menu */}
          <button
            onClick={() => handleNavClick(RoutePath.Contact)}
            className={`flex items-center w-full text-start py-6 px-6 border-b border-slate-100 dark:border-slate-800 transition-all active:bg-slate-50 dark:active:bg-slate-800 ${
              isActive(RoutePath.Contact) 
                ? 'bg-slate-50/80 dark:bg-slate-800/50 text-primary font-bold' 
                : 'text-[#0d131c] dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
             <span className="text-xl">{t.contact}</span>
             {isActive(RoutePath.Contact) && (
                <span className="material-symbols-outlined ms-auto text-primary text-2xl">check_circle</span>
              )}
          </button>

          {/* Large CTA at bottom */}
          <div className="p-6 mt-auto mb-8">
             <button 
              onClick={() => handleNavClick(RoutePath.Contact)}
              className="w-full h-14 flex items-center justify-center rounded-xl bg-primary text-white text-lg font-bold shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
            >
              {t.getQuote}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};