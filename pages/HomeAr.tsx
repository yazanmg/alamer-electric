import React from 'react';
import { NavigateFunction } from '../types';
import { COMPANY_NAME_AR } from '../constants/company';
import { Hero } from '../components/Hero';

interface HomeArProps {
  onNavigate: NavigateFunction;
}

export const HomeAr: React.FC<HomeArProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero
        badge="رقم 1 في حلول الطاقة"
        badgeIcon={<span className="material-symbols-outlined text-sm">verified</span>}
        title={
          <>
            الرائدة في <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-primary">التميز الكهربائي</span>
          </>
        }
        description="نقدم أفضل الحلول الكهربائية للمنشآت السكنية والتجارية بأعلى معايير الجودة والأمان، لنضمن لكم طاقة مستدامة وآمنة."
        primaryButton={{
          text: "خدماتنا",
          icon: <span className="material-symbols-outlined rtl:rotate-180">arrow_right_alt</span>,
          onClick: () => onNavigate('/ar/services')
        }}
        secondaryButton={{
          text: "تواصل معنا",
          icon: <span className="material-symbols-outlined">call</span>,
          onClick: () => onNavigate('/ar/contact')
        }}
      />

      {/* Features / Services Section */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="layout-container">
          <div className="mb-12 flex flex-col gap-4 text-start">
            <h2 className="text-3xl font-black text-[#0d131c] dark:text-white md:text-4xl">خدماتنا المتميزة</h2>
            <p className="max-w-[700px] text-lg text-slate-600 dark:text-slate-400">
              نقدم مجموعة شاملة من الخدمات الكهربائية المتخصصة لتلبية جميع احتياجاتكم بكفاءة واحترافية.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-slate-900 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">electrical_services</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#0d131c] dark:text-white">التركيبات الكهربائية</h3>
                <p className="text-slate-600 dark:text-slate-400">تركيبات آمنة وموثوقة للمنازل والمصانع وفق أحدث المعايير الهندسية العالمية.</p>
              </div>
              <button 
                onClick={() => onNavigate('/ar/services')}
                className="mt-auto flex items-center gap-2 text-sm font-bold text-primary group-hover:underline w-fit"
              >
                <span>المزيد من التفاصيل</span>
                <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
              </button>
            </div>
            {/* Service 2 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-slate-900 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">home_repair_service</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#0d131c] dark:text-white">الصيانة الدورية</h3>
                <p className="text-slate-600 dark:text-slate-400">فريق صيانة متخصص جاهز على مدار الساعة لضمان استمرارية أعمالكم دون انقطاع.</p>
              </div>
              <button 
                onClick={() => onNavigate('/ar/services')}
                className="mt-auto flex items-center gap-2 text-sm font-bold text-primary group-hover:underline w-fit"
              >
                <span>المزيد من التفاصيل</span>
                <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
              </button>
            </div>
            {/* Service 3 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-slate-900 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">solar_power</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#0d131c] dark:text-white">أنظمة الطاقة الذكية</h3>
                <p className="text-slate-600 dark:text-slate-400">حلول طاقة مستدامة وأنظمة شمسية ذكية تساعد في تقليل التكاليف وحماية البيئة.</p>
              </div>
              <button 
                onClick={() => onNavigate('/ar/services')}
                className="mt-auto flex items-center gap-2 text-sm font-bold text-primary group-hover:underline w-fit"
              >
                <span>المزيد من التفاصيل</span>
                <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Split) */}
      <section className="section-padding bg-background-light dark:bg-background-dark/50">
        <div className="layout-container">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Text Content */}
            <div className="flex flex-1 flex-col gap-6 text-start">
              <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-sm font-bold text-primary">
                <span className="material-symbols-outlined text-lg">info</span>
                <span>من نحن</span>
              </div>
              <h2 className="text-3xl font-black leading-tight text-[#0d131c] dark:text-white md:text-5xl">
                أكثر من 30 عاماً من الخبرة في مجال الطاقة
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                في {COMPANY_NAME_AR}، نعمل على تطوير قطاع الطاقة في سوريا من خلال حلول كهربائية مبتكرة تجمع بين أحدث التقنيات والخبرة العملية في الميدان. نلتزم بتقديم حلول طاقة آمنة وفعّالة، مصمّمة خصيصًا لتلبية احتياجات السوق المحلي ودعم مشاريع البنية التحتية والقطاعات السكنية والتجارية.
              </p>
              <ul className="flex flex-col gap-3 py-2">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </span>
                  <span className="font-medium text-[#0d131c] dark:text-slate-200">فريق هندسي معتمد ومحترف</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </span>
                  <span className="font-medium text-[#0d131c] dark:text-slate-200">ضمان شامل على جميع التركيبات</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </span>
                  <span className="font-medium text-[#0d131c] dark:text-slate-200">استخدام أفضل المواد والمعدات الأصلية</span>
                </li>
              </ul>
              <button 
                onClick={() => onNavigate('/ar/about')}
                className="mt-4 flex w-fit cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-all hover:bg-blue-600"
              >
                <span>تعرف علينا أكثر</span>
              </button>
            </div>
            {/* Image Content */}
            <div className="relative flex-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <div 
                  className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-700 hover:scale-105" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAa8tce2Zz9K6ZKnbdW0UfdI0Z_a180TvSHCkD1dNa34ePKDiP7B0SP_ctFo7dPw_7-ID55R4_EX49bO7VkRITnIRSaw0-yeilSirm-RADMmudmZQQEjcVwu1U9U591npYVMm273aiEmhENCe61XxTNNikAzhth9Ad-Tg2m3KHhOFYuz26Q672U_kmktvESvqBr7fU7P5K_PHbFKpNR1PbEADa3SEkNcox9SgM5DH2f3eG1hEEqqu_iOXzlLYBeTrjojNsW9tkXfqHa")`}}
                >
                </div>
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-xl md:flex flex-col gap-1 border border-slate-100 dark:border-slate-700 max-w-[200px]">
                <span className="text-4xl font-black text-primary">+2500</span>
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400">مشروع ناجح</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="section-padding bg-white dark:bg-background-dark">
        <div className="layout-container">
          <div className="mb-10 flex items-end justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-black text-[#0d131c] dark:text-white md:text-4xl">أحدث المنتجات</h2>
              <p className="max-w-[500px] text-slate-600 dark:text-slate-400">نوفر لكم أفضل المنتجات الكهربائية من الماركات العالمية.</p>
            </div>
            <button 
              onClick={() => onNavigate('/ar/products')}
              className="hidden items-center gap-2 text-sm font-bold text-primary hover:underline md:flex"
            >
              <span>عرض كل المنتجات</span>
              <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product 1 */}
            <div className="group flex flex-col rounded-lg bg-background-light dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square w-full overflow-hidden bg-white dark:bg-slate-800 p-4 flex items-center justify-center">
                <div 
                  className="h-full w-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd4vgI-mO9SiRr7nRbUA1BK9crEmESnJo7gIsMV5dyk_5hBHx9nSNiYKqnqDif_USsBnJgSleMDp9WBglk6QVeVqSVVBng3lqWw5iRitQn1NzEbsNeDoUV63NK2QBJJwcpe4U3dowBbQ_1X8vFdWJdKmIyKg5XUvpMYCilJbYSOqsRp0RSoMJJmjsImF-AIRycPJF8LzOjMRaeyxNgOBwWuvBChd8NdhgxSEpKmBMMUty-cdOZoheZdyT0fM15PfBGQl23-edTiajw")`}}
                >
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">صناعي</span>
                  <div className="flex text-yellow-400 text-sm">
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0d131c] dark:text-white line-clamp-1">محولات كهربائية عالية الجهد</h3>
                <p className="text-sm text-slate-500 line-clamp-2">مصممة لتحمل أقصى درجات الضغط وكفاءة نقل الطاقة.</p>
                <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-[#0d131c] dark:text-white">للطلب اتصل بنا</span>
                  <button 
                    onClick={() => onNavigate('/ar/contact')}
                    className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="group flex flex-col rounded-lg bg-background-light dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square w-full overflow-hidden bg-white dark:bg-slate-800 p-4 flex items-center justify-center">
                <div 
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGgZpC4QrfSdF0ygYmcGFxtPLuhA2cPnrEkuDbaRQR7S1B1PGfaV8OfHST4EuIdd8WQTkhPjRtu7J-EqpNimw3QKY1CzFrTDRHZsd4FhpnauLbmJI80XtDVF6fp4V9olu2xIIVc4UniOnRHiY_A_XTzfqWe7oqqQvPirsKJmWxr-5i6vSaYFPgZVG6S0uc-_4f2eLOecJtXQ7N4W8WP7gHrx-Gug_7l7S971G7BbWbUIu1FknbaOT02qIr9fiSgtEryDoNyWy5gaMl")`}}
                >
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">كابلات</span>
                  <div className="flex text-yellow-400 text-sm">
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star_half</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0d131c] dark:text-white line-clamp-1">كابلات نحاسية معزولة</h3>
                <p className="text-sm text-slate-500 line-clamp-2">عزل مزدوج لمقاومة الحرارة والرطوبة.</p>
                <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-[#0d131c] dark:text-white">للطلب اتصل بنا</span>
                  <button 
                    onClick={() => onNavigate('/ar/contact')}
                    className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="group flex flex-col rounded-lg bg-background-light dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square w-full overflow-hidden bg-white dark:bg-slate-800 p-4 flex items-center justify-center">
                <div 
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB28TLd6ruUw4BptkWWqfXGsFBIBqC3fH7MKC9m25_dDazkm7styQKRZZJUXzasQrKH_W-Rv1EClorme0D1pHgALLXs76IBbpL84FHvdZpbGsd2_YtFQQ2nhlxmYH3KJBTSUYDd6lZzSQ_9mUiYWysrrGUl3XdL9e90XQk3Q2QYRIGhn7fR_jGQ0yHxh_m7AksG8skWuw9YhpheyegOxIqkFkpwb908I7je2DuE03p74RYfJRCIZ3t4ZFcGxfXZf-x06Mbf0huki8Q5")`}}
                >
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">تحكم</span>
                  <div className="flex text-yellow-400 text-sm">
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0d131c] dark:text-white line-clamp-1">لوحات تحكم ذكية</h3>
                <p className="text-sm text-slate-500 line-clamp-2">تحكم دقيق في خطوط الإنتاج والآلات الصناعية.</p>
                <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-[#0d131c] dark:text-white">للطلب اتصل بنا</span>
                  <button 
                    onClick={() => onNavigate('/ar/contact')}
                    className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="group flex flex-col rounded-lg bg-background-light dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square w-full overflow-hidden bg-white dark:bg-slate-800 p-4 flex items-center justify-center">
                <div 
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBewg72HBXW3KTeZfgRWqNFtWYJTdSZhYufr_qCYyoEZbmSoE8yhcOFG7cLdYGQ2qXN6P3juut2qs2-p8IKTPKR5RulSuYeUgOovCbbHkhEnECeLtnsE9el80yc624wclqz5lXyPbw0zqqsRMgaIQ9mi6EeVoxq0Q_8zdmRfOpYCe4daCyVOJAgWppuA1FGb9LkOs6haYP34bblInZEJsPUFWON7nZd9Mti30-j92BsCvzbBgQ2a3UE6-LoqS_zOQ2wlua3dc5icbhh")`}}
                >
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">سلامة</span>
                  <div className="flex text-yellow-400 text-sm">
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    <span className="material-symbols-outlined text-sm filled">star</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0d131c] dark:text-white line-clamp-1">معدات السلامة المهنية</h3>
                <p className="text-sm text-slate-500 line-clamp-2">خوذات، قفازات عازلة، وأحذية أمان للمهندسين والفنيين.</p>
                <div className="mt-2 flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-[#0d131c] dark:text-white">للطلب اتصل بنا</span>
                  <button 
                    onClick={() => onNavigate('/ar/contact')}
                    className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center md:hidden">
            <button 
              onClick={() => onNavigate('/ar/products')}
              className="flex items-center gap-2 rounded-lg bg-[#e7ecf3] dark:bg-slate-800 px-6 py-3 text-sm font-bold text-[#0d131c] dark:text-white"
            >
              <span>عرض كل المنتجات</span>
              <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary py-16 text-white">
        <div className="layout-container text-center">
          <h2 className="mb-6 text-3xl font-black md:text-5xl">جاهز لبدء مشروعك الكهربائي؟</h2>
          <p className="mb-8 text-lg text-blue-100 md:text-xl">تواصل مع خبرائنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('/ar/contact')}
              className="h-12 px-8 rounded-lg bg-white text-primary text-base font-bold hover:bg-slate-50 transition-colors shadow-lg w-full sm:w-auto"
            >
              اتصل بنا الآن
            </button>
            <button 
              onClick={() => onNavigate('/ar/contact')}
              className="h-12 px-8 rounded-lg bg-blue-700 px-8 py-3 text-lg font-bold text-white hover:bg-blue-800 transition-colors border border-blue-500 w-full sm:w-auto"
            >
              اطلب عرض سعر
            </button>
          </div>
        </div>
      </section>
    </>
  );
};