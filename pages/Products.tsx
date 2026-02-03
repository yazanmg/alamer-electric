import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { NavigateFunction } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { usePreferences } from '../contexts/PreferencesContext';
import { sortProducts } from '../utils/sortProducts';

interface ProductsProps {
  onNavigate: NavigateFunction;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
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

  // Get unique categories dynamically
  const availableCategories = useMemo(() => {
    const cats = new Set(PRODUCTS.map(p => p.category));
    return Array.from(cats).sort();
  }, []);

  // Get unique brands dynamically
  const availableBrands = useMemo(() => {
    const brands = new Set(PRODUCTS.map(p => p.brand).filter(Boolean) as string[]);
    return Array.from(brands).sort();
  }, []);

  // Trigger animation when filters change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [productSortBy, searchQuery, viewMode, selectedCategories, selectedBrands, priceRange]);

  const handleProductClick = (id: string) => {
    const path = language === 'ar' ? `/ar/products/${id}` : `/products/${id}`;
    onNavigate(path);
  };

  const handleHomeClick = () => {
    const path = language === 'ar' ? '/ar' : '/';
    onNavigate(path);
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

  // Slider Logic
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const val = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = val;
      // Prevent cross over
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

  // 1) Pipeline implementation
  const filteredAndSortedProducts = useMemo(() => {
    // Start with a shallow copy of products to avoid mutating the original data during sort
    let items = [...PRODUCTS];

    // Step 1: Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.brand && p.brand.toLowerCase().includes(q))
      );
    }

    // Step 2: Categories
    if (selectedCategories.length > 0) {
      items = items.filter(p => selectedCategories.includes(p.category));
    }

    // Step 3: Brands
    if (selectedBrands.length > 0) {
      items = items.filter(p => p.brand && selectedBrands.includes(p.brand));
    }

    // Step 4: Price Range
    // Check if price filter is effectively active (user changed default min/max)
    const isPriceFilterActive = priceRange[0] > minPrice || priceRange[1] < maxPrice;
    
    if (isPriceFilterActive) {
      items = items.filter(p => {
        // If price is missing, exclude it when strict filtering is active
        if (p.price === undefined) return false;
        return p.price >= priceRange[0] && p.price <= priceRange[1];
      });
    }

    // Step 5: Sorting
    // sortProducts returns a sorted array
    return sortProducts(items, productSortBy, 'en');
  }, [productSortBy, searchQuery, selectedCategories, selectedBrands, priceRange, minPrice, maxPrice]);

  const clearSearch = () => setSearchQuery('');

  return (
    <div className="layout-container py-6 md:py-10">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 pb-4">
        <button onClick={handleHomeClick} className="text-[#4b6c9b] text-sm md:text-base font-medium hover:underline">Home</button>
        <span className="text-[#4b6c9b] text-sm md:text-base font-medium">/</span>
        <span className="text-[#0d131c] dark:text-white text-sm md:text-base font-medium">Products</span>
      </div>

      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-end gap-6 mb-8 border-b border-[#e7ecf3] dark:border-gray-700 pb-6">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-[#0d131c] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Our Products</h1>
          <p className="text-[#4b6c9b] dark:text-gray-400 text-base md:text-lg font-normal">
            Explore our comprehensive range of high-quality electrical trading components engineered for industrial performance.
          </p>
        </div>
        <div className="text-sm font-medium text-[#4b6c9b]">Showing 1-{filteredAndSortedProducts.length} of {PRODUCTS.length} products</div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 flex flex-col gap-6 shrink-0">
          
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0d131c] dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined">tune</span> Filters
            </h2>
            {hasActiveFilters && (
              <button 
                onClick={resetFilters} 
                className="text-sm font-bold text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          {/* Search */}
          <div className="bg-white dark:bg-[#1a2636] p-4 rounded-xl border border-[#e7ecf3] dark:border-gray-700 shadow-sm">
            <h3 className="text-sm font-bold text-[#0d131c] dark:text-white mb-3 uppercase tracking-wider">Search Inventory</h3>
            <label className="flex flex-col h-11 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-[#cfd9e8] dark:border-gray-600 focus-within:ring-2 focus-within:ring-primary/20 transition-all relative">
                <div className="text-[#4b6c9b] flex bg-white dark:bg-gray-800 items-center justify-center ps-3">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none bg-white dark:bg-gray-800 text-[#0d131c] dark:text-white focus:outline-none h-full placeholder:text-[#9ca3af] px-3 text-sm font-normal leading-normal border-none ring-0" 
                  placeholder="Model number or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={clearSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                )}
              </div>
            </label>
          </div>

          {/* Categories */}
          <div className="bg-white dark:bg-[#1a2636] p-4 rounded-xl border border-[#e7ecf3] dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-[#0d131c] dark:text-white uppercase tracking-wider">Categories</h3>
              {selectedCategories.length > 0 && (
                <button 
                  onClick={() => setSelectedCategories([])}
                  className="text-primary text-xs font-medium hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {availableCategories.map((cat, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group/item select-none">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span className={`text-sm transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-bold' : 'text-[#4b6c9b] group-hover/item:text-primary'}`}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="bg-white dark:bg-[#1a2636] p-4 rounded-xl border border-[#e7ecf3] dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-[#0d131c] dark:text-white uppercase tracking-wider">Brands</h3>
              {selectedBrands.length > 0 && (
                <button 
                  onClick={() => setSelectedBrands([])}
                  className="text-primary text-xs font-medium hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto custom-scrollbar">
              {availableBrands.map((brand, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group/item select-none">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  <span className={`text-sm transition-colors ${selectedBrands.includes(brand) ? 'text-primary font-bold' : 'text-[#4b6c9b] group-hover/item:text-primary'}`}>
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-white dark:bg-[#1a2636] p-4 rounded-xl border border-[#e7ecf3] dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-[#0d131c] dark:text-white uppercase tracking-wider">Price Range</h3>
              {(priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && (
                 <button 
                  onClick={() => setPriceRange([minPrice, maxPrice])}
                  className="text-primary text-xs font-medium hover:underline"
                >
                  Reset
                </button>
              )}
            </div>
            {/* Range Inputs */}
            <div className="relative h-10 mb-4">
               {/* Tracks */}
               <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full -translate-y-1/2 pointer-events-none"></div>
               <div 
                  className="absolute top-1/2 h-1 bg-primary rounded-full -translate-y-1/2 pointer-events-none"
                  style={{
                    left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                    right: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`
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

                {/* Visual Representations of Thumbs */}
                <div 
                  className="absolute top-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-grab -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%` }}
                ></div>
                <div 
                  className="absolute top-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow cursor-grab -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ left: `${((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%` }}
                ></div>
            </div>

            {/* Manual Inputs */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">$</span>
                <input 
                  type="number" 
                  min={minPrice} 
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, e.target.value)}
                  className="w-full pl-6 pr-2 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-[#0d131c] dark:text-white focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <span className="text-gray-400">-</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">$</span>
                <input 
                  type="number" 
                  min={priceRange[0]} 
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, e.target.value)}
                  className="w-full pl-6 pr-2 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-[#0d131c] dark:text-white focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Featured Banner */}
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/10 flex flex-col gap-3">
            <span className="text-xs font-bold text-primary uppercase">Need Custom Solution?</span>
            <h4 className="text-[#0d131c] dark:text-white font-bold text-lg leading-tight">We build custom panel boards</h4>
            <button className="text-sm font-medium text-primary hover:underline self-start">Contact Sales →</button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort & Filter Mobile Toggle */}
          <div className="flex lg:hidden justify-between items-center mb-4 gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-[#1a2636] border border-[#e7ecf3] dark:border-gray-700 rounded-lg text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">filter_list</span> Filters
            </button>
            <div className="flex-1 relative">
              <select 
                value={productSortBy}
                onChange={(e) => setProductSortBy(e.target.value)}
                className="w-full appearance-none bg-none px-4 py-2 bg-white dark:bg-[#1a2636] border border-[#e7ecf3] dark:border-gray-700 rounded-lg text-sm font-medium focus:ring-1 focus:ring-primary focus:outline-none"
              >
                <option value="default">Featured</option>
                <option value="name_asc">Name: A-Z</option>
                <option value="name_desc">Name: Z-A</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-[20px]">expand_more</span>
            </div>
          </div>
          <div className="hidden lg:flex justify-end mb-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-[#4b6c9b]">Sort by:</label>
              <div className="relative">
                <select 
                  value={productSortBy}
                  onChange={(e) => setProductSortBy(e.target.value)}
                  className="appearance-none bg-none ps-3 pe-8 py-1.5 bg-transparent border-none text-sm font-bold text-[#0d131c] dark:text-white cursor-pointer focus:ring-0"
                >
                  <option value="default">Featured</option>
                  <option value="name_asc">Name: A-Z</option>
                  <option value="name_desc">Name: Z-A</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#0d131c] dark:text-white text-[20px]">expand_more</span>
              </div>
              
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-2"></div>

              <div className="flex rounded-lg border border-[#e7ecf3] dark:border-gray-700 bg-white dark:bg-[#1a2636] p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-slate-100 dark:bg-slate-700 text-[#0d131c] dark:text-white' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  <span className="material-symbols-outlined !text-[20px]">grid_view</span>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-slate-100 dark:bg-slate-700 text-[#0d131c] dark:text-white' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  <span className="material-symbols-outlined !text-[20px]">view_list</span>
                </button>
              </div>
            </div>
          </div>

          {/* Products List */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'} ${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'flex flex-col gap-4'
            }`}>
              {filteredAndSortedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className={`group rounded-xl border border-[#e7ecf3] dark:border-gray-700 bg-white dark:bg-[#1a2636] overflow-hidden transition-all hover:shadow-lg cursor-pointer ${
                    viewMode === 'grid' 
                      ? 'flex flex-col hover:-translate-y-1' 
                      : 'flex flex-col sm:flex-row hover:-translate-x-1'
                  }`}
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className={`relative flex items-center justify-center bg-gray-50 dark:bg-gray-800 ${
                    viewMode === 'grid' 
                      ? 'aspect-[4/3] w-full p-6' 
                      : 'w-full sm:w-56 shrink-0 aspect-[4/3] sm:aspect-auto p-4'
                  }`}>
                    <img 
                      className="h-full w-full object-cover mix-blend-multiply dark:mix-blend-normal rounded-lg" 
                      src={product.image} 
                      alt={product.name}
                    />
                    
                    {/* Badges Container - Stacked, z-10, after image */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
                      {product.inStock && (
                        <span className="inline-flex items-center w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-sm">In Stock</span>
                      )}
                      {product.isNew && (
                        <span className="inline-flex items-center w-fit bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-sm">New Arrival</span>
                      )}
                      {product.specialOrder && (
                        <span className="inline-flex items-center w-fit bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-sm">Special Order</span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col p-5 gap-2 grow">
                    <div className="flex flex-col gap-1 mb-2">
                      <h3 className="text-lg font-bold text-[#0d131c] dark:text-white leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#4b6c9b] font-medium uppercase tracking-wide">{product.category}</span>
                        {product.brand && (
                          <span className="text-[10px] bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-300">{product.brand}</span>
                        )}
                      </div>
                    </div>
                    {product.price && (
                      <p className="text-base font-bold text-[#0d131c] dark:text-white">${product.price.toLocaleString()}</p>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{product.shortDescription}</p>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        View Details <span className="material-symbols-outlined text-[16px] rtl:rotate-180">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl text-gray-400">search_off</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d131c] dark:text-white mb-2">No products found</h3>
                <p className="text-[#4b6c9b] dark:text-gray-400 max-w-sm">
                  We couldn't find any products matching your search criteria. Try adjusting your filters.
                </p>
                <button onClick={resetFilters} className="mt-4 text-primary font-bold hover:underline">
                   Clear All Filters
                </button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};