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

  // Check if link is active (ignoring language prefix for logic)
  const isActive = (basePath: string) => {
    const localized = getLocalizedPath(basePath);
    if (localized === '/' || localized === '/ar') {
      return currentPath === localized;
    }
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
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#101722]/95 border-b border-[#e7ecf3] dark:border-gray-800 backdrop-blur-sm transition-all duration-300">
      <div className="layout-container h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div 
          className="flex items-center gap-3 text-[#0d131c] dark:text-white cursor-pointer z-50"
          onClick={() => handleNavClick(RoutePath.Home)}
        >
          <div className="size-8 text-primary flex items-center justify-center">
             {language === 'ar' ? (
                <span className="material-symbols-outlined text-3xl">electric_bolt</span>
             ) : (
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
        <div className="flex items-center gap-3 z-50">
          <button 
            onClick={() => handleNavClick(RoutePath.Contact)}
            className="hidden sm:flex h-10 px-4 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
          >
            <span>{t.contact}</span>
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="flex h-10 px-4 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-white"
          >
            <span className="material-symbols-outlined text-lg me-2">language</span>
            <span>{t.language}</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white transition-colors"
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
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white/95 dark:bg-[#101722]/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 gap-2 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`flex items-center w-full text-start p-4 rounded-xl transition-colors ${
                isActive(link.path) 
                  ? 'bg-primary/10 text-primary font-bold' 
                  : 'text-[#0d131c] dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className="text-lg">{link.label}</span>
              {isActive(link.path) && (
                <span className="material-symbols-outlined ms-auto text-primary">check</span>
              )}
            </button>
          ))}
          <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
          <button 
            onClick={() => handleNavClick(RoutePath.Contact)}
            className="w-full h-14 flex items-center justify-center rounded-xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/20"
          >
            {t.contact}
          </button>
        </div>
      </div>
    </header>
  );
};