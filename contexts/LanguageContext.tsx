import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  language: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, language }) => {
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Update font family based on language
    if (language === 'ar') {
      document.body.style.fontFamily = "'Tajawal', sans-serif";
      document.body.classList.add('rtl');
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
      document.body.classList.remove('rtl');
    }
  }, [language]);

  // Translation function looking up keys in the translations object
  const t = (key: string) => {
    // @ts-ignore - Simple dynamic lookup
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, isRTL: language === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};