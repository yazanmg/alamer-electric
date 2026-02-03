import React from 'react';
import { NavigateFunction } from '../types';

interface ServicesArProps {
  onNavigate: NavigateFunction;
}

export const ServicesAr: React.FC<ServicesArProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-background-light dark:bg-background-dark">
        <div className="flex flex-col">
          <div className="@container">
            <div className="relative w-full h-[400px] md:h-[500px]">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFv7FWpgW9D52Wa5iI9AKFKLl_MZEGSO6pzbokR0yS-cJiIOOhkGpDO8c0xj5TT9MPqijgycWVrZ0qBYBHGus1rYRKd5PjPqRbxW8q0DnEQaPoTNtUC9zeh3u-Dht8KIJnAZNpOYq1Ez9Z10Yo5b-OpVGtzNhEylBLf156SuICtz2AtLgTVQmzNiVRi99InxknsypD9dwcC-CR5q6AsgchXQC1W4uPNXT7_7Auz3s7pYCMyZZjffjmrTRRQJFctXsqud5meJaDnJGv")`}}
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent z-10"></div>
              {/* Content */}
              <div className="relative z-20 h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-right">
                <div className="max-w-[700px] flex flex-col gap-4">
                  <span className="inline-flex items-center rounded-md bg-primary/20 px-2 py-1 text-xs font-medium text-blue-100 ring-1 ring-inset ring-blue-500/20 w-fit">
                    خبراء الصناعة
                  </span>
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                    خدمات كهربائية متكاملة <br className="hidden md:block"/> وحلول صناعية ذكية
                  </h1>
                  <h2 className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-[600px]">
                    نقدم أعلى معايير الجودة في التركيب والصيانة والتوريد لعملائنا في القطاعين الصناعي والتجاري، مع التزام تام بالسلامة والكفاءة.
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <button 
                      onClick={() => onNavigate('/ar/contact')}
                      className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-900/20"
                    >
                      <span className="material-symbols-outlined me-2 text-[20px]">calendar_month</span>
                      <span className="truncate">اطلب استشارة مجانية</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('/ar/projects')}
                      className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors text-white text-base font-bold leading-normal"
                    >
                      <span className="truncate">تعرف على مشاريعنا</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="w-full bg-background-light dark:bg-background-dark py-12 md:py-16">
        <div className="layout-content-container max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 border-b border-gray-200 dark:border-gray-800 pb-6">
            <div>
              <h2 className="text-[#0d131c] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">خدماتنا</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg">حلول شاملة تلبي كافة احتياجاتك الكهربائية</p>
            </div>
            <button 
              onClick={() => onNavigate('/ar/services')}
              className="hidden md:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
            >
              عرض جميع الخدمات
              <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group flex flex-col bg-white dark:bg-[#1a2332] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEOk05deAtXRU0bhf2m_nNTuG9fZ6vDyhq4N8fjLq-hZsn-56H-T7EFi4xmTsg5WaQ7nbx6yFNB-GpCyWhH6w3IebyDELD8aDGrLwhLaSIyDPCUuIv1_8Kmy2ZggDjiYzzOGzthRAZOy1Yja-y_rxqJHcDWXqU5SK0tBCd2Yyy2URnAtABvrgKCUARzGSX4ABrZTVk7KPNEO_JIE8sHgiWwSOfjUwEPKM8ILppByPQKEwYs2Q_gkOISK4Y5SB0xWgfP0jx9CH1eaRC")`}}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-lg shadow-lg">
                  <span className="material-symbols-outlined block">electrical_services</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#0d131c] dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">التركيبات الكهربائية</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  تنفيذ كافة أعمال التوصيلات، تركيب اللوحات الرئيسية والفرعية، وأنظمة الإضاءة الصناعية وفق أعلى معايير السلامة العالمية.
                </p>
                <button 
                  onClick={() => onNavigate('/ar/services')}
                  className="inline-flex items-center text-primary text-sm font-bold mt-auto group/link"
                >
                  اقرأ المزيد
                  <span className="material-symbols-outlined text-[18px] me-1 transition-transform group-hover/link:-translate-x-1 rtl:rotate-180">arrow_right_alt</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col bg-white dark:bg-[#1a2332] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1oevXcamlPcB4ciwOo1BhnsANIM979502kKmIy4bvnOJKAzN3jD0RuAa3zvNtRUrrRR4w1u39if18zHgbIWoB6UR4Dw3hyXIK2x8OoiTnnl1THck3aUkQhUvwToQM90cE3qPB3P13StqDyrcDciFBvUC52cvv4Zr7-hQZG_ngHbXPDbXxbFGuNElvkPxrw-8K3y8eXqmrvJlK5l5y27UEsWi3RlwBdiSZ-mhiC9AGaYh0G-WM-sX2lsbWPMKATwjSy0hC0sx-1URU")`}}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-lg shadow-lg">
                  <span className="material-symbols-outlined block">build_circle</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#0d131c] dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">الصيانة الوقائية</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  برامج فحوصات دورية شاملة وإصلاح فوري للأعطال لضمان استمرارية العمل في المنشآت ورفع كفاءة المعدات التشغيلية.
                </p>
                <button 
                  onClick={() => onNavigate('/ar/services')}
                  className="inline-flex items-center text-primary text-sm font-bold mt-auto group/link"
                >
                  اقرأ المزيد
                  <span className="material-symbols-outlined text-[18px] me-1 transition-transform group-hover/link:-translate-x-1 rtl:rotate-180">arrow_right_alt</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col bg-white dark:bg-[#1a2332] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBCxknqgDgQk6v5uxt4rZ0ElM47hskNOFSrgzGekW4d-tqlBJtWgm0qy9mk7ZMvbUbTAJxxUSjk3Yt7gXl24cloI57d1fIvnvkCKlYM4TWbjCS7JraJQ-ePVbBQ07A0L7vonvnms54_lKdwlazeiEKC4KRBxel73EI0XkK6hVez_fxwT-8Tr0hPIt1ULsBm2qAX4M2Vbv553-dazVtXSnmTh2S6X3_rIEyM7Nib8CMeVzEaY1rh7cRNyT46sauGoZJs9vISCM067vx")`}}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-lg shadow-lg">
                  <span className="material-symbols-outlined block">inventory_2</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#0d131c] dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">التجارة والتوريد</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  شبكة توريد عالمية توفر قطع غيار أصلية، كابلات، قواطع، ومكونات كهربائية عالية الجودة من أفضل الماركات المعتمدة.
                </p>
                <button 
                  onClick={() => onNavigate('/ar/products')}
                  className="inline-flex items-center text-primary text-sm font-bold mt-auto group/link"
                >
                  اقرأ المزيد
                  <span className="material-symbols-outlined text-[18px] me-1 transition-transform group-hover/link:-translate-x-1 rtl:rotate-180">arrow_right_alt</span>
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col bg-white dark:bg-[#1a2332] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3HH93aeQ7_AINgv5iMkzsDX_VM0CpmaLHENqnxek1ScPvLghQMDMcFk-v5_hMf8xFLsHUBc5KZ_8HU7NalS08uTCrj9l6gLutuDVK8aCJxVti21mbDgc665ZfMr3L8j_n8kcz0nHTY8__SW70c1adyDQh7RA8Qx1SIl2_JZSlj__LwfW1hLNq14ZdLcHX2XDkSMNnWTuRLFzuHz1sLNkQiaWlu-AAOl3rUwHYPqqjBMvC7iE3Sx7JV6FZcyY_tSIRkeOwd2_cC4a0")`}}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-lg shadow-lg">
                  <span className="material-symbols-outlined block">smart_toy</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#0d131c] dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">أنظمة الأتمتة</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  تصميم وتنفيذ حلول المصانع والمباني الذكية (BMS) لتحسين الكفاءة التشغيلية وتمكين التحكم والمراقبة عن بعد.
                </p>
                <button 
                  onClick={() => onNavigate('/ar/services')}
                  className="inline-flex items-center text-primary text-sm font-bold mt-auto group/link"
                >
                  اقرأ المزيد
                  <span className="material-symbols-outlined text-[18px] me-1 transition-transform group-hover/link:-translate-x-1 rtl:rotate-180">arrow_right_alt</span>
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group flex flex-col bg-white dark:bg-[#1a2332] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnQQnWE82tJHQCAqgysaajwPyNz7BmRkoyrqh6-kqkbDd72S9NDKe83NWwggPFjNxvP03MZHRuI9V3KIOmfgTRyE5PAnqF8QZ6NvSd0COijVzprRm37JJ1eM5mSA4qpfqpgWeEOHXDOyy7yLPXHwtJ4cdXfXCk7KuwIOWPITHM3KUkHYp4Phc-WO5JVTjVtpXacGWdt0u1obX-O0TkuTIGou5Tgx0BUSTr-3TlVK653BG2Pq-iyyIpHOfH80GJNalRkrGbMyvDkMB9")`}}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-lg shadow-lg">
                  <span className="material-symbols-outlined block">solar_power</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#0d131c] dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">أنظمة الطاقة الشمسية</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  حلول طاقة مستدامة تشمل تركيب وصيانة الألواح الشمسية للمنازل والمصانع لتوفير استهلاك الكهرباء وتقليل الانبعاثات.
                </p>
                <button 
                  onClick={() => onNavigate('/ar/services')}
                  className="inline-flex items-center text-primary text-sm font-bold mt-auto group/link"
                >
                  اقرأ المزيد
                  <span className="material-symbols-outlined text-[18px] me-1 transition-transform group-hover/link:-translate-x-1 rtl:rotate-180">arrow_right_alt</span>
                </button>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group flex flex-col bg-white dark:bg-[#1a2332] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgs5mvomw7FWorKYbUzOXsgag1rv_4VtrRzC-ELmzrOs7e5pEyve0-k7tzZiSZZqKnHvwK9nJqlTJH1SxHhR14qZXP7Udlv2-USHSGPKdtZqmKUqHcRwvNi36wPhOxbbkKhtgCfWUrvbyt-JKjSUa5bFXnzkTwkyjTi_-zdNYIaWvuULKWqU2KDxXbLYLH5f_g7mEdf3pX072RKmDeD7KKUb16F4HOH5QkmjP9_YdxrqwidyqVf3Q_SKRJEjDPXP03sp76l3ITFLQV")`}}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-primary text-white p-2 rounded-lg shadow-lg">
                  <span className="material-symbols-outlined block">engineering</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#0d131c] dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">الاستشارات الهندسية</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  دراسات جدوى اقتصادية وفنية، وتصاميم هندسية دقيقة للمشاريع الكهربائية الكبرى بإشراف مهندسين معتمدين.
                </p>
                <button 
                  onClick={() => onNavigate('/ar/services')}
                  className="inline-flex items-center text-primary text-sm font-bold mt-auto group/link"
                >
                  اقرأ المزيد
                  <span className="material-symbols-outlined text-[18px] me-1 transition-transform group-hover/link:-translate-x-1 rtl:rotate-180">arrow_right_alt</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Show More Mobile Button */}
          <div className="mt-8 flex justify-center md:hidden">
            <button 
              onClick={() => onNavigate('/ar/services')}
              className="flex items-center gap-2 text-primary font-bold px-6 py-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors"
            >
              عرض جميع الخدمات
              <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="layout-content-container max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-20">
            {/* Decorational Pattern */}
            <div className="absolute -left-32 -top-32 opacity-20">
              <svg fill="white" height="500" viewBox="0 0 500 500" width="500">
                <circle cx="250" cy="250" r="200"></circle>
              </svg>
            </div>
            <div className="relative z-10 flex flex-col gap-4 text-center lg:text-right max-w-2xl">
              <h2 className="text-white text-3xl font-black leading-tight sm:text-4xl">
                هل تبحث عن حلول مخصصة لمشروعك؟
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                فريقنا الهندسي المتخصص جاهز لمناقشة متطلباتك وتقديم الاستشارة الفنية المناسبة لضمان نجاح مشروعك بأعلى كفاءة.
              </p>
            </div>
            <div className="relative z-10 mt-8 flex justify-center gap-4 lg:mt-0 lg:flex-shrink-0">
              <button 
                onClick={() => onNavigate('/ar/contact')}
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white text-primary text-base font-bold leading-normal hover:bg-slate-100 transition-colors shadow-xl"
              >
                <span className="truncate">تواصل معنا اليوم</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};