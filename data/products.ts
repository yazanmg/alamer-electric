
export interface Product {
  id: string;
  name: string;
  nameAr?: string;
  category: string;
  categoryAr?: string;
  brand?: string;
  brandAr?: string;
  price?: number;
  shortDescription: string;
  shortDescriptionAr?: string;
  longDescription?: string;
  longDescriptionAr?: string;
  features?: string[];
  featuresAr?: string[];
  image: string;
  inStock?: boolean;
  isNew?: boolean;
  specialOrder?: boolean;
  specs?: Record<string, string>;
  specsAr?: Record<string, string>;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Molded Case Circuit Breaker',
    nameAr: 'قاطع دائرة مقولب MCCB',
    category: 'Circuit Protection',
    categoryAr: 'القواطع الكهربائية',
    brand: 'Schneider',
    brandAr: 'شنايدر',
    price: 450,
    shortDescription: 'High-performance 3-pole breaker rated for 400A industrial applications.',
    shortDescriptionAr: 'قاطع ثلاثي الأقطاب عالي الأداء مصنف لتطبيقات صناعية بقوة 400 أمبير.',
    longDescription: 'The Molded Case Circuit Breaker (MCCB) is designed to provide reliable protection for industrial electrical distribution networks. It features a robust thermal-magnetic trip unit that ensures precise protection against overloads and short circuits. Ideal for use in main distribution boards and motor control centers.',
    longDescriptionAr: 'تم تصميم قاطع الدائرة المقولب (MCCB) لتوفير حماية موثوقة لشبكات التوزيع الكهربائية الصناعية. يتميز بوحدة فصل حرارية مغناطيسية قوية تضمن حماية دقيقة ضد الأحمال الزائدة والدوائر القصيرة. مثالي للاستخدام في لوحات التوزيع الرئيسية ومراكز التحكم بالمحركات.',
    features: [
      'Rated Voltage: 690V AC',
      'High breaking capacity up to 50kA',
      'Adjustable thermal and magnetic trip settings',
      'Compact design for space-saving installation',
      'Suitable for isolation',
      'Comprehensive range of accessories available'
    ],
    featuresAr: [
      'الجهد المقنن: 690 فولت تيار متردد',
      'قدرة قطع عالية تصل إلى 50 كيلو أمبير',
      'إعدادات فصل حرارية ومغناطيسية قابلة للتعديل',
      'تصميم مدمج لتوفير المساحة عند التركيب',
      'مناسب للعزل',
      'مجموعة شاملة من الملحقات المتاحة'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCymfUOETIJBwaLok7HKHZ5d0zK4Ec3hMgfa_TWTSuPHGTk0RBr65EnTMwOk4juhLTYrV4MLxhJN2VOwWgaQ-hGjhDCZB-Kgn7jEhSUOd5yu9kTmeIZOZYHQcUuDLDflZ0UlnteivMiAHsuYMznWdTwoQsUW2FxdEW-ggjg1VDGBSeAQsRqiwz41hYXPvLF6HwKw2ae2t-bMXGdVId8Oztr7Y7bmpR07D2c6h19c16JzOy0EDXZx23zYO86L5LFrqENF-KwZtmdQwIb',
    inStock: true,
    specs: {
      'Rated Current': '400A',
      'Poles': '3',
      'Breaking Capacity': '50kA',
      'Rated Voltage': '690V AC',
      'Mechanical Life': '20,000 Operations'
    },
    specsAr: {
      'التيار المقنن': '400 أمبير',
      'الأقطاب': '3',
      'قدرة القطع': '50 كيلو أمبير',
      'الجهد المقنن': '690 فولت تيار متردد',
      'العمر الميكانيكي': '20,000 عملية'
    }
  },
  {
    id: '2',
    name: 'Oil-Immersed Transformer',
    nameAr: 'محول مغمور بالزيت',
    category: 'Transformers',
    categoryAr: 'المحولات',
    brand: 'ABB',
    brandAr: 'إيه بي بي',
    price: 12500,
    shortDescription: 'Robust 500kVA transformer designed for heavy-duty power distribution.',
    shortDescriptionAr: 'محول قوي بقدرة 500 كيلو فولت أمبير مصمم لتوزيع الطاقة في ظروف شاقة.',
    longDescription: 'Our Oil-Immersed Transformers are engineered for high efficiency and reliability in harsh environments. Featuring a hermetically sealed tank design, they offer superior protection against moisture ingress and oil oxidation, ensuring a long service life with minimal maintenance.',
    longDescriptionAr: 'تم تصميم محولاتنا المغمورة بالزيت لتحقيق كفاءة عالية وموثوقية في البيئات القاسية. تتميز بتصميم خزان محكم الإغلاق، مما يوفر حماية فائقة ضد دخول الرطوبة وأكسدة الزيت، مما يضمن عمر خدمة طويل مع الحد الأدنى من الصيانة.',
    features: [
      'High efficiency core design to reduce losses',
      'Hermetically sealed tank construction',
      'ONAN cooling system',
      'Tap changer for voltage regulation',
      'Pressure relief valve for safety',
      'Double coat painting for corrosion resistance'
    ],
    featuresAr: [
      'تصميم قلب عالي الكفاءة لتقليل الخسائر',
      'هيكل خزان محكم الإغلاق',
      'نظام تبريد ONAN',
      'مغير تفريعة لتنظيم الجهد',
      'صمام تخفيف الضغط للسلامة',
      'طلاء مزدوج لمقاومة التآكل'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtOeqYwOGHivsrtIe6TBnF6Hl610smgpxy3f7ssXf44wkt-eJtEPuikhnPT1LzIPR8FYJzJX_Rj38kWIDYygpASWL5yrWM9qWYKYBa81M3hRIXdMVzbwy2Tk0QAbaHi_Qk5JmgCIUsB6pfms87_s_SckCyrjIRxaEKfy2NDhgMpdB_dRThnJfdTDmXClyGet9SqRz5alsUcS2rh9iEGLG90uHMgCuedXl15Xtj5MEkSmGQQnc6tw824kEvggPl5Q4KpW2P-e_hZTj7',
    isNew: true,
    specs: {
      'Power Rating': '500kVA',
      'Cooling Type': 'ONAN',
      'Voltage Ratio': '11/0.4kV',
      'Vector Group': 'Dyn11',
      'Frequency': '60Hz'
    },
    specsAr: {
      'القدرة': '500 كيلو فولت أمبير',
      'نوع التبريد': 'ONAN',
      'نسبة الجهد': '11/0.4 كيلو فولت',
      'مجموعة المتجهات': 'Dyn11',
      'التردد': '60 هرتز'
    }
  },
  {
    id: '3',
    name: 'XLPE Insulated Cable',
    nameAr: 'كابل معزول XLPE',
    category: 'Cabling & Wires',
    categoryAr: 'الكابلات والأسلاك',
    brand: 'Syria Cables',
    brandAr: 'كابلات سوريا',
    price: 85,
    shortDescription: 'Durable medium voltage cables suitable for underground installation.',
    shortDescriptionAr: 'كابلات جهد متوسط متينة مناسبة للتركيب تحت الأرض.',
    longDescription: 'Medium Voltage XLPE Insulated Cables are designed for the transmission and distribution of electrical energy. The cross-linked polyethylene insulation offers excellent electrical, thermal, and physical properties, making these cables suitable for a wide range of industrial applications including underground burial.',
    longDescriptionAr: 'تم تصميم كابلات XLPE المعزولة للجهد المتوسط لنقل وتوزيع الطاقة الكهربائية. يوفر عزل البولي إيثيلين المتشابك خصائص كهربائية وحرارية وفيزيائية ممتازة، مما يجعل هذه الكابلات مناسبة لمجموعة واسعة من التطبيقات الصناعية بما في ذلك الدفن تحت الأرض.',
    features: [
      'High operating temperature (90°C)',
      'Excellent resistance to moisture and chemicals',
      'Low dielectric loss',
      'Robust outer sheath for mechanical protection',
      'Flame retardant options available',
      'Suitable for indoor and outdoor installation'
    ],
    featuresAr: [
      'درجة حرارة تشغيل عالية (90 درجة مئوية)',
      'مقاومة ممتازة للرطوبة والمواد الكيميائية',
      'فقد عازل منخفض',
      'غلاف خارجي قوي للحماية الميكانيكية',
      'خيارات مقاومة للحريق متاحة',
      'مناسب للتركيب الداخلي والخارجي'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLraGAS94CUDaNvgeh51TJQvSdboO1xHmchptdIoqnrBQfycRDFlmL2qMPTU-I_gl1vP9915IiUglXEsxJDmA7aTJv1q2e0uSdM1BAcFXjMJ_sKyKuQ94YCbqL7bsdZr_Nvt0_ZEu_wFPfnflDjmvWfQ8QlFVHTxlKO_zAyVIkFonxtZsPT6ELu23QOthgnE3ceaQ6R7FHsrpmbpgNLXIxwCMIy3bBqOwslnGbDp1pvjuLFgIK4HXyA2hZQpj6s5fji6_3FgptowKN',
    specs: {
      'Conductor': 'Copper',
      'Insulation': 'XLPE',
      'Voltage Grade': '12/20kV',
      'No. of Cores': '3',
      'Armouring': 'Steel Wire Armour (SWA)'
    },
    specsAr: {
      'الموصل': 'نحاس',
      'العزل': 'XLPE',
      'درجة الجهد': '12/20 كيلو فولت',
      'عدد النوى': '3',
      'التسليح': 'تسليح سلك فولاذي (SWA)'
    }
  },
  {
    id: '4',
    name: 'Main Distribution Board',
    nameAr: 'لوحة توزيع رئيسية',
    category: 'Panel Boards',
    categoryAr: 'لوحات التوزيع',
    brand: 'Alamer',
    brandAr: 'العامر',
    price: 3500,
    shortDescription: 'Custom assembled distribution boards compliant with IEC standards.',
    shortDescriptionAr: 'لوحات توزيع مجمعة خصيصاً ومتوافقة مع معايير IEC.',
    longDescription: 'Our Main Distribution Boards (MDBs) are fully type-tested assemblies designed for safety and reliability in power distribution. They are modular in design, allowing for easy expansion and maintenance, and are built to withstand high short-circuit currents.',
    longDescriptionAr: 'لوحات التوزيع الرئيسية لدينا (MDBs) هي تجميعات مختبرة بالكامل مصممة للسلامة والموثوقية في توزيع الطاقة. تتميز بتصميم معياري يسمح بالتوسع والصيانة السهلة، وهي مصممة لتحمل تيارات القصر العالية.',
    features: [
      'Modular design for flexibility',
      'Internal segregation up to Form 4b',
      'High short-circuit withstand capacity',
      'Ingress protection up to IP54',
      'Busbar rating up to 6300A',
      'Smart metering integration options'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8QsJeLWRsjIlCjOayEdlFd4x3hzTobTe552LSLiLsJFgKQMeRuWaeXtYnyfEC0pdwsXvWiQb2eep0lbzfeG6TyJkID-HlSCjQU7KKtywTC8sLwKmqH1aJQ7FBYcAq5vlxVnnaf08F-sKJ_rcfX7RFrk0i1VZ4Gy5-_i09MkFCopiPAGkQhk8jBZeE3QWQbPCs-Yd8ggTU-9gdrDp3Tp-LNyIBPwJOMS7Dz5eYbyAELDC7wAj_Q4MYHQ3iMp8EM50Cmk-eQXlCbi0d',
    inStock: true,
    specs: {
      'IP Rating': 'IP54',
      'Material': 'Electro-galvanized Steel',
      'Standard': 'IEC 61439-1/2',
      'Rated Voltage': '415V',
      'Color': 'RAL 7035'
    },
    specsAr: {
      'تصنيف الحماية IP': 'IP54',
      'المادة': 'فولاذ مجلفن كهربائياً',
      'المعيار': 'IEC 61439-1/2',
      'الجهد المقنن': '415 فولت',
      'اللون': 'RAL 7035'
    }
  },
  {
    id: '5',
    name: 'Vacuum Circuit Breaker',
    nameAr: 'قاطع دائرة فراغي VCB',
    category: 'Circuit Protection',
    categoryAr: 'القواطع الكهربائية',
    brand: 'Siemens',
    brandAr: 'سيمنز',
    price: 2800,
    shortDescription: 'Reliable medium voltage protection with high switching capacity.',
    shortDescriptionAr: 'حماية موثوقة للجهد المتوسط مع قدرة تحويل عالية.',
    longDescription: 'The Vacuum Circuit Breaker utilizes advanced vacuum interrupter technology embedded in epoxy resin poles. This construction provides excellent insulation properties and protection against external environmental factors such as dust and humidity. The compact footprint makes it an ideal retrofit solution for older switchgear panels.',
    longDescriptionAr: 'يستخدم قاطع الدائرة الفراغي تقنية متقدمة لقاطع الفراغ مدمجة في أعمدة من راتنج الإيبوكسي. يوفر هذا الهيكل خصائص عزل ممتازة وحماية ضد العوامل البيئية الخارجية مثل الغبار والرطوبة. البصمة المدمجة تجعله حلاً مثالياً للتحديث للوحات المفاتيح القديمة.',
    features: [
      'High mechanical endurance (10,000 operations)',
      'Maintenance-free vacuum interrupters',
      'Compact and lightweight design',
      'Spring-charged operating mechanism',
      'Suitable for auto-reclosing duty',
      'Front accessible for easy operation'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0boRFZoxeUfjAr2VtpNdpGsbiQvTcOPytEhjpGeUqmXRA8WGoh8cXMj1bt7mQipQcbo1g26bdJMjubeWlYm1oJNXmDuECQGLdXWUSPHIFGZmr0GWGTTZMHBwZYzDgwu7P_pBoZbOgHfFIDAhJ2D5opc8RcXbajSKQuPZ2Nxm33pVF8y9D1Nm6F4rre4z5zj2wGrJj4IzaEOVvSzTUxLseVu5Cdqao8bVEFDElfKo70hEVPlIyRb8sswvqwRsBC2PdvyNPofPzUoB4',
    specs: {
      'Voltage': '12kV',
      'Current': '630A',
      'Breaking Capacity': '25kA',
      'Impulse Voltage': '75kV',
      'Frequency': '50/60Hz'
    },
    specsAr: {
      'الجهد': '12 كيلو فولت',
      'التيار': '630 أمبير',
      'قدرة القطع': '25 كيلو أمبير',
      'جهد النبض': '75 كيلو فولت',
      'التردد': '50/60 هرتز'
    }
  },
  {
    id: '6',
    name: 'Industrial Relay Module',
    nameAr: 'وحدة ترحيل صناعية',
    category: 'Circuit Protection',
    categoryAr: 'القواطع الكهربائية',
    brand: 'Omron',
    brandAr: 'أومرون',
    price: 45,
    shortDescription: 'Compact relay modules for automation and control circuits.',
    shortDescriptionAr: 'وحدات ترحيل مدمجة لدوائر الأتمتة والتحكم.',
    longDescription: 'These industrial relay modules are designed for interface applications in automation systems. They provide galvanic isolation between control and load circuits and are capable of switching high currents in a compact package.',
    features: [
      'DIN rail mounting',
      'LED status indication',
      'Plug-in relays for easy replacement',
      'Protective circuit against reverse polarity',
      'High switching frequency',
      'Compact 6mm width options'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVwgWYaZL5rgVoZbXTPpKB-0R80XarZKn6bzoNUQHs4Nm6WPz-smP6wATsaF9KApR90zXWVQJJukItvT8ftn4ZNxEdEG3Dgku4c-YNbJSIUk8PKOLXWeWix6jyC9Xca1Jbh6FPEjzoagNFwLS0tQjQnnfW3i7urbSYEZW_m-zAVs8SrblBS2V4HpB7FFJX2X-42RvZxVAHBFjjTQazXegFkHAuNeg9KWGr0qlWrhYUBFCm76ES12lvNMZrzWX5uYFdF9ddtf-T7A3o',
    specs: {
      'Coil Voltage': '24V DC',
      'Contact Rating': '10A',
      'Mounting': 'DIN Rail',
      'Contact Material': 'AgNi',
      'Mechanical Life': '10^7 cycles'
    },
    specsAr: {
      'جهد الملف': '24 فولت تيار مستمر',
      'تصنيف التلامس': '10 أمبير',
      'التركيب': 'سكة DIN',
      'مادة التلامس': 'AgNi',
      'العمر الميكانيكي': '10^7 دورة'
    }
  },
  {
    id: '7',
    name: 'PVC Insulated Wire',
    nameAr: 'سلك معزول PVC',
    category: 'Cabling & Wires',
    categoryAr: 'الكابلات والأسلاك',
    brand: 'Alfanar',
    brandAr: 'الفنار',
    price: 120,
    shortDescription: 'Flexible copper conductors for general wiring in conduits.',
    shortDescriptionAr: 'موصلات نحاسية مرنة للتمديدات العامة في القنوات.',
    longDescription: 'Single core PVC insulated non-sheathed cables are used for general purpose applications. They are suitable for power and lighting circuits and building wiring. The cable consists of flexible annealed copper conductor and PVC insulation.',
    features: [
      'High flexibility for easy installation',
      'Flame retardant insulation',
      'Available in various colors',
      'Resistant to moisture and abrasion',
      'Conforms to international standards',
      'Wide operating temperature range'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw8G-lpZAIxAR5hwPcWca5jrzU8px5FD0_IKukN-c6FmG4Ez2vIy42cCTERolHOxyphypJNEPZCMgwP3g6ljwIojMVnvYWBn5B-BYwSAcGwESWEOHQiYCG9F2YGqWKLK2XJ-qKn3QwQpOAS-1D7krUCbkwi1Pg4o11jK5oXhjpuz6NgAa0rXn1DJW-b4Nzm9eFyprxxsZQPjB2y6c8xrtOM2kVSzSMQP3xpq67SmD7YcCJjpvxDRfTQxu-xNtswc5Czaxt2rkeK6VA',
    inStock: true,
    specs: {
      'Size': '2.5mm²',
      'Insulation': 'PVC',
      'Standard': 'IEC 60227',
      'Voltage Rating': '450/750V',
      'Conductor': 'Class 5 Flexible Copper'
    },
    specsAr: {
      'الحجم': '2.5 مم²',
      'العزل': 'PVC',
      'المعيار': 'IEC 60227',
      'تصنيف الجهد': '450/750 فولت',
      'الموصل': 'نحاس مرن من الفئة 5'
    }
  },
  {
    id: '8',
    name: 'Dry Type Transformer',
    nameAr: 'محول جاف (راتنج)',
    category: 'Transformers',
    categoryAr: 'المحولات',
    brand: 'Legrand',
    brandAr: 'ليجراند',
    price: 18000,
    shortDescription: 'Air-cooled transformers offering safety and environmental benefits.',
    shortDescriptionAr: 'محولات مبردة بالهواء توفر الأمان ومزايا بيئية.',
    longDescription: 'Cast Resin Dry Type Transformers provide a safe and reliable power solution for indoor applications. They are fire-resistant, self-extinguishing, and require minimal maintenance, making them ideal for commercial buildings, hospitals, and airports.',
    features: [
      'Fire safe and self-extinguishing',
      'No risk of oil leakage',
      'Minimal maintenance required',
      'High resistance to short circuits',
      'Environmentally friendly',
      'Capable of handling temporary overloads'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCtM1GUlBLsR7xx5OTgNzfand0ovIkOnSj9FWjsuwH9iqoj76-y1isRlAoZGYYJpMiJwT8JGb0Cy1-U6VrbxzSjOsiPzsxAQEaYhVMxZ9utDvt1I6zTRz_Wm_qsgTv6FfbPBsdlcVzqE_SINK-so-Zdd3jXbSgI3Kilz5b_lpwRRMLqnGHQ4zpjskoB8MJe8Yx3oHAS0fAKeMrgdLkUDosHZ479qYXiauYVKF2olnaImz3dy8XORcBe4NJ4bcewkVtY7TYR0dA5O2h',
    specs: {
      'Power Rating': '1000kVA',
      'Insulation Class': 'F',
      'Enclosure': 'IP23',
      'Winding Material': 'Copper/Aluminum',
      'Cooling': 'AN/AF'
    },
    specsAr: {
      'القدرة': '1000 كيلو فولت أمبير',
      'فئة العزل': 'F',
      'الحاوية': 'IP23',
      'مادة اللف': 'نحاس/ألمنيوم',
      'التبريد': 'AN/AF'
    }
  },
  {
    id: '9',
    name: 'Automatic Transfer Switch',
    nameAr: 'مفتاح نقل تلقائي ATS',
    category: 'Panel Boards',
    categoryAr: 'لوحات التوزيع',
    brand: 'Socomec',
    brandAr: 'سوكوميك',
    price: 850,
    shortDescription: 'Seamlessly switches load between power sources for critical systems.',
    shortDescriptionAr: 'تبديل سلس للحمل بين مصادر الطاقة للأنظمة الحرجة.',
    longDescription: 'The Automatic Transfer Switch (ATS) ensures continuous power supply by automatically transferring the load from the main power source to a backup generator in the event of a power failure. Essential for critical infrastructure where power interruption is not an option.',
    features: [
      'High reliability switching mechanism',
      'Microprocessor-based controller',
      'Adjustable time delays',
      'User-friendly interface',
      'Manual override capability',
      'Status monitoring and alarms'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvzYe95aGvon1A7Whk0vk7C4nDkqRqKnUbhICoiNf-tql9PJhPD7HxR_63tzU-e4kvWCesTAgTKX1XIHCR1nCyAZMx9ZwUHcr7F3pxh80eWLPt7i3ur4Mvx-dZ1mJxiSkzW9IDXYJVVPMQ1dHN1YYIjV2B9ZWJYicpjSi1SqrGuWsc6u_Axy5xF4PPl6IbGdXjP5Q_lLxI-7ud-NAB8sEL0GqAYJOwov067qC8oYQitNdRbvC6fus_THfuNaXXTadrv94g3L1MoS3-',
    specialOrder: true,
    specs: {
      'Current Rating': '100A-3200A',
      'Poles': '4',
      'Controller': 'Microprocessor',
      'Transfer Time': '< 3 sec',
      'Voltage': '415V'
    },
    specsAr: {
      'تصنيف التيار': '100A-3200A',
      'الأقطاب': '4',
      'وحدة التحكم': 'معالج دقيق',
      'وقت النقل': '< 3 ثواني',
      'الجهد': '415 فولت'
    }
  },
  {
    id: '10',
    name: 'Motor Control Center',
    nameAr: 'مركز تحكم بالمحركات MCC',
    category: 'Panel Boards',
    categoryAr: 'لوحات التوزيع',
    brand: 'Eaton',
    brandAr: 'إيتون',
    price: 5200,
    shortDescription: 'Centralized control assembly for electric motors in industrial facilities.',
    shortDescriptionAr: 'تجميع تحكم مركزي للمحركات الكهربائية في المنشآت الصناعية.',
    longDescription: 'Our Motor Control Centers (MCCs) provide a centralized location for controlling and protecting electric motors. They feature a modular design with withdrawable units for easy maintenance and replacement without interrupting the main power supply.',
    features: [
      'Withdrawable functional units',
      'Intelligent motor protection',
      'Communication with DCS/SCADA',
      'Arc fault containment',
      'High packing density',
      'Flexible cable entry options'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8QsJeLWRsjIlCjOayEdlFd4x3hzTobTe552LSLiLsJFgKQMeRuWaeXtYnyfEC0pdwsXvWiQb2eep0lbzfeG6TyJkID-HlSCjQU7KKtywTC8sLwKmqH1aJQ7FBYcAq5vlxVnnaf08F-sKJ_rcfX7RFrk0i1VZ4Gy5-_i09MkFCopiPAGkQhk8jBZeE3QWQbPCs-Yd8ggTU-9gdrDp3Tp-LNyIBPwJOMS7Dz5eYbyAELDC7wAj_Q4MYHQ3iMp8EM50Cmk-eQXlCbi0d',
    specs: {
      'Configuration': 'Fixed or Drawout',
      'Busbar Rating': 'Up to 4000A',
      'Voltage': 'Low Voltage',
      'Short Circuit Rating': '50kA/1s',
      'Standard': 'IEC 61439'
    },
    specsAr: {
      'التكوين': 'ثابت أو قابل للسحب',
      'تصنيف بسبار': 'يصل إلى 4000 أمبير',
      'الجهد': 'جهد منخفض',
      'تصنيف الدائرة القصيرة': '50 كيلو أمبير/1 ثانية',
      'المعيار': 'IEC 61439'
    }
  }
];