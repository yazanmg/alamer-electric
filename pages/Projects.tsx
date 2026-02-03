import React from 'react';
import { NavigateFunction, RoutePath } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectsProps {
  onNavigate: NavigateFunction;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const handleHomeClick = () => {
    onNavigate(isAr ? '/ar' : '/');
  };

  const handleContactClick = () => {
    onNavigate(isAr ? '/ar/contact' : '/contact');
  };

  return (
    <>
      <div className="relative w-full">
        <div className="layout-container py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-6 animate-pulse">
            <span className="material-symbols-outlined text-4xl">construction</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-[#0d131c] dark:text-white mb-4">
            {isAr ? 'مشاريعنا قيد الإنشاء' : 'Our Projects'}
          </h1>
          
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
            {isAr 
              ? 'نحن نعمل حالياً على تحديث معرض مشاريعنا لعرض أحدث إنجازاتنا في سوريا. يرجى التحقق مرة أخرى قريباً.' 
              : 'We are currently updating our project portfolio to showcase our latest achievements across the country. Please check back soon.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleHomeClick}
              className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {isAr ? 'العودة للرئيسية' : 'Back to Home'}
            </button>
            <button 
              onClick={handleContactClick}
              className="px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20"
            >
              {isAr ? 'تواصل معنا' : 'Contact Us'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};