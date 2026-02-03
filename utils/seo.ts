import { RoutePath } from '../types';
import { COMPANY_NAME_AR, COMPANY_NAME_EN } from '../constants/company';

export const updateMeta = (title: string, description: string) => {
  document.title = title;
  
  let metaDesc = document.querySelector("meta[name='description']");
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);
};

export const SEO_DATA = {
  en: {
    [RoutePath.Home]: {
      title: `${COMPANY_NAME_EN} - Leading Electrical Engineering Solutions`,
      description: `${COMPANY_NAME_EN} offers top-tier electrical engineering services, industrial installations, and equipment trading in the region.`
    },
    [RoutePath.About]: {
      title: `About Us | ${COMPANY_NAME_EN}`,
      description: `Innovative electrical solutions transforming Syria’s energy sector. Learn more about ${COMPANY_NAME_EN}.`
    },
    [RoutePath.Services]: {
      title: `Our Services - ${COMPANY_NAME_EN}`,
      description: 'Comprehensive electrical services including industrial installation, commercial wiring, maintenance, and testing.'
    },
    [RoutePath.Products]: {
      title: `Products - ${COMPANY_NAME_EN}`,
      description: 'Browse our catalog of high-performance electrical equipment: transformers, switchgears, cables, and more.'
    },
    [RoutePath.Projects]: {
      title: `Projects - ${COMPANY_NAME_EN}`,
      description: 'Explore our portfolio of successful electrical infrastructure projects across the region.'
    },
    [RoutePath.Contact]: {
      title: `Contact Us - ${COMPANY_NAME_EN}`,
      description: `Get in touch with ${COMPANY_NAME_EN} for quotes, support, or inquiries. We are here to help.`
    }
  },
  ar: {
    [RoutePath.Home]: {
      title: `${COMPANY_NAME_AR} - حلول الهندسة الكهربائية الرائدة`,
      description: `تقدم شركة ${COMPANY_NAME_AR} أفضل خدمات الهندسة الكهربائية والتركيبات الصناعية وتجارة المعدات في المنطقة.`
    },
    [RoutePath.About]: {
      title: `من نحن | ${COMPANY_NAME_AR}`,
      description: `حلول كهربائية مبتكرة لتطوير قطاع الطاقة في سوريا. تعرّف أكثر على ${COMPANY_NAME_AR}.`
    },
    [RoutePath.Services]: {
      title: `خدماتنا - ${COMPANY_NAME_AR}`,
      description: 'خدمات كهربائية شاملة تشمل التركيبات الصناعية، التمديدات التجارية، الصيانة، والاختبارات.'
    },
    [RoutePath.Products]: {
      title: `المنتجات - ${COMPANY_NAME_AR}`,
      description: 'تصفح كتالوجنا من المعدات الكهربائية عالية الأداء: محولات، لوحات توزيع، كابلات، والمزيد.'
    },
    [RoutePath.Projects]: {
      title: `المشاريع - ${COMPANY_NAME_AR}`,
      description: 'استكشف محفظة مشاريعنا الناجحة في البنية التحتية الكهربائية في جميع أنحاء المنطقة.'
    },
    [RoutePath.Contact]: {
      title: `اتصل بنا - ${COMPANY_NAME_AR}`,
      description: `تواصل مع شركة ${COMPANY_NAME_AR} للحصول على عروض أسعار أو دعم فني. نحن هنا للمساعدة.`
    }
  }
};