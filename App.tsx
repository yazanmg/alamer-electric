import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { HomeAr } from './pages/HomeAr';
import { About } from './pages/About';
import { AboutAr } from './pages/AboutAr';
import { Services } from './pages/Services';
import { ServicesAr } from './pages/ServicesAr';
import { Products } from './pages/Products';
import { ProductsAr } from './pages/ProductsAr';
import { ProductDetail } from './pages/ProductDetail';
import { ProductDetailAr } from './pages/ProductDetailAr';
import { Contact } from './pages/Contact';
import { ContactAr } from './pages/ContactAr';
import { Projects } from './pages/Projects';
import { RoutePath, Language } from './types';
import { LanguageProvider } from './contexts/LanguageContext';
import { PreferencesProvider } from './contexts/PreferencesContext';
import { SEO_DATA, updateMeta } from './utils/seo';

const AppContent: React.FC<{ currentPath: string; onNavigate: (path: string) => void }> = ({ currentPath, onNavigate }) => {
  // Helper to extract base path (removing /ar prefix)
  const getBasePath = (path: string) => {
    if (path === '/ar') return '/';
    if (path.startsWith('/ar/')) return path.substring(3);
    return path;
  };

  const basePath = getBasePath(currentPath);
  const isArabic = currentPath.startsWith('/ar');

  // Handle SEO for static routes
  useEffect(() => {
    const langKey = isArabic ? 'ar' : 'en';
    const seoEntry = SEO_DATA[langKey][basePath as RoutePath];
    
    if (seoEntry) {
      updateMeta(seoEntry.title, seoEntry.description);
    }
  }, [basePath, isArabic]);

  const renderContent = () => {
    // 1. Home Page
    if (basePath === RoutePath.Home) {
      return isArabic ? <HomeAr onNavigate={onNavigate} /> : <Home onNavigate={onNavigate} />;
    }

    // 2. Exact Matches
    switch (basePath) {
      case RoutePath.About:
        return isArabic ? <AboutAr onNavigate={onNavigate} /> : <About />;
      case RoutePath.Services:
        return isArabic ? <ServicesAr onNavigate={onNavigate} /> : <Services onNavigate={onNavigate} />;
      case RoutePath.Products:
        return isArabic ? <ProductsAr onNavigate={onNavigate} /> : <Products onNavigate={onNavigate} />;
      case RoutePath.Projects:
        return <Projects onNavigate={onNavigate} />;
      case RoutePath.Contact:
        return isArabic ? <ContactAr onNavigate={onNavigate} /> : <Contact />;
    }

    // 3. Dynamic Matches (Products)
    if (basePath.startsWith('/products/')) {
      const productId = basePath.split('/products/')[1];
      return isArabic 
        ? <ProductDetailAr productId={productId} onNavigate={onNavigate} />
        : <ProductDetail productId={productId} onNavigate={onNavigate} />;
    }

    // 4. Fallback
    return isArabic ? <HomeAr onNavigate={onNavigate} /> : <Home onNavigate={onNavigate} />;
  };

  return (
    <Layout currentPath={currentPath as any} onNavigate={onNavigate}>
      {renderContent()}
    </Layout>
  );
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const hash = window.location.hash.slice(1);
    return hash || '/';
  });
  
  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPath(hash || '/');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Determine language from path
  const language: Language = currentPath.startsWith('/ar') ? 'ar' : 'en';

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <LanguageProvider language={language}>
      <PreferencesProvider>
        <AppContent currentPath={currentPath} onNavigate={navigate} />
      </PreferencesProvider>
    </LanguageProvider>
  );
};

export default App;