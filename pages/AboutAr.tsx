import React from 'react';
import { NavigateFunction } from '../types';
import { COMPANY_NAME_AR } from '../constants/company';

interface AboutArProps {
  onNavigate: NavigateFunction;
}

export const AboutAr: React.FC<AboutArProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full flex justify-center py-5 px-4 md:px-10 lg:px-40">
        <div className="flex flex-col max-w-[960px] flex-1 @container">
          <div className="@[480px]:p-4">
            <div 
              className="flex min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-6 pb-10 @[480px]:px-10 shadow-lg relative overflow-hidden" 
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaeyQzbzKRjNbRym9yItbMx-nLLyq2PUy3tVfywPbL7MNIqNxLnXaUqOAYtQYU2OVSfD5KxWPwfdErcv3Bb1CMF3hLbDpyujekLQCEgwKWCIE4z22KVMaP6M5KDmLEb5WtIDXcUycuF48TyztUPnn3TZAtlpCbjhzbOyKFbRB7dneXvdWw7amChXQBptAxGCHYV_jrZ6glAlwLCF8WvMHr3Ojtk5tQRbiAZ-xpC9F4ksNN1dJ59ubak6ta-XetumKQoWsuIV_Z438M")`
              }}
            >
              <div className="flex flex-col gap-2 text-right w-full md:w-2/3">
                <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  شريكك الموثوق في الطاقة
                </h1>
                <h2 className="text-gray-200 text-sm md:text-lg font-normal leading-normal mt-2">
                  نقدم حلولاً كهربائية متكاملة تجمع بين الخبرة العريقة والتكنولوجيا الحديثة لخدمة القطاعين الصناعي والتجاري.
                </h2>
              </div>
              <div className="flex gap-3 mt-2">
                <button 
                  onClick={() => onNavigate('/ar/contact')}
                  className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm md:text-base font-bold leading-normal hover:bg-blue-700 transition-colors"
                >
                  <span className="truncate">تواصل معنا</span>
                </button>
                <button 
                  onClick={() => onNavigate('/ar/projects')}
                  className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-white/20 backdrop-blur-sm text-white text-sm md:text-base font-bold leading-normal hover:bg-white/30 transition-colors"
                >
                  <span className="truncate">مشاريعنا</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full flex justify-center py-5 px-4 md:px-10 lg:px-40">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-col md:flex-row gap-10 px-4 py-10 items-center">
            <div className="flex flex-col gap-6 flex-1 text-right">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-sm tracking-wider uppercase">نبذة عنا</span>
                <h2 className="text-[#0d131c] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                  من نحن
                </h2>
              </div>
              <p className="text-[#0d131c] dark:text-gray-300 text-base md:text-lg leading-relaxed text-right opacity-80">
                في {COMPANY_NAME_AR}، نعمل على تطوير قطاع الطاقة في سوريا من خلال حلول كهربائية مبتكرة تجمع بين أحدث التقنيات والخبرة العملية في الميدان. نلتزم بتقديم حلول طاقة آمنة وفعّالة، مصمّمة خصيصًا لتلبية احتياجات السوق المحلي ودعم مشاريع البنية التحتية والقطاعات السكنية والتجارية.
              </p>
              <p className="text-[#0d131c] dark:text-gray-300 text-base md:text-lg leading-relaxed text-right opacity-80">
                نتميز بقدرتنا على تنفيذ المشاريع المعقدة بدقة عالية، مع الحفاظ على أعلى معايير السلامة المهنية.
              </p>
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                <div>
                  <h3 className="text-3xl font-black text-primary">٣٠+</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">عاماً من الخبرة</p>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-primary">٥٠٠+</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">مشروع ناجح</p>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-primary">٥٠+</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">مهندس خبير</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="flex flex-col gap-3 pt-8">
                  <div 
                    className="w-full h-48 md:h-64 bg-center bg-no-repeat bg-cover rounded-2xl shadow-md" 
                    style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtM_2RpG1l-m84XuiIXPOVPdAvBif0VoYFnqDxsZw38tz6idmL2x5ofaDvjagjJNtCVq0Oz7JPoA2h6Ec45qc5KMc08Mb3Hbx8HMuLrpHs25vq5C3KniAwpKYbzt5xFnktjdZjAxnF8NfUTveOmys0-5ZQWvL2bFF-8yhJu3gp6OCX7DG7LrCkvgMpUita57AuJPgsX26CpYRGnvJo13WPK-8SY9mKo3TjKWC0pK6GGoymF3p4oTvNvhONABQdnErwDr8UO24nmjiF")`}}
                  ></div>
                </div>
                <div className="flex flex-col gap-3 pb-8">
                  <div 
                    className="w-full h-48 md:h-64 bg-center bg-no-repeat bg-cover rounded-2xl shadow-md" 
                    style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_u5nG3yYLcxJtmvFL0cDclFvQGOtgA7JxPufNxL1SjiS1azdcFNUy4W5IOsIVz2PH939TmZCiBEn3PTo0mF3M_65q6utnswrqKjUvfDIStb_qxAfDoI4VPjOtdqHHT9dfZBcY2igKFZVjapZPLxPYDpmHSKaOofRfBWZGgw4rWUjp6U8y76dDsIrZt-23Ocn32cdxk2ykHuIl73--okg8c_MuLZoX6_lU41crbWetCVUAKruFYpRHXUCx2xNGj6P2gP3rQ0JDEG4-")`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full flex justify-center py-5 px-4 md:px-10 lg:px-40 bg-gray-50 dark:bg-[#1a222e]">
        <div className="flex flex-col max-w-[960px] flex-1 py-10">
          <div className="flex flex-col gap-2 mb-8 px-4">
            <h2 className="text-[#0d131c] dark:text-white text-3xl font-bold leading-tight text-right">رؤيتنا ورسالتنا</h2>
            <p className="text-gray-500 dark:text-gray-400 text-right">المبادئ التي تقودنا نحو المستقبل</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 px-4">
            {/* Vision Card */}
            <div className="flex flex-col bg-white dark:bg-[#2a3441] rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_agJfmLwbpXyGmfF-Z8BbJXaoMFNHE0_gicukAYoRrHUleh6xCKe0XhsiviEUXFIwzx6GoFNfQV-7klwuU9wWZPqQp296asGO_Lo_feCuYDSmMM6KEMJpOODS7jaQ8datG8uUT6JAHwO8hWLvTK4ffXFkCkAWSIxFNF43kl6QOkRVgS07uuabTQ4V0t1fC0-j9wxpfaA1va5cSoHBQVIwvEk3b6gKfmFQW_1nxa5U_00DnmI7uKiSv5-lnNlch1_L_rA6j86NskV8")`}}
              ></div>
              <div className="p-6 flex flex-col gap-4 items-start text-right">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary w-fit">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-2">رؤيتنا</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    أن نكون الشريك الرائد في المنطقة للبنية التحتية الكهربائية، متميزين بالابتكار والموثوقية والاستدامة البيئية.
                  </p>
                </div>
              </div>
            </div>
            {/* Mission Card */}
            <div className="flex flex-col bg-white dark:bg-[#2a3441] rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW3DffXKCLGcJh2JQKea_FX4b21ToYBXpomIlu36VM50dFgBs0DQa5ukIk9aGbURmEAQ-pmJPgTfsWJ0brwkU-6BlItGKHrPMr0DMEHu4ve1wD5UXvF3Hv6gyYK0fxGl3d0Sto09vbv5xc9xZ93TV2r63ss6DV565mQiyfE-oK6k9B5Yw8miVONpn1Z2uq3XbMiHAY-hazGbS5SJVxmT1MyW2rYGT-y1NuvJWVB9PYcqv1kOyutiP0KH1rkXMUtV3ASp0GL693IUVs")`}}
              ></div>
              <div className="p-6 flex flex-col gap-4 items-start text-right">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary w-fit">
                  <span className="material-symbols-outlined">flag</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-2">رسالتنا</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    تقديم حلول كهربائية آمنة وموثوقة ومبتكرة تتجاوز توقعات عملائنا، وتساهم في التنمية المستدامة وبناء مجتمعات أكثر أماناً.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full flex justify-center py-10 px-4 md:px-10 lg:px-40">
        <div className="flex flex-col max-w-[960px] flex-1 px-4">
          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <h2 className="text-[#0d131c] dark:text-white text-3xl font-bold">قيمنا الجوهرية</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
              نؤمن بأن القيم الراسخة هي أساس النجاح المستدام، وهي ما يميزنا في كل مشروع نقوم بتنفيذه.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-[#1a222e] border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-2xl">health_and_safety</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0d131c] dark:text-white">السلامة أولاً</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">نلتزم بأعلى معايير السلامة لحماية موظفينا وعملائنا والمجتمع.</p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-[#1a222e] border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0d131c] dark:text-white">الجودة</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">لا نتنازل عن الجودة في المواد المستخدمة أو في تنفيذ الأعمال.</p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-[#1a222e] border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-2xl">handshake</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0d131c] dark:text-white">النزاهة</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">نتعامل بصدق وشفافية مطلقة مع جميع شركائنا وعملائنا.</p>
            </div>
            {/* Value 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-[#1a222e] border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-2xl">lightbulb</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0d131c] dark:text-white">الابتكار</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">نسعى دائماً لتبني أحدث التقنيات والحلول الذكية في مشاريعنا.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-primary py-16 px-4 md:px-10 lg:px-40 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-[960px] mx-auto">
          <div className="flex flex-col gap-2 text-center md:text-right flex-1">
            <h2 className="text-white text-3xl font-bold">هل لديك مشروع كهربائي؟</h2>
            <p className="text-blue-100 text-lg">دع خبرائنا يساعدونك في تخطيط وتنفيذ مشروعك بأعلى كفاءة.</p>
          </div>
          <div>
            <button 
              onClick={() => onNavigate('/ar/contact')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition-colors flex items-center gap-2"
            >
              <span>تواصل معنا الآن</span>
              <span className="material-symbols-outlined text-xl rotate-180">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};