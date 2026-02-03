import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { RoutePath } from '../types';

interface LayoutProps {
  children: ReactNode;
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPath, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath={currentPath} onNavigate={onNavigate} />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};