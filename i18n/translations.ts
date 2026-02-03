import { COMPANY_NAME_AR, COMPANY_NAME_EN } from '../constants/company';

export const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    products: 'Products',
    projects: 'Projects',
    contact: 'Contact Us',
    getQuote: 'Get Quote',
    language: 'عربي',
    brandName: COMPANY_NAME_EN
  },
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    products: 'المنتجات',
    projects: 'المشاريع',
    contact: 'اتصل بنا',
    getQuote: 'اطلب عرض سعر',
    language: 'English',
    brandName: COMPANY_NAME_AR
  }
};

export type TranslationKey = keyof typeof translations.en;