import React, { useState } from 'react';

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

export const Contact: React.FC = () => {
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
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
    // Clear error when user starts typing
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
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="@container">
          <div 
            className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat min-h-[320px] items-center justify-center p-8 relative" 
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 34, 0.8) 0%, rgba(15, 23, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvzYe95aGvon1A7Whk0vk7C4nDkqRqKnUbhICoiNf-tql9PJhPD7HxR_63tzU-e4kvWCesTAgTKX1XIHCR1nCyAZMx9ZwUHcr7F3pxh80eWLPt7i3ur4Mvx-dZ1mJxiSkzW9IDXYJVVPMQ1dHN1YYIjV2B9ZWJYicpjSi1SqrGuWsc6u_Axy5xF4PPl6IbGdXjP5Q_lLxI-7ud-NAB8sEL0GqAYJOwov067qC8oYQitNdRbvC6fus_THfuNaXXTadrv94g3L1MoS3-")`
            }}
          >
            <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                Contact Us
              </h1>
              <h2 className="text-blue-100 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                We're here to help with your electrical engineering needs. Reach out to us for quotes, support, or general inquiries.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-background-light dark:bg-background-dark py-12 md:py-20">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information Side */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">Get in Touch</span>
                <h2 className="text-3xl font-bold text-[#0d131c] dark:text-white leading-tight">
                  Let's Discuss Your Next Project
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  Whether you need a comprehensive power solution or a specific component, our team of engineers is ready to assist you.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Info Card 1 */}
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#1a2636] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[#0d131c] dark:text-white text-lg">Visit Our Head Office</h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      Damascus, Syria
                    </p>
                  </div>
                </div>

                {/* Info Card 2 */}
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#1a2636] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[#0d131c] dark:text-white text-lg">Call Us</h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      General Inquiries: +963 993 320 611<br />
                      Technical Support: +963 993 320 611
                    </p>
                  </div>
                </div>

                {/* Info Card 3 */}
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#1a2636] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[#0d131c] dark:text-white text-lg">Email Us</h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      Sales: sales@alamer.sa<br />
                      Info: info@alamer.sa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white dark:bg-[#1a2636] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8 md:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0d131c] dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-md">
                    Thank you for reaching out. Our team has received your message and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-8 text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-[#0d131c] dark:text-white">Send a Message</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Fields marked with * are required.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-[#0d131c] dark:text-white">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white`}
                        placeholder="Your Full Name"
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-[#0d131c] dark:text-white">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                        placeholder="+963 ..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[#0d131c] dark:text-white">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-[#0d131c] dark:text-white">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white`}
                    >
                      <option value="">Select a topic</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Quote">Product Quote</option>
                      <option value="Service Request">Service Request</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Careers">Careers</option>
                    </select>
                    {errors.subject && <span className="text-red-500 text-xs mt-1">{errors.subject}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-[#0d131c] dark:text-white">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none dark:text-white`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit"
                    className="h-12 w-full rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-base transition-colors shadow-lg shadow-primary/20 mt-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
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
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Headquarters</p>
                  <button className="mt-1 text-xs font-medium text-primary hover:underline">View on Map</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};