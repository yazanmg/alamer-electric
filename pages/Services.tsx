import React from 'react';
import { NavigateFunction, RoutePath } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesProps {
  onNavigate?: NavigateFunction;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      if (language === 'ar') {
        onNavigate(`/ar${path}`);
      } else {
        onNavigate(path);
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="@container">
          <div 
            className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat min-h-[320px] md:min-h-[400px] items-center justify-center p-8 relative" 
            style={{
              backgroundImage: `linear-gradient(rgba(15, 104, 230, 0.85) 0%, rgba(16, 23, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAt_JbrzGwBMrGfPBCldXqjUW68GsNowtpuiiEw2M3MVUCRH4jftsE6tj_meWubpRyJHOCEhx9U9PJxroZO67M-yaiFZROdshoopKPYSyLPM9VHfrDxITSthaqbesHUkE7g0J7wYkoF5vwr9O1Warsi3LTKGDJvqw-b2U1OpW2yo8GNSecbKsrXtuNUWPSMZKc8cL5BwvShD9qo8etmv3dg8oy5xyYQVgdTytN9k3rmf06wXJzUDDW3NgKE9sezdOy4Y73NvXvJOfim")`
            }}
          >
            <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                Our Expertise
              </h1>
              <h2 className="text-blue-100 text-lg font-medium leading-relaxed md:text-xl max-w-2xl mx-auto">
                Delivering excellence in electrical engineering. Trusted solutions for industrial and commercial needs across the region.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
        <div className="layout-container py-4">
          <div className="flex flex-wrap items-center gap-2">
            <button 
              className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" 
              onClick={() => handleNavigate('/')}
            >
              Home
            </button>
            <span className="material-symbols-outlined text-slate-400 text-sm rtl:rotate-180">chevron_right</span>
            <span className="text-slate-900 dark:text-white text-sm font-semibold leading-normal">Services</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="w-full flex justify-center section-padding bg-background-light dark:bg-background-dark">
        <div className="layout-container w-full flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-4 text-center md:text-start max-w-[800px]">
            <h1 className="text-[#0d131c] dark:text-white tracking-tight text-3xl md:text-4xl font-extrabold leading-tight">
              Comprehensive Electrical Solutions
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed">
              We provide end-to-end electrical solutions, from initial design and consultation to installation, testing, and long-term maintenance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service Card 1 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2332] p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[32px]">settings_input_component</span>
              </div>
              <div className="flex flex-col gap-3 grow">
                <h2 className="text-[#0d131c] dark:text-white text-xl font-bold leading-tight">Installation Services</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  Expert installation of industrial wiring, MV/LV panels, and containment systems tailored to project specs ensuring operational efficiency.
                </p>
              </div>
              <div className="flex items-center text-primary font-bold text-sm mt-2 group-hover:gap-2 gap-1 transition-all">
                <span>Learn more</span>
                <span className="material-symbols-outlined text-[18px] rtl:rotate-180">arrow_forward</span>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2332] p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[32px]">fact_check</span>
              </div>
              <div className="flex flex-col gap-3 grow">
                <h2 className="text-[#0d131c] dark:text-white text-xl font-bold leading-tight">Testing & Commissioning</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  Comprehensive relay testing, transformer testing, and cable diagnostics ensuring system integrity before energization.
                </p>
              </div>
              <div className="flex items-center text-primary font-bold text-sm mt-2 group-hover:gap-2 gap-1 transition-all">
                <span>Learn more</span>
                <span className="material-symbols-outlined text-[18px] rtl:rotate-180">arrow_forward</span>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2332] p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[32px]">handyman</span>
              </div>
              <div className="flex flex-col gap-3 grow">
                <h2 className="text-[#0d131c] dark:text-white text-xl font-bold leading-tight">Maintenance</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  Preventative and corrective maintenance programs for substations and industrial plants to minimize downtime and extend asset life.
                </p>
              </div>
              <div className="flex items-center text-primary font-bold text-sm mt-2 group-hover:gap-2 gap-1 transition-all">
                <span>Learn more</span>
                <span className="material-symbols-outlined text-[18px] rtl:rotate-180">arrow_forward</span>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2332] p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[32px]">engineering</span>
              </div>
              <div className="flex flex-col gap-3 grow">
                <h2 className="text-[#0d131c] dark:text-white text-xl font-bold leading-tight">Engineering Consultancy</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  Advanced system design, load flow analysis, and technical studies delivered by certified engineers for optimal performance.
                </p>
              </div>
              <div className="flex items-center text-primary font-bold text-sm mt-2 group-hover:gap-2 gap-1 transition-all">
                <span>Learn more</span>
                <span className="material-symbols-outlined text-[18px] rtl:rotate-180">arrow_forward</span>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2332] p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
              </div>
              <div className="flex flex-col gap-3 grow">
                <h2 className="text-[#0d131c] dark:text-white text-xl font-bold leading-tight">Trading</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  Supply of high-quality electrical components, switchgear, and safety equipment sourced from trusted international brands.
                </p>
              </div>
              <div className="flex items-center text-primary font-bold text-sm mt-2 group-hover:gap-2 gap-1 transition-all">
                <span>Learn more</span>
                <span className="material-symbols-outlined text-[18px] rtl:rotate-180">arrow_forward</span>
              </div>
            </div>

            {/* Placeholder for potential 6th Service or Generic Inquiry */}
            <div 
              className="group flex flex-col gap-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-transparent p-8 items-center justify-center text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
              onClick={() => handleNavigate('/contact')}
            >
              <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-[32px]">contact_support</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#0d131c] dark:text-white text-lg font-bold leading-tight">Need something else?</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Contact us for custom solutions tailored to your unique requirements.
                </p>
              </div>
              <button className="text-primary font-bold text-sm mt-2">Contact Us</button>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <div className="w-full bg-white dark:bg-[#1a2332] border-t border-gray-200 dark:border-gray-700">
        <div className="layout-container py-16 md:py-24">
          <div className="flex flex-col items-center justify-center gap-8 text-center max-w-[800px] mx-auto">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#0d131c] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                Ready to start your project?
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed">
                Get in touch with our engineering team today for a technical consultation or a detailed quote for your electrical needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button 
                onClick={() => handleNavigate('/contact')}
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-wide transition-colors shadow-lg shadow-primary/20"
              >
                <span className="truncate">Contact Us</span>
              </button>
              <button 
                onClick={() => handleNavigate('/projects')}
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#0d131c] dark:text-white text-base font-bold leading-normal tracking-wide transition-colors"
              >
                <span className="truncate">View Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};