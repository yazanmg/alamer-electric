import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { COMPANY_NAME_AR, COMPANY_NAME_EN } from '../constants/company';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const companyName = language === 'ar' ? COMPANY_NAME_AR : COMPANY_NAME_EN;

  return (
    <footer className="bg-white dark:bg-[#0d131c] pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-[#0d131c] dark:text-white">
              <div className="size-8 text-primary">
                {language === 'ar' ? (
                  <span className="material-symbols-outlined text-3xl">electric_bolt</span>
                ) : (
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                  </svg>
                )}
              </div>
              <h2 className="text-xl font-bold leading-tight">{companyName}</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {language === 'ar' 
                ? 'في العامر للصناعات الكهربائية، نعمل على تطوير قطاع الطاقة في سوريا من خلال حلول كهربائية مبتكرة تجمع بين أحدث التقنيات والخبرة العملية في الميدان. نلتزم بتقديم حلول طاقة آمنة وفعّالة، مصمّمة خصيصًا لتلبية احتياجات السوق المحلي ودعم مشاريع البنية التحتية والقطاعات السكنية والتجارية.'
                : 'At ALAMER FOR Electrical Industries, we’re transforming Syria’s energy landscape with innovative electrical solutions. Combining advanced technology with field expertise, we deliver safe and efficient power solutions tailored to the country’s needs.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">work</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-[#0d131c] dark:text-white font-bold mb-6">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'من نحن' : 'About Us'}</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'خدماتنا' : 'Our Services'}</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'مشاريعنا' : 'Projects Portfolio'}</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'أخبار ورؤى' : 'News & Insights'}</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'الوظائف' : 'Careers'}</a></li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-[#0d131c] dark:text-white font-bold mb-6">{language === 'ar' ? 'خدماتنا' : 'Our Services'}</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'التركيبات الصناعية' : 'Industrial Installation'}</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'التمديدات التجارية' : 'Commercial Wiring'}</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'صيانة المرافق' : 'Facility Maintenance'}</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'الاختبار والفحص' : 'Testing & Inspection'}</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">{language === 'ar' ? 'استشارات الطاقة' : 'Energy Consulting'}</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-[#0d131c] dark:text-white font-bold mb-6">{language === 'ar' ? 'اتصل بنا' : 'Contact Us'}</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <span className="material-symbols-outlined text-primary mt-0.5 text-lg">location_on</span>
                <span>
                  {language === 'ar' 
                    ? 'دمشق، سوريا' 
                    : 'Damascus, Syria'}
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span dir="ltr">+963 993 320 611</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">email</span>
                <span>info@alamer.sa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-start">
            © 2023 {companyName}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-primary text-sm">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="#" className="text-slate-400 hover:text-primary text-sm">{language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};