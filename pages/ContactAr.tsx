import React, { useState } from 'react';
import { NavigateFunction } from '../types';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactArProps {
  onNavigate: NavigateFunction;
}

export const ContactAr: React.FC<ContactArProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setTimeout(() => {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden">
      <main className="flex-grow">
        <div className="layout-container py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center text-sm text-slate-500 dark:text-slate-400">
            <button onClick={() => onNavigate('/ar')} className="hover:text-primary transition-colors">الرئيسية</button>
            <span className="mx-2 rtl:rotate-180 material-symbols-outlined text-base">chevron_right</span>
            <span className="font-medium text-slate-900 dark:text-white">اتصل بنا</span>
          </nav>

          {/* Page Header */}
          <div className="mb-12 max-w-2xl">
            <h1 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">تواصل معنا</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              نحن هنا لمساعدتك في جميع احتياجاتك الكهربائية وتزويدك بأفضل الحلول الهندسية. لا تتردد في مراسلتنا أو زيارتنا.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                      <span className="material-symbols-outlined text-5xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0d131c] dark:text-white mb-2">تم إرسال الرسالة!</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md">
                      شكراً لتواصلك معنا. لقد تلقى فريقنا رسالتك وسنقوم بالرد عليك خلال 24 ساعة.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="mt-8 text-primary font-bold hover:underline"
                    >
                      إرسال رسالة أخرى
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">أرسل لنا رسالة</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Name */}
                        <label className="block">
                          <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">الاسم الكامل</span>
                          <div className="relative">
                            <input
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`block w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-300'} bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500`}
                              placeholder="أدخل اسمك الكريم"
                              type="text"
                            />
                            <span className="material-symbols-outlined absolute left-3 top-3.5 text-slate-400">person</span>
                          </div>
                          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                        </label>
                        {/* Email */}
                        <label className="block">
                          <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">البريد الإلكتروني</span>
                          <div className="relative">
                            <input
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-300'} bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500`}
                              placeholder="example@domain.com"
                              type="email"
                            />
                            <span className="material-symbols-outlined absolute left-3 top-3.5 text-slate-400">mail</span>
                          </div>
                          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </label>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Phone */}
                        <label className="block">
                          <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">رقم الجوال</span>
                          <div className="relative">
                            <input
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="block w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-right text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                              dir="ltr"
                              placeholder="+963 993 320 611"
                              type="tel"
                            />
                            <span className="material-symbols-outlined absolute left-3 top-3.5 text-slate-400">call</span>
                          </div>
                        </label>
                        {/* Subject */}
                        <label className="block">
                          <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">الموضوع</span>
                          <div className="relative">
                            <select
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="block w-full appearance-none rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            >
                              <option value="">اختر الموضوع</option>
                              <option value="General Inquiry">استفسار عام</option>
                              <option value="Quote Request">طلب تسعيرة</option>
                              <option value="Maintenance">صيانة ودعم</option>
                              <option value="Careers">فرص وظيفية</option>
                            </select>
                            <span className="material-symbols-outlined absolute left-3 top-3.5 pointer-events-none text-slate-400">expand_more</span>
                          </div>
                        </label>
                      </div>
                      {/* Message */}
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">الرسالة</span>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={`block w-full resize-none rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-300'} bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500`}
                          placeholder="كيف يمكننا مساعدتك؟"
                          rows={5}
                        ></textarea>
                        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                      </label>
                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="inline-flex h-12 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-primary/25"
                        >
                          <span>إرسال الرسالة</span>
                          <span className="material-symbols-outlined rtl:rotate-180 text-xl">send</span>
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-slate-100 p-6 dark:bg-slate-800/50 sm:p-8">
                <div>
                  <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">معلومات الاتصال</h3>
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm dark:bg-slate-800">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">زيارة مكتبنا الرئيسي</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          دمشق، سوريا
                        </p>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm dark:bg-slate-800">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">اتصل بنا</p>
                        <div className="mt-1 flex flex-col gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                          <div className="flex justify-between gap-4">
                            <span>الاستفسارات العامة:</span>
                            <span dir="ltr">+963 993 320 611</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>الدعم الفني:</span>
                            <span dir="ltr">+963 993 320 611</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm dark:bg-slate-800">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">البريد الإلكتروني</p>
                        <a className="mt-1 block text-sm font-medium text-primary hover:underline" href="mailto:info@alamer.sa">info@alamer.sa</a>
                        <a className="block text-sm font-medium text-primary hover:underline" href="mailto:support@alamer.sa">support@alamer.sa</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Working Hours Card */}
                <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
                  <h4 className="mb-4 flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    ساعات العمل
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-2 dark:border-slate-700">
                      <span className="text-slate-600 dark:text-slate-400">الأحد - الخميس</span>
                      <span className="font-medium text-slate-900 dark:text-white">09:00 ص - 05:00 م</span>
                    </li>
                    <li className="flex justify-between border-b border-dashed border-slate-200 pb-2 dark:border-slate-700">
                      <span className="text-slate-600 dark:text-slate-400">الجمعة</span>
                      <span className="font-medium text-slate-900 dark:text-white">مغلق</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span className="text-slate-600 dark:text-slate-400">السبت</span>
                      <span className="font-medium text-slate-900 dark:text-white">10:00 ص - 02:00 م</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 h-[400px] w-full bg-slate-200 dark:bg-slate-800 relative rounded-2xl overflow-hidden">
            <img 
              alt="Map showing location in Damascus city with streets and markers" 
              className="h-full w-full object-cover grayscale opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaILXTp99ZeUN1yjwDR4NotuG-uDLefFRGctj1UWaAEJZJqNxNSt6YbabxpcqclnDWpHSbKFj3EyIOkdp-V7lp0uLA51ipfd_KMcBDvxxXCmIrBYxj9ytHWAyZK-2bwFxqQyIJ7azLlxb1tqX6Vwa_SN_OsmmlRB4Cwqsum3NRtHv9J06Ayq-yNs9TliS7iNotx5YtJ0alhmRFPPqw87m8yDtQwVoAbANU_BgVik15Jqewg28GT7WBNBtfC10utGxPyJBu6QMi8chb"
            />
            {/* Map Overlay Card */}
            <div className="absolute bottom-8 right-8 hidden md:block rounded-lg bg-white p-4 shadow-lg dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-lg">
                  <img 
                    alt="Modern corporate building exterior" 
                    className="h-full w-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQiSAs7XAyCzTs_heBO4OYGDrau2muXtO578TyWwlVYWyenZSeEqVPMlZsyrd0dGmncNiTq5EtjYmtXlVtMV4YsUL72-XvbeVjbV0rNI9ehLFqfSbsspoBRmAJeM0SsBxkbahUugHdIq04vnGs8CGDkaSu9KE9pcD9BPv59yQT9LNou02_X1mHkblpyYWsprqxJsb7b38DPOHkUyyuLbE2S3RJOLA7ywBqfHZ-FTp-xko_zD-z2aRB8rouEdI6uwwBV7edPpB4_hT"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">مقر الشركة</p>
                  <button className="mt-1 text-xs font-medium text-primary hover:underline">عرض على الخريطة</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};