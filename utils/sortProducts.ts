import { Product } from '../data/products';
import { Language } from '../types';

export const sortProducts = (products: Product[], sortKey: string, language: Language): Product[] => {
  const items = [...products];
  
  // Helper to get name based on language
  const getName = (p: Product) => (language === 'ar' ? (p.nameAr || p.name) : p.name);

  switch (sortKey) {
    case 'name_asc':
      return items.sort((a, b) => getName(a).localeCompare(getName(b), language));
    case 'name_desc':
      return items.sort((a, b) => getName(b).localeCompare(getName(a), language));
    default:
      return items;
  }
};