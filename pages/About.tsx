import React from 'react';
import { COMPANY_NAME_EN } from '../constants/company';

export const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        <div 
          className="w-full bg-cover bg-center bg-no-repeat min-h-[480px] flex flex-col items-center justify-center p-6 text-center" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxagyLvGWO3NArr6ot_mZS-Bn_mmwDhtgqUgEMwWnCK7Ftt57I99Z8Vr7G5mUyANCl8nVyLZZqHBhLNZZRi4aFQ2746yMh4nWt-XKyrYSsyL22qc-1vkgxvYw4NJoxOIulfaeuPukbi38TbVKjJAhK1GasL9spxxev6qHtYZLs8D0a1MeDkDpyx5ojk9DjGwwOs5--3A2F1vbmu16FAYH8-vL0kCqyXWWPQFKGfrGp8tkGw8jMnRp0l15n6KHxQ2HL88ZwoTRrIdG6")`
          }}
        >
          <div className="max-w-[800px] flex flex-col gap-4 animate-fade-in-up">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
              Powering Syria's Future
            </h1>
            <h2 className="text-gray-200 text-lg md:text-xl font-normal max-w-2xl mx-auto">
              Leading the way in reliable electrical infrastructure and trading solutions across the country.
            </h2>
            <div className="mt-4">
              <button className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full -mt-10 z-10 px-4 relative">
        <div className="max-w-[960px] mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8">
          <div className="flex flex-wrap gap-8 justify-around text-center md:text-start">
            <div className="flex flex-col gap-1">
              <p className="text-primary text-4xl font-black">30+</p>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
            <div className="flex flex-col gap-1">
              <p className="text-primary text-4xl font-black">500+</p>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Projects Completed</p>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
            <div className="flex flex-col gap-1">
              <p className="text-primary text-4xl font-black">50+</p>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Certified Engineers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding layout-container w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-xl group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" 
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuApzl0RJ9R_JNTW9VTEZSbuWuseAZGzTd7uV6U65mxCqRoRbaA4Fgb0eKtTpyIxiIouaOvA6tKr_RiSjLE4CXaombEXzAOUd1ONV4sGfMnBEfWD03eG7B6qT8NT8TKTf1jhIMBRVtku5e5z44DnT86oZyKYlbXRI0Q4N-jG05g7rnPRZPo6G96HjSTt1AsKQwrzVb2ORKkaLTarAgzAlZlSWdOyADXVQhcgDROZOt29NSyqn4QeigHsX_i8v-B5YICu3Qsf7YrkaLjh")`}}
              >
              </div>
            </div>
          </div>
          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">About {COMPANY_NAME_EN}</span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight dark:text-white">
                Who We Are
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              At {COMPANY_NAME_EN}, we’re transforming Syria’s energy landscape with innovative electrical solutions. Combining advanced technology with field expertise, we deliver safe and efficient power solutions tailored to the country’s needs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Our team of certified engineers and technicians brings unparalleled expertise to complex infrastructure projects, ensuring that power flows reliably to industries, homes, and businesses across the region.
            </p>
            <div className="pt-2">
              <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                Read Our History
                <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="section-padding bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="layout-container w-full flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight dark:text-white">
              Our Strategic Pillars
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Driven by purpose and defined by values. We operate with a clear roadmap for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="flex flex-col gap-4 p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-colors">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">target</span>
              </div>
              <h3 className="text-xl font-bold dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide reliable, innovative electrical solutions that power progress and ensure safety for all our clients across the country.
              </p>
            </div>
            {/* Vision Card */}
            <div className="flex flex-col gap-4 p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-colors">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h3 className="text-xl font-bold dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading partner in the energy infrastructure sector, setting the benchmark for quality and sustainability.
              </p>
            </div>
            {/* Values Card */}
            <div className="flex flex-col gap-4 p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-colors">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-xl font-bold dark:text-white">Core Values</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Integrity in our dealings, Safety in our operations, Innovation in our solutions, and Quality in every result we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Trust Section */}
      <section className="section-padding w-full overflow-hidden">
        <div className="layout-container flex flex-col items-center gap-10">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            <div className="flex items-center gap-2 text-2xl font-black text-gray-400">
              <span className="material-symbols-outlined">bolt</span> VOLTCorp
            </div>
            <div className="flex items-center gap-2 text-2xl font-black text-gray-400">
              <span className="material-symbols-outlined">factory</span> INDUS
            </div>
            <div className="flex items-center gap-2 text-2xl font-black text-gray-400">
              <span className="material-symbols-outlined">apartment</span> BUILDCO
            </div>
            <div className="flex items-center gap-2 text-2xl font-black text-gray-400">
              <span className="material-symbols-outlined">solar_power</span> SUNPWR
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-4">
        <div className="layout-container bg-primary rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Ready to Start Your Project?</h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              Partner with {COMPANY_NAME_EN} for world-class electrical solutions tailored to your specific needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <button className="h-12 px-8 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Get a Quote
              </button>
              <button className="h-12 px-8 rounded-lg bg-transparent border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};