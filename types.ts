import { ReactNode } from 'react';

export enum RoutePath {
  Home = '/',
  About = '/about',
  Services = '/services',
  Products = '/products',
  Projects = '/projects',
  Contact = '/contact'
}

export type NavigateFunction = (path: string) => void;

export interface NavLink {
  label: string;
  path: RoutePath;
}

export enum AppMode {
  Chat = 'chat',
  VisionAnalysis = 'vision',
  ImageGeneration = 'image',
  VideoGeneration = 'video',
  Live = 'live'
}

export interface NavItem {
  id: AppMode;
  label: string;
  icon: ReactNode;
}

export type Language = 'en' | 'ar';