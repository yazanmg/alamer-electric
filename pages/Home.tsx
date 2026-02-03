import React from 'react';
import { NavigateFunction, RoutePath } from '../types';
import { COMPANY_NAME_EN } from '../constants/company';
import { Hero } from '../components/Hero';

interface HomeProps {
  onNavigate: NavigateFunction;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero
        badge="Powering the Future"
        title={
          <>
            Leading the Way in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Electrical Excellence</span>
          </>
        }
        description="Reliable engineering solutions for industrial and commercial sectors across the region. We deliver power, safety, and innovation."
        primaryButton={{
          text: "Get a Quote",
          onClick: () => onNavigate(RoutePath.Contact)
        }}
        secondaryButton={{
          text: "View Our Projects",
          onClick: () => onNavigate(RoutePath.Projects)
        }}
      />

      {/* About Summary Section */}
      <section className="section-padding bg-white dark:bg-[#101722]">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhVfsKyBh2gX7pwqebCno_WM1sEbWKZ3RWWrS1bKQ5Rqqx1k0SjVJZZgFF83WToX0756SDDdtA7LJmTek5OX-i0PwT5fuOP0aPZKuHVHs8ZsdBAhpEWHMDvnmK12Vk6ZzkRWM4NsMtLvV0hu3R_Nj8wMsRvYXAU1OE17MIwQQq7-hALRDmbLWEi_l0WyyzN8br45N0J0vvlMJ93geE2Mbo4P_oI3PAiiUHd-SUNutU81q3xi1AvXfcLZjpAITGPNWsLYHCuuCD9zR3"
                  alt="Professional engineer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[240px] hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary text-4xl">verified</span>
                  <span className="text-4xl font-bold text-[#0d131c] dark:text-white">30+</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Years of dedicated service in the electrical industry.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">Who We Are</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0d131c] dark:text-white leading-tight">
                  Engineering Quality & Safety
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                At {COMPANY_NAME_EN}, we’re transforming Syria’s energy landscape with innovative electrical solutions. Combining advanced technology with field expertise, we deliver safe and efficient power solutions tailored to the country’s needs.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  ISO Certified Processes
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Comprehensive Safety Protocols
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Top-tier Equipment Partnerships
                </li>
              </ul>
              <button 
                onClick={() => onNavigate(RoutePath.About)}
                className="mt-4 text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group w-fit"
              >
                Learn more about our company
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="w-full md:w-auto">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Expertise</span>
              <h2 className="text-3xl font-bold text-[#0d131c] dark:text-white mt-2">Comprehensive Services</h2>
            </div>
            <button 
              onClick={() => onNavigate(RoutePath.Services)}
              className="h-10 px-6 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full md:w-auto"
            >
              View All Services
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">factory</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-3">Industrial Installation</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Heavy-duty wiring, machinery connection, and power distribution setup for factories and plants.
              </p>
              <button 
                onClick={() => onNavigate(RoutePath.Services)}
                className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Read More <span className="material-symbols-outlined text-base rtl:rotate-180">arrow_right_alt</span>
              </button>
            </div>
            {/* Service Card 2 */}
            <div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">apartment</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-3">Commercial Wiring</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Complete electrical systems for office buildings, malls, and commercial complexes.
              </p>
              <button 
                onClick={() => onNavigate(RoutePath.Services)}
                className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Read More <span className="material-symbols-outlined text-base rtl:rotate-180">arrow_right_alt</span>
              </button>
            </div>
            {/* Service Card 3 */}
            <div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">handyman</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-3">Maintenance</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Preventative and corrective maintenance programs to ensure zero downtime for your operations.
              </p>
              <button 
                onClick={() => onNavigate(RoutePath.Services)}
                className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Read More <span className="material-symbols-outlined text-base rtl:rotate-180">arrow_right_alt</span>
              </button>
            </div>
            {/* Service Card 4 */}
            <div className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">shopping_bag</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d131c] dark:text-white mb-3">Equipment Trading</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Supply of certified electrical components, from cables to transformers and switchgears.
              </p>
              <button 
                onClick={() => onNavigate(RoutePath.Services)}
                className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Read More <span className="material-symbols-outlined text-base rtl:rotate-180">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="section-padding bg-white dark:bg-[#101722]">
        <div className="layout-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Product Catalogue</span>
            <h2 className="text-3xl font-bold text-[#0d131c] dark:text-white mt-2 mb-4">High-Performance Electrical Equipment</h2>
            <p className="text-slate-500 dark:text-slate-400">We source and supply top-grade electrical products from world-renowned manufacturers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Cards using fixed links or onNavigate in real scenario. For visual consistency, we wrap in div here but would be clickable. */}
            <div className="group relative rounded-xl overflow-hidden cursor-pointer" onClick={() => onNavigate(RoutePath.Products)}>
              <div className="aspect-[4/5] w-full">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjFtIKPuIYcdNuLJK-q1-5nZWc7n6UHUkqPgqwdWfDSSfH_BCSsXD8J16pJH6mSgQC2p6Juja4Vx6x2UiqlaGaMIKFEugGi5sujqSR474vZnbucN91ZicM1Mn4mCChQf_CwmaYX0icoGzzJ6AiVlweLwvNzPDsvwARS5hf7WUmpA60nLMoSfu0llXoAwEoP01ZcKWGV7ztqYGPcq2h8Q3JmDbV8hMeYxcgLjyqE-vh8R20PwLWNfpJQHXDqTujav8q1-21WjUAWj5G")`}}
                >
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">Power Transformers</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Oil-immersed and dry-type transformers for high efficiency.</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="group relative rounded-xl overflow-hidden cursor-pointer" onClick={() => onNavigate(RoutePath.Products)}>
              <div className="aspect-[4/5] w-full">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuADv8LT7QWlAAvPdgEMMDwTQpCzKDB6iWzreNrHibAdSX_TUSAc_EXRpGSgbcxQy5ha2IGMolZARVYLPKTkGcVU2ENe8LqD4-vCd6jMetFFaFaVCv2eRINIPBDAcgC_LTEqHkBIvvJvw7kloB8FpkEw4E0RorRR3Puf0tN8ZCadkYIoT7xZbwPwvNWQGWFGNm_cBmf7ByOmIhgwnU-CTDVFLGjdPgL996tR8DJHbS73AMZNvTKqT20KrOSPqT4XEm7vrysUtiTqnb2B")`}}
                >
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">Switchgears</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">LV and MV switchgear panels designed for maximum safety.</p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="group relative rounded-xl overflow-hidden cursor-pointer" onClick={() => onNavigate(RoutePath.Products)}>
              <div className="aspect-[4/5] w-full">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvzreo7yJEaSY5hwLatzWUIBLbQk2INOUoscIbAlPG52LzUVHudFs8kk0Vo6vpJ02PJ1qWNdXMh6XX7QNd_-dQW8p2XW2qEfO8YCsMjFFQHZtsZjyZQXLY8guTupJYnGotAm1lFA7rDZt4naI8odd0w1GzQobYV8iA93eMblI6BRXIo6G9b81GQuT99YXu8HdELTriI1jlBT6XUJu2zOhDCtkQdC-wWuZWyRKAvh3F5-CS6W1bn43-EEhVHwMzif_AgJmH6PNJ2irD")`}}
                >
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">Cables & Wiring</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">High-grade cables for industrial and residential applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLsb-nqIfHClx7Toq6MS95vtMt8_34CBF3ysL6nay0ICgbzbAooZ9NfejqMu5W9LqKHHWEmuO0R3we3cb36MlfuKvPKu8gy7dzj4sprNmaTDkf0e44yy4oaEv85XCZRrgm3Ct2At3aGafHfhnAllBiE3tDtGySUnn0fRowjZH5sLOddHZmD086CRlCxTcVAb3rqfKk390VCCCpFqR_Rp73tqReJ6azJk2qVjmQogPIi5wcls4KeNSSdSSezqmW_PrRipG_Eeo5ETZE")`}}></div>
        <div className="layout-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose {COMPANY_NAME_EN}?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We combine technical expertise with a customer-centric approach to deliver unparalleled results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Prop 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4 text-primary border border-white/10">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Certified Quality</h4>
              <p className="text-slate-400 text-sm">Adhering to strict ISO quality management standards in every project.</p>
            </div>
            {/* Prop 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4 text-primary border border-white/10">
                <span className="material-symbols-outlined text-3xl">engineering</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Expert Team</h4>
              <p className="text-slate-400 text-sm">A dedicated workforce of highly skilled and licensed electrical engineers.</p>
            </div>
            {/* Prop 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4 text-primary border border-white/10">
                <span className="material-symbols-outlined text-3xl">health_and_safety</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Safety First</h4>
              <p className="text-slate-400 text-sm">Uncompromising commitment to occupational health and safety protocols.</p>
            </div>
            {/* Prop 4 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4 text-primary border border-white/10">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h4 className="text-lg font-bold mb-2">24/7 Support</h4>
              <p className="text-slate-400 text-sm">Round-the-clock technical support for critical infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="layout-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Contact our team today for a free consultation and quote. Let's power your success together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate(RoutePath.Contact)}
              className="h-12 px-8 rounded-lg bg-white text-primary text-base font-bold hover:bg-slate-50 transition-colors shadow-lg w-full sm:w-auto"
            >
              Contact Us Now
            </button>
            <button 
              onClick={() => onNavigate(RoutePath.Contact)}
              className="h-12 px-8 rounded-lg bg-primary border border-white text-white text-base font-bold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Request a Call Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};