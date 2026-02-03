import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { NavigateFunction } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { usePreferences } from '../contexts/PreferencesContext';
import { sortProducts } from '../utils/sortProducts';

interface ProductsArProps {
  onNavigate: NavigateFunction;
}

export const ProductsAr: React.FC<ProductsArProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const { productSortBy, setProductSortBy, viewMode, setViewMode } = usePreferences();
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Calculate default price range
  const { minPrice, maxPrice } = useMemo(() => {
    const prices = PRODUCTS.map(p => p.price).filter(p => p !== undefined) as number[];
    return {
      minPrice: prices.length ? Math.min(...prices) : 0,
      maxPrice: prices.length ? Math.max(...prices) : 10000
    };
  }, []);

  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Get unique categories dynamically (Arabic)
  const availableCategories = useMemo(() => {
    const cats = new Set(PRODUCTS.map(p => p.categoryAr || p.category));
    return Array.from(cats).sort();
  }, []);

  // Get unique brands dynamically
  const availableBrands = useMemo(() => {
    const brands = new Set(PRODUCTS.map(p => p.brand).filter(Boolean) as string[]);
    return Array.from(brands).sort();
  }, []);

  // Helper to get Arabic brand name for display
  const getBrandLabel = (brandKey: string) => {
    const product = PRODUCTS.find(p => p.brand === brandKey);
    return product?.brandAr || brandKey;
  };

  // Trigger animation when sort, view, search, or filters change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [productSortBy, searchQuery, viewMode, selectedCategories, selectedBrands, priceRange]);

  const handleProductClick = (id: string) => {
    onNavigate(`/ar/products/${id}`);
  };

  const handleHomeClick = () => {
    onNavigate('/ar');
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const handlePriceChange = (index: 0 | 1, value: string) => {
    const val = parseInt(value) || 0;
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = val;
      return newRange;
    });
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const val = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = val;
      if (index === 0 && val > newRange[1]) newRange[0] = newRange[1];
      if (index === 1 && val < newRange[0]) newRange[1] = newRange[0];
      return newRange;
    });
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([minPrice, maxPrice]);
    setSearchQuery('');
    setProductSortBy('default');
    // Optional: reset view mode
    // setViewMode('grid');
  };

  const hasActiveFilters = useMemo(() => {
    return (
      searchQuery !== '' ||
      selectedCategories.length > 0 ||
      selectedBrands.length > 0 ||
      priceRange[0] !== minPrice ||
      priceRange[1] !== maxPrice ||
      productSortBy !== 'default'
    );
  }, [searchQuery, selectedCategories, selectedBrands, priceRange, minPrice, maxPrice, productSortBy]);

  const filteredAndSortedProducts = useMemo(() => {
    let items = [...PRODUCTS];

    // 1. Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => {
        const name = (p.nameAr || p.name).toLowerCase();
        const desc = (p.shortDescriptionAr || p.shortDescription).toLowerCase();
        const cat = (p.categoryAr || p.category).toLowerCase();
        const brand = (p.brandAr || p.brand || '').toLowerCase();
        return name.includes(q) || desc.includes(q) || cat.includes(q) || brand.includes(q);
      });
    }

    // 2. Categories
    if (selectedCategories.length > 0) {
      items = items.filter(p => selectedCategories.includes(p.categoryAr || p.category));
    }

    // 3. Brands
    if (selectedBrands.length > 0) {
      items = items.filter(p => p.brand && selectedBrands.includes(p.brand));
    }

    // 4. Price
    const isPriceFilterActive = priceRange[0] > minPrice || priceRange[1] < maxPrice;
    if (isPriceFilterActive) {
      items = items.filter(p => {
        if (p.price === undefined) return false;
        return p.price >= priceRange[0] && p.price <= priceRange[1];
      });
    }

    // 5. Sort
    return sortProducts(items, productSortBy, 'ar');
  }, [productSortBy, searchQuery, selectedCategories, selectedBrands, priceRange, minPrice, maxPrice]);

  const clearSearch = () => setSearchQuery('');

  return (
    <div className="layout-container py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
        <button onClick={handleHomeClick} className="hover:text-primary transition-colors">الرئيسية</button>
        <span className="material-symbols-outlined !text-sm rotate-180">chevron_right</span>
        <span className="font-medium text-slate-900 dark:text-slate-200">المنتجات</span>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">المنتجات</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">تصفح أحدث المعدات والحلول الكهربائية لمشاريعك التجارية والسكنية بأفضل الأسعار.</p>
        </div>
        {/* Search Bar */}
        <div className="w-full md:w-auto md:min-w-[320px]">
          <div className="relative">
            <input 
              className="w-full h-11 pr-10 pl-4 rounded-lg bg-slate-100 dark:bg-slate-800 border-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary" 
              placeholder="ابحث عن منتج، موديل، أو ماركة..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery ? (
              <button 
                onClick={clearSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            ) : (
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            )}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters (Right Side) */}
        <aside className="lg:col-span-1 space-y-8">
          
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0d131c] dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined">tune</span> الفلاتر
            </h2>
            {hasActiveFilters && (
              <button 
                onClick={resetFilters} 
                className="text-sm font-bold text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors"
              >
                مسح الكل
              </button>
            )}
          </div>

          {/* Filter Group: Categories */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
              التصنيفات
              {selectedCategories.length > 0 && (
                <button onClick={() => setSelectedCategories([])} className="text-primary text-xs font-medium hover:underline">
                  مسح
                </button>
              )}
              {selectedCategories.length === 0 && (
                <span className="material-symbols-outlined text-slate-400 !text-xl cursor-pointer">expand_less</span>
              )}
            </h3>
            <div className="space-y-2">
              {availableCategories.map((cat, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group select-none">
                  <input 
                    className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4" 
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span className={`text-sm transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300 group-hover:text-primary'}`}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter Group: Price */}
          <div className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-6">
            <div className="flex justify-between items-center">
               <h3 className="font-bold text-slate-900 dark:text-white">نطاق السعر</h3>
               {(priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && (
                 <button 
                  onClick={() => setPriceRange([minPrice, maxPrice])}
                  className="text-primary text-xs font-medium hover:underline"
                >
                  إعادة تعيين
                </button>
               )}
            </div>
            
             {/* Slider */}
            <div className="relative h-10 mb-4">
               {/* Tracks */}
               <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full -translate-y-1/2 pointer-events-none"></div>
               {/* Active Track */}
               <div 
                  className="absolute top-1/2 h-1 bg-primary rounded-full -translate-y-1/2 pointer-events-none"
                  style={{
                    right: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                    left: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`
                  }}
               ></div>
               
               {/* Min Slider */}
               <input 
                 type="range" 
                 min={minPrice} 
                 max={maxPrice} 
                 value={priceRange[0]} 
                 onChange={(e) => handleRangeChange(e, 0)}
                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto z-20"
               />
               
               {/* Max Slider */}
               <input 
                 type="range" 
                 min={minPrice} 
                 max={maxPrice} 
                 value={priceRange[1]} 
                 onChange={(e) => handleRangeChange(e, 1)}
                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto z-20"
               />

                {/* Thumbs RTL */}
                <div 
                  className="absolute top-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-grab -translate-y-1/2 translate-x-1/2 pointer-events-none"
                  style={{ right: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%` }}
                ></div>
                <div 
                  className="absolute top-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-grab -translate-y-1/2 translate-x-1/2 pointer-events-none"
                  style={{ right: `${((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%` }}
                ></div>
            </div>

            <div className="flex items-center gap-3">
              <input 
                className="w-full rounded-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-primary" 
                placeholder="من" 
                type="number"
                min={minPrice}
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, e.target.value)}
              />
              <span className="text-slate-400">-</span>
              <input 
                className="w-full rounded-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-primary" 
                placeholder="إلى" 
                type="number"
                min={priceRange[0]}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, e.target.value)}
              />
            </div>
          </div>

          {/* Filter Group: Brands */}
          <div className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-6">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
              الماركة
              {selectedBrands.length > 0 && (
                <button onClick={() => setSelectedBrands([])} className="text-primary text-xs font-medium hover:underline">
                  مسح
                </button>
              )}
              {selectedBrands.length === 0 && (
                <span className="material-symbols-outlined text-slate-400 !text-xl cursor-pointer">expand_less</span>
              )}
            </h3>
            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pl-2">
              {availableBrands.map((brand, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4" 
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  <span className={`text-sm transition-colors ${selectedBrands.includes(brand) ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300 group-hover:text-primary'}`}>
                    {getBrandLabel(brand)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content (Left Side) */}
        <section className="lg:col-span-3">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              تم العثور على <span className="text-slate-900 dark:text-white font-bold">{filteredAndSortedProducts.length}</span> منتج
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                ترتيب حسب:
                <div className="relative">
                  <select 
                    value={productSortBy}
                    onChange={(e) => setProductSortBy(e.target.value)}
                    className="appearance-none bg-none rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm py-1.5 ps-3 pe-8 focus:border-primary focus:ring-primary"
                  >
                    <option value="default">الأكثر مبيعاً</option>
                    <option value="name_asc">الاسم: أ - ي</option>
                    <option value="name_desc">الاسم: ي - أ</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[20px]">expand_more</span>
                </div>
              </label>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1"></div>
              <div className="flex rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  <span className="material-symbols-outlined !text-[20px]">grid_view</span>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  <span className="material-symbols-outlined !text-[20px]">view_list</span>
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'} ${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'flex flex-col gap-4'
            }`}>
              {filteredAndSortedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className={`group relative rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm transition-all hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/30 cursor-pointer overflow-hidden ${
                    viewMode === 'grid' 
                      ? 'flex flex-col' 
                      : 'flex flex-col sm:flex-row'
                  }`}
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className={`relative bg-slate-50 dark:bg-slate-900 overflow-hidden ${
                    viewMode === 'grid' 
                      ? 'aspect-square' 
                      : 'w-full sm:w-56 shrink-0 aspect-square sm:aspect-auto'
                  }`}>
                    <img 
                      alt={product.nameAr || product.name} 
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                      src={product.image}
                    />

                    {/* Badges Container - Stacked, z-10, after image */}
                    <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 items-start">
                      {product.isNew && (
                        <span className="inline-flex items-center w-fit rounded bg-green-500 px-2 py-0.5 text-xs font-bold text-white shadow-sm">جديد</span>
                      )}
                      {product.specialOrder && (
                        <span className="inline-flex items-center w-fit rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white shadow-sm">طلب خاص</span>
                      )}
                      {product.inStock && !product.isNew && !product.specialOrder && (
                        <span className="inline-flex items-center w-fit rounded bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white shadow-sm">متوفر</span>
                      )}
                    </div>

                    <button className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-2 opacity-0 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:text-primary">
                      <span className="material-symbols-outlined !text-[18px]">favorite</span>
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">{product.categoryAr || product.category}</p>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors">
                        {product.nameAr || product.name}
                      </h3>
                      {product.brandAr && (
                        <div className="mt-1">
                          <span className="text-[10px] bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-300">{product.brandAr}</span>
                        </div>
                      )}
                    </div>
                    {product.price && (
                      <p className="text-base font-bold text-[#0d131c] dark:text-white">${product.price.toLocaleString()}</p>
                    )}
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                      {product.shortDescriptionAr || product.shortDescription}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-primary">اتصل للسعر</span>
                      </div>
                      <button className="rounded-lg bg-slate-100 dark:bg-slate-700 p-2 text-primary hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-400">search_off</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">لا توجد منتجات</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                لم نتمكن من العثور على أي منتجات تطابق بحثك أو خيارات التصفية.
              </p>
              <button onClick={resetFilters} className="mt-4 text-primary font-bold hover:underline">
                 مسح جميع التصفيات
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};