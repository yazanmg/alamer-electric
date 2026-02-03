import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { NavigateFunction } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { updateMeta } from '../utils/seo';
import { COMPANY_NAME_AR, COMPANY_NAME_EN } from '../constants/company';

interface ProductDetailProps {
  productId: string;
  onNavigate: NavigateFunction;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === productId);
    setProduct(foundProduct || null);

    if (foundProduct) {
      // Find related products (same category, excluding current)
      const related = PRODUCTS.filter(p => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0, 4);
      // If not enough related products, fill with random ones
      if (related.length < 4) {
        const others = PRODUCTS.filter(p => p.category !== foundProduct.category).slice(0, 4 - related.length);
        related.push(...others);
      }
      setRelatedProducts(related);

      // SEO Update
      const titleSuffix = language === 'ar' ? ` - ${COMPANY_NAME_AR}` : ` - ${COMPANY_NAME_EN}`;
      const title = `${foundProduct.name}${titleSuffix}`;
      updateMeta(title, foundProduct.shortDescription);
    }
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [productId, language]);

  const handleNavigate = (path: string) => {
    onNavigate(language === 'ar' ? `/ar${path}` : path);
  };

  const handleProductClick = (id: string) => {
    handleNavigate(`/products/${id}`);
  };

  if (!product) {
    return (
      <div className="layout-container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Product Not Found</h2>
        <p className="mb-6 text-slate-600 dark:text-slate-400">The product you are looking for does not exist or has been removed.</p>
        <button 
          onClick={() => handleNavigate('/products')}
          className="text-primary font-bold hover:underline"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="layout-container w-full pb-20">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-6 items-center">
        <button 
          onClick={() => handleNavigate('/')} 
          className="text-[#4b6c9b] hover:text-primary transition-colors text-sm font-medium leading-normal flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
        </button>
        <span className="material-symbols-outlined text-[#4b6c9b] text-[16px] rtl:rotate-180">chevron_right</span>
        <button 
          onClick={() => handleNavigate('/products')}
          className="text-[#4b6c9b] hover:text-primary transition-colors text-sm font-medium leading-normal"
        >
          Products
        </button>
        <span className="material-symbols-outlined text-[#4b6c9b] text-[16px] rtl:rotate-180">chevron_right</span>
        <span className="text-[#4b6c9b] text-sm font-medium leading-normal">{product.category}</span>
        <span className="material-symbols-outlined text-[#4b6c9b] text-[16px] rtl:rotate-180">chevron_right</span>
        <span className="text-[#0d131c] dark:text-white text-sm font-medium leading-normal">{product.name}</span>
      </div>

      {/* Product Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        {/* Left: Product Gallery */}
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-[4/3] bg-white dark:bg-[#1a2636] rounded-xl border border-[#e7ecf3] dark:border-[#2d3b4e] p-8 flex items-center justify-center relative overflow-hidden group">
            {/* Main Image */}
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain"
            />
            
            {/* Badges Container */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
              {product.inStock && (
                <span className="inline-flex items-center w-fit bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  In Stock
                </span>
              )}
              {product.specialOrder && (
                <span className="inline-flex items-center w-fit bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Special Order
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <button className="aspect-square rounded-lg border-2 border-primary bg-white dark:bg-[#1a2636] p-2 cursor-pointer overflow-hidden">
               <img src={product.image} className="w-full h-full object-cover rounded" alt="Thumb 1"/>
            </button>
            <button className="aspect-square rounded-lg border border-[#e7ecf3] hover:border-primary dark:border-[#2d3b4e] bg-white dark:bg-[#1a2636] p-2 cursor-pointer transition-colors overflow-hidden">
               <img src={product.image} className="w-full h-full object-cover rounded opacity-50" alt="Thumb 2"/>
            </button>
            <button className="aspect-square rounded-lg border border-[#e7ecf3] hover:border-primary dark:border-[#2d3b4e] bg-white dark:bg-[#1a2636] p-2 cursor-pointer transition-colors overflow-hidden">
               <img src={product.image} className="w-full h-full object-cover rounded opacity-50" alt="Thumb 3"/>
            </button>
            <button className="aspect-square rounded-lg border border-[#e7ecf3] hover:border-primary dark:border-[#2d3b4e] bg-white dark:bg-[#1a2636] flex items-center justify-center cursor-pointer transition-colors text-[#4b6c9b]">
              <span className="material-symbols-outlined text-[32px]">play_circle</span>
            </button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[#0d131c] dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-2">
              {product.name}
            </h1>
            {/* MetaText */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#4b6c9b] text-sm font-medium">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">tag</span> SKU: AE-{product.id.padStart(4, '0')}</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">verified</span> Warranty: 2 Years</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">factory</span> Manufacturer: {COMPANY_NAME_EN}</span>
            </div>
          </div>
          <div className="bg-white dark:bg-[#1a2636] p-6 rounded-xl border border-[#e7ecf3] dark:border-[#2d3b4e] shadow-sm">
            <p className="text-[#0d131c] dark:text-gray-300 text-base font-normal leading-relaxed mb-6">
              {product.shortDescription} {product.longDescription}
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <h3 className="text-sm font-bold text-[#0d131c] dark:text-white uppercase tracking-wider">Key Features</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 text-[20px] mt-0.5">check_circle</span>
                    <span className="text-[#4b6c9b] dark:text-gray-400 text-sm">{feature}</span>
                  </li>
                )) || (
                   <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 text-[20px] mt-0.5">check_circle</span>
                    <span className="text-[#4b6c9b] dark:text-gray-400 text-sm">High reliability and performance</span>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleNavigate('/contact')}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-blue-700 text-white text-base font-bold transition-all shadow-md shadow-blue-500/20"
              >
                <span className="material-symbols-outlined">request_quote</span>
                Request Quote
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-white dark:bg-[#2d3b4e] border border-[#e7ecf3] dark:border-[#38485e] text-[#0d131c] dark:text-white hover:bg-gray-50 dark:hover:bg-[#38485e] text-base font-bold transition-all">
                <span className="material-symbols-outlined">download</span>
                Datasheet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed/Stacked Info Section */}
      <div className="flex flex-col gap-12">
        {/* Tabs Header (Visual Only) */}
        <div className="border-b border-[#e7ecf3] dark:border-[#2d3b4e]">
          <div className="flex gap-8 overflow-x-auto">
            <button className="pb-4 border-b-2 border-primary text-primary font-bold text-sm px-1 whitespace-nowrap">Technical Specifications</button>
            <button className="pb-4 border-b-2 border-transparent text-[#4b6c9b] hover:text-[#0d131c] dark:hover:text-white font-medium text-sm px-1 whitespace-nowrap transition-colors">Product Description</button>
            <button className="pb-4 border-b-2 border-transparent text-[#4b6c9b] hover:text-[#0d131c] dark:hover:text-white font-medium text-sm px-1 whitespace-nowrap transition-colors">Applications</button>
            <button className="pb-4 border-b-2 border-transparent text-[#4b6c9b] hover:text-[#0d131c] dark:hover:text-white font-medium text-sm px-1 whitespace-nowrap transition-colors">Downloads</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Specs) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Specs Table */}
            <div className="bg-white dark:bg-[#1a2636] rounded-xl border border-[#e7ecf3] dark:border-[#2d3b4e] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#e7ecf3] dark:border-[#2d3b4e] bg-gray-50 dark:bg-[#16202e]">
                <h3 className="text-lg font-bold text-[#0d131c] dark:text-white">Technical Data</h3>
              </div>
              <table className="w-full text-sm text-start">
                <tbody className="divide-y divide-[#e7ecf3] dark:divide-[#2d3b4e]">
                  {product.specs && Object.entries(product.specs).map(([key, value], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? "hover:bg-gray-50 dark:hover:bg-[#1f2d40]" : "bg-gray-50/50 dark:bg-[#1d2a3b] hover:bg-gray-50 dark:hover:bg-[#1f2d40]"}>
                      <td className="px-6 py-4 font-medium text-[#4b6c9b] w-1/3">{key}</td>
                      <td className="px-6 py-4 text-[#0d131c] dark:text-gray-200">{value}</td>
                    </tr>
                  ))}
                  {!product.specs && (
                    <tr className="hover:bg-gray-50 dark:hover:bg-[#1f2d40]">
                      <td className="px-6 py-4 font-medium text-[#4b6c9b]" colSpan={2}>No technical specifications available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Description & Applications Text */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#0d131c] dark:text-white">Product Description</h3>
              <p className="text-[#4b6c9b] dark:text-gray-400 leading-relaxed">
                {product.longDescription || product.shortDescription}
              </p>
              <p className="text-[#4b6c9b] dark:text-gray-400 leading-relaxed">
                Designed with operator safety in mind, this product features comprehensive mechanisms to prevent maloperation. It integrates seamlessly with existing industrial systems and is built to withstand harsh operating conditions in the region.
              </p>
            </div>
          </div>

          {/* Sidebar (Downloads & Help) */}
          <div className="flex flex-col gap-6">
            {/* Download Card */}
            <div className="bg-white dark:bg-[#1a2636] p-6 rounded-xl border border-[#e7ecf3] dark:border-[#2d3b4e] shadow-sm">
              <h3 className="text-lg font-bold text-[#0d131c] dark:text-white mb-4">Downloads</h3>
              <div className="flex flex-col gap-3">
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#2d3b4e] transition-colors group" href="#">
                  <div className="size-10 rounded bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0d131c] dark:text-white">Technical Datasheet</span>
                    <span className="text-xs text-[#4b6c9b]">PDF • 2.4 MB</span>
                  </div>
                  <span className="material-symbols-outlined ms-auto text-[#4b6c9b]">download</span>
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#2d3b4e] transition-colors group" href="#">
                  <div className="size-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <span className="material-symbols-outlined">menu_book</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0d131c] dark:text-white">User Manual</span>
                    <span className="text-xs text-[#4b6c9b]">PDF • 5.1 MB</span>
                  </div>
                  <span className="material-symbols-outlined ms-auto text-[#4b6c9b]">download</span>
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#2d3b4e] transition-colors group" href="#">
                  <div className="size-10 rounded bg-gray-100 text-gray-600 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <span className="material-symbols-outlined">architecture</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0d131c] dark:text-white">CAD Drawings (DWG)</span>
                    <span className="text-xs text-[#4b6c9b]">ZIP • 12 MB</span>
                  </div>
                  <span className="material-symbols-outlined ms-auto text-[#4b6c9b]">download</span>
                </a>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20">
              <h3 className="text-lg font-bold text-[#0d131c] dark:text-white mb-2">Need Engineering Support?</h3>
              <p className="text-sm text-[#4b6c9b] dark:text-gray-300 mb-4">Our team of engineers can help you select the right configuration for your project.</p>
              <button 
                onClick={() => handleNavigate('/contact')}
                className="text-primary font-bold text-sm flex items-center gap-2 hover:underline"
              >
                Contact Support
                <span className="material-symbols-outlined text-[16px] rtl:rotate-180">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-20 pt-10 border-t border-[#e7ecf3] dark:border-[#2d3b4e]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#0d131c] dark:text-white text-2xl font-bold">Related Products</h2>
          <button 
            onClick={() => handleNavigate('/products')}
            className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
          >
            View All
            <span className="material-symbols-outlined text-[18px] rtl:rotate-180">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <div 
              key={p.id} 
              className="group flex flex-col gap-3 pb-3 bg-white dark:bg-[#1a2636] rounded-lg p-3 border border-transparent hover:border-[#e7ecf3] dark:hover:border-[#2d3b4e] hover:shadow-lg transition-all cursor-pointer"
              onClick={() => handleProductClick(p.id)}
            >
              <div className="w-full aspect-square rounded-lg bg-gray-100 relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={p.image} 
                  alt={p.name}
                />
              </div>
              <div className="flex flex-col gap-1 px-1">
                <span className="text-xs font-semibold text-primary uppercase">{p.category}</span>
                <h3 className="text-[#0d131c] dark:text-white font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">{p.name}</h3>
                <p className="text--[#4b6c9b] text-xs line-clamp-1">{p.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};