import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ViewMode = 'grid' | 'list';

interface PreferencesContextType {
  productSortBy: string;
  setProductSortBy: (sort: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const PreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productSortBy, setProductSortBy] = useState('default');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <PreferencesContext.Provider value={{ productSortBy, setProductSortBy, viewMode, setViewMode }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};