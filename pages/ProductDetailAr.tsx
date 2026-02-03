import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { NavigateFunction } from '../types';
import { updateMeta } from '../utils/seo';
import { COMPANY_NAME_AR } from '../constants/company';

interface ProductDetailArProps {
  productId: string;
  onNavigate: NavigateFunction;
}

export const ProductDetailAr: React.FC<ProductDetailArProps> = ({ productId, onNavigate }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === productId);
    setProduct(foundProduct || null);

    if (foundProduct) {
      const related = PRODUCTS.filter(p => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0, 4);
      if (related.length < 4) {
        const others = PRODUCTS.filter(p => p.category !== foundProduct.category).slice(0, 4 - related.length);
        related.push(...others);
      }
      setRelatedProducts(related);

      const title = `${foundProduct.nameAr || foundProduct.name} - ${COMPANY_NAME_AR}`;
      updateMeta(title, foundProduct.shortDescriptionAr || foundProduct.shortDescription);
    }
    
    window.scrollTo(0, 0);
  }, [productId]);

  const handleNavigate = (path: string) => {
    onNavigate(path);
  };

  const handleProductClick = (id: string) => {
    onNavigate(`/ar/products/${id}`);
  };

  if (!product) {
    return (
      <div className="layout-container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">المنتج غير موجود</h2>
        <p className="mb-6 text-slate-600 dark:text-slate-400">المنتج الذي تبحث عنه غير موجود أو تمت إزالته.</p>
        <button 
          onClick={() => handleNavigate('/ar/products')}
          className="text-primary font-bold hover:underline"
        >
          العودة للمنتجات
        </button>
      </div>
    );
  }

  // Get Arabic features or fallback to English features
  const featuresList = product.featuresAr || product.features;

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden">
      <main className="flex-grow layout-container py-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex mb-6 text-sm text-slate-500 dark:text-slate-400">
          <ol className="inline-flex items-center space-x-1 space-x-reverse md:space-x-2">
            <li className="inline-flex items-center">
              <button 
                onClick={() => handleNavigate('/ar')}
                className="inline-flex items-center text-slate-500 hover:text-primary dark:hover:text-white gap-1"
              >
                <span className="material-symbols-outlined text-[18px] ml-1">home</span>
                الرئيسية
              </button>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-300 mx-1 text-[18px] rotate-180">chevron_right</span>
                <button 
                  onClick={() => handleNavigate('/ar/products')}
                  className="mr-1 text-slate-500 hover:text-primary dark:hover:text-white"
                >
                  المنتجات
                </button>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-300 mx-1 text-[18px] rotate-180">chevron_right</span>
                <span className="mr-1 font-medium text-slate-900 dark:text-white">{product.nameAr || product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          {/* Right Column: Product Gallery (Takes up 6/12 on large screens) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden group shadow-sm flex items-center justify-center p-8">
              <img 
                alt={product.nameAr || product.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                src={product.image}
              />
              
              {/* Badges Container */}
              <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 items-start">
                {product.inStock && (
                  <div className="inline-flex items-center w-fit bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-200 dark:border-green-800 shadow-sm">
                    متوفر في المخزون
                  </div>
                )}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              <button className="aspect-square rounded-lg border-2 border-primary overflow-hidden relative bg-white dark:bg-slate-800 p-2">
                <img className="w-full h-full object-contain" src={product.image} alt="Thumbnail 1"/>
              </button>
              <button className="aspect-square rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative hover:opacity-80 transition-opacity bg-white dark:bg-slate-800 p-2">
                <img className="w-full h-full object-contain opacity-50" src={product.image} alt="Thumbnail 2"/>
              </button>
              <button className="aspect-square rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative hover:opacity-80 transition-opacity bg-white dark:bg-slate-800 p-2">
                <img className="w-full h-full object-contain opacity-50" src={product.image} alt="Thumbnail 3"/>
              </button>
              <button className="aspect-square rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden relative hover:opacity-80 transition-opacity bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-3xl">play_circle</span>
              </button>
            </div>
          </div>

          {/* Left Column: Product Info (Takes up 6/12) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col h-full">
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-primary font-bold text-sm tracking-wide uppercase">{COMPANY_NAME_AR}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">{product.categoryAr || product.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                {product.nameAr || product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  رقم الصنف: AE-{product.id.padStart(4, '0')}
                </div>
                <div className="flex text-yellow-400 text-sm">
                  <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                  <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                  <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                  <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                  <span className="material-symbols-outlined text-[18px] fill-current text-slate-300 dark:text-slate-600">star</span>
                </div>
                <span className="text-sm text-slate-500">(٢٤ تقييم)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                {product.shortDescriptionAr || product.shortDescription}
              </p>
              
              {/* Key Specs Preview */}
              {product.specsAr && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(product.specsAr).slice(0, 4).map(([key, value], idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-md text-primary">
                        <span className="material-symbols-outlined">
                          {idx === 0 ? 'bolt' : idx === 1 ? 'layers' : idx === 2 ? 'thermostat' : 'verified'}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{key}</p>
                        <p className="font-bold text-slate-900 dark:text-white text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                <button 
                  onClick={() => handleNavigate('/ar/contact')}
                  className="flex-1 bg-primary hover:bg-blue-700 text-white h-12 rounded-lg font-bold shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  <span className="material-symbols-outlined">request_quote</span>
                  اطلب عرض سعر
                </button>
                <button className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 h-12 rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
                  <span className="material-symbols-outlined">download</span>
                  تحميل المواصفات
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content Tabs & Info */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Technical Tabs Section */}
          <div className="lg:col-span-8">
            <div className="border-b border-slate-200 dark:border-slate-700 mb-6">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8 space-x-reverse overflow-x-auto">
                <a className="border-primary text-primary whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-[20px]">description</span>
                  نظرة عامة
                </a>
                <a className="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-[20px]">settings</span>
                  المواصفات الفنية
                </a>
                <a className="border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-[20px]">folder_open</span>
                  مستندات وتحميلات
                </a>
              </nav>
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">وصف المنتج التفصيلي</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {product.longDescriptionAr || product.longDescription || product.shortDescriptionAr || product.shortDescription}
              </p>
              
              <h4 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">المميزات الرئيسية:</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 mb-8 marker:text-primary">
                {featuresList?.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                )) || <li>لا توجد ميزات إضافية</li>}
              </ul>

              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">جدول المواصفات التقنية</h3>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                <table className="min-w-full divide-y divide-slate-300 dark:divide-slate-700">
                  <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                    {product.specsAr ? Object.entries(product.specsAr).map(([key, value], idx) => (
                      <tr key={key}>
                        <td className="py-4 pl-4 pr-6 text-sm font-medium text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50 w-1/3">{key}</td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{value}</td>
                      </tr>
                    )) : (
                      <tr><td colSpan={2} className="p-4 text-center">لا توجد مواصفات متاحة</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Form: Request Quote */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">هل لديك مشروع كبير؟</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">املأ النموذج أدناه للحصول على عرض سعر مخصص لهذا المنتج، وسيقوم فريق المبيعات بالتواصل معك خلال 24 ساعة.</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="name">الاسم الكامل</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 py-2.5 pr-10 pl-3 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="name" placeholder="محمد علي" type="text"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="company">اسم الشركة</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">business</span>
                    </div>
                    <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 py-2.5 pr-10 pl-3 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="company" placeholder="مؤسسة العامر" type="text"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">البريد الإلكتروني</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 py-2.5 pr-10 pl-3 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="email" placeholder="name@company.com" type="email"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="phone">رقم الجوال</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <input className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 py-2.5 pr-10 pl-3 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm text-left" dir="ltr" id="phone" placeholder="+963 993 320 611" type="tel"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="message">تفاصيل إضافية</label>
                  <textarea className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 py-2 px-3 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="message" placeholder="الكمية المطلوبة، موقع المشروع..." rows={3}></textarea>
                </div>
                <button 
                  onClick={(e) => e.preventDefault()}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  إرسال الطلب
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">
                  بإرسال هذا النموذج، أنت توافق على <a className="underline hover:text-primary" href="#">شروط الخدمة</a> و <a className="underline hover:text-primary" href="#">سياسة الخصوصية</a>.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#0d131c] dark:text-white text-2xl font-bold">منتجات ذات صلة</h2>
            <button 
              onClick={() => handleNavigate('/ar/products')}
              className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
            >
              عرض الكل
              <span className="material-symbols-outlined text-[18px] rtl:rotate-180">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div 
                key={p.id} 
                className="group flex flex-col gap-3 pb-3 bg-white dark:bg-[#1a2636] rounded-lg p-3 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleProductClick(p.id)}
              >
                <div className="w-full aspect-square rounded-lg bg-gray-100 relative overflow-hidden flex items-center justify-center p-2">
                  <img 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                    src={p.image} 
                    alt={p.nameAr || p.name}
                  />
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <span className="text-xs font-semibold text-primary uppercase">{p.categoryAr || p.category}</span>
                  <h3 className="text-[#0d131c] dark:text-white font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">{p.nameAr || p.name}</h3>
                  <p className="text-[#4b6c9b] text-xs line-clamp-1">{p.shortDescriptionAr || p.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};