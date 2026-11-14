import realEstateImg from '../assets/images/category_real_estate_1794661892607.jpg';
import healthcareClinicImg from '../assets/images/portfolio_healthcare_clinic_1794661357141.jpg';
import barberSalonImg from '../assets/images/category_barber_salon_1794661893141.jpg';
import automotiveDetailingImg from '../assets/images/category_automotive_detailing_1794661893490.jpg';
import carwashFoamImg from '../assets/images/carwash_foam_exterior_1794665723838.jpg';
import carwashInteriorImg from '../assets/images/carwash_interior_detailing_1794665724499.jpg';
import ecommerceWatchImg from '../assets/images/portfolio_ecommerce_watch_1794661357196.jpg';
import ecomHeadphonesImg from '../assets/images/ecom_headphones_tech_1794665722941.jpg';
import ecomLeatherBagImg from '../assets/images/ecom_leather_bag_1794665722659.jpg';
import ecomSkincareImg from '../assets/images/ecom_skincare_bottle_1794665722939.jpg';
import industrialTextileImg from '../assets/images/category_industrial_textile_1794661894956.jpg';

export type WebsiteCategoryId =
  | 'all'
  | 'real-estate'
  | 'healthcare'
  | 'barber-salon'
  | 'automotive'
  | 'ecommerce'
  | 'industrial';

export interface GalleryItem {
  image: string;
  alt: string;
  label: string;
  priceOrTag?: string;
}

export interface WebsiteCategory {
  id: Exclude<WebsiteCategoryId, 'all'>;
  title: string;
  shortLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery?: GalleryItem[];
  iconName: 'building' | 'heart-pulse' | 'scissors' | 'car' | 'shopping-bag' | 'factory';
}

export const WEBSITE_CATEGORIES: WebsiteCategory[] = [
  {
    id: 'real-estate',
    title: 'Real Estate Websites',
    shortLabel: 'Real Estate',
    description: 'Property listings, projects and real estate businesses.',
    image: realEstateImg,
    imageAlt: 'Modern architectural villa at dusk representing Real Estate Websites',
    iconName: 'building',
  },
  {
    id: 'healthcare',
    title: 'Medical & Healthcare Websites',
    shortLabel: 'Medical & Healthcare',
    description: 'Clinics, hospitals and healthcare services.',
    image: healthcareClinicImg,
    imageAlt: 'Contemporary medical clinic lobby representing Medical & Healthcare Websites',
    iconName: 'heart-pulse',
  },
  {
    id: 'barber-salon',
    title: 'Barber & Salon Websites',
    shortLabel: 'Barber & Salon',
    description: 'Barbershops, salons and appointment websites.',
    image: barberSalonImg,
    imageAlt: 'Upscale modern barbershop interior representing Barber & Salon Websites',
    iconName: 'scissors',
  },
  {
    id: 'automotive',
    title: 'Car Wash & Automotive Websites',
    shortLabel: 'Car Wash & Automotive',
    description: 'Car wash, detailing and automotive businesses.',
    image: automotiveDetailingImg,
    imageAlt: 'Sports coupe in a detailing studio representing Car Wash & Automotive Websites',
    gallery: [
      {
        image: automotiveDetailingImg,
        alt: 'Sports coupe in ceramic detailing bay',
        label: 'Ceramic Studio',
      },
      {
        image: carwashFoamImg,
        alt: 'Snow foam exterior car wash bay',
        label: 'Foam Wash',
      },
      {
        image: carwashInteriorImg,
        alt: 'Detailed dark leather car interior',
        label: 'Interior Care',
      },
    ],
    iconName: 'car',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Websites',
    shortLabel: 'E-commerce',
    description: 'Online stores, products and shopping websites.',
    image: ecommerceWatchImg,
    imageAlt: 'Luxury stainless steel timepiece representing E-commerce Websites',
    gallery: [
      {
        image: ecommerceWatchImg,
        alt: 'Stainless steel mechanical wristwatch',
        label: 'Timepieces',
        priceOrTag: 'Watches',
      },
      {
        image: ecomHeadphonesImg,
        alt: 'Matte black wireless studio headphones',
        label: 'Audio Tech',
        priceOrTag: 'Electronics',
      },
      {
        image: ecomLeatherBagImg,
        alt: 'Minimalist espresso leather crossbody bag',
        label: 'Leather Goods',
        priceOrTag: 'Accessories',
      },
      {
        image: ecomSkincareImg,
        alt: 'Amber glass skincare serum bottle',
        label: 'Skincare',
        priceOrTag: 'Beauty',
      },
    ],
    iconName: 'shopping-bag',
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing Websites',
    shortLabel: 'Industrial & Manufacturing',
    description: 'Textile companies, factories and industrial businesses.',
    image: industrialTextileImg,
    imageAlt: 'Modern automated textile manufacturing plant representing Industrial Websites',
    iconName: 'factory',
  },
];

export interface PortfolioProject {
  id: string;
  categoryId: Exclude<WebsiteCategoryId, 'all'>;
  title: string;
  category: string;
  statusLabel: 'Concept Design' | 'Demo Project';
  image: string;
  imageAlt: string;
  gallery?: GalleryItem[];
  domainUrl: string;
  mockupNav: string[];
  mockupHeadline: string;
  mockupSubhead: string;
  mockupCta: string;
  mockupHighlights: { label: string; detail: string }[];
  deliverables: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'vanguard-estates',
    categoryId: 'real-estate',
    title: 'Vanguard Estates',
    category: 'Real Estate Websites',
    statusLabel: 'Concept Design',
    image: realEstateImg,
    imageAlt: 'Vanguard Estates luxury real estate website preview',
    domainUrl: 'vanguard-estates.concept',
    mockupNav: ['Listings', 'Developments', 'Agents', 'Inquire'],
    mockupHeadline: 'Architectural Residences & Prime Developments',
    mockupSubhead: 'Curated villas, penthouses, and commercial investments with interactive floor plans.',
    mockupCta: 'Browse Properties',
    mockupHighlights: [
      { label: 'Verified Listings', detail: 'High-res galleries & location maps' },
      { label: 'New Projects', detail: 'Pre-launch developer showcases' },
      { label: 'Private Tours', detail: 'Direct WhatsApp viewing requests' },
    ],
    deliverables: [
      'Property Listing Grid & Filters',
      'Project Showcase Pages',
      'Direct Viewing Request Form',
    ],
  },
  {
    id: 'clarity-health-clinic',
    categoryId: 'healthcare',
    title: 'Clarity Health Clinic',
    category: 'Medical & Healthcare Websites',
    statusLabel: 'Concept Design',
    image: healthcareClinicImg,
    imageAlt: 'Clarity Health Clinic healthcare website preview',
    domainUrl: 'clarityhealth.concept',
    mockupNav: ['Departments', 'Doctors', 'Diagnostics', 'Book Visit'],
    mockupHeadline: 'Thoughtful Care, Built Around Your Family',
    mockupSubhead: 'Primary medicine, diagnostics, and specialist consultations in a welcoming setting.',
    mockupCta: 'Book Appointment',
    mockupHighlights: [
      { label: 'Family Medicine', detail: 'Preventive checkups & care plans' },
      { label: 'Specialist Team', detail: 'Credentials & consultation hours' },
      { label: 'Patient Access', detail: 'Fast mobile appointment booking' },
    ],
    deliverables: [
      'Department & Doctor Directory',
      'Accessible Patient Experience',
      'Mobile Appointment Booking',
    ],
  },
  {
    id: 'crown-blade-grooming',
    categoryId: 'barber-salon',
    title: 'Crown & Blade Grooming',
    category: 'Barber & Salon Websites',
    statusLabel: 'Demo Project',
    image: barberSalonImg,
    imageAlt: 'Crown & Blade Grooming barbershop website preview',
    domainUrl: 'crownandblade.demo',
    mockupNav: ['Services', 'Barbers', 'Gallery', 'Book Chair'],
    mockupHeadline: 'Precision Cuts & Classic Grooming',
    mockupSubhead: 'Tailored haircuts, hot towel shaves, and modern styling with effortless online booking.',
    mockupCta: 'Book Your Chair',
    mockupHighlights: [
      { label: 'Signature Cuts', detail: 'Transparent service & pricing menu' },
      { label: 'Master Barbers', detail: 'Choose your preferred stylist' },
      { label: 'Instant Booking', detail: 'Quick slot selection via mobile' },
    ],
    deliverables: [
      'Service Menu & Pricing Display',
      'Stylist Profiles',
      'Appointment Scheduling Flow',
    ],
  },
  {
    id: 'apex-auto-detailing',
    categoryId: 'automotive',
    title: 'Apex Auto Detailing',
    category: 'Car Wash & Automotive Websites',
    statusLabel: 'Concept Design',
    image: automotiveDetailingImg,
    imageAlt: 'Apex Auto Detailing car wash website preview',
    gallery: [
      {
        image: automotiveDetailingImg,
        alt: 'Ceramic coating studio bay',
        label: 'Ceramic Protection',
      },
      {
        image: carwashFoamImg,
        alt: 'Snow foam exterior car wash',
        label: 'Exterior Foam Wash',
      },
      {
        image: carwashInteriorImg,
        alt: 'Luxury car leather interior detailing',
        label: 'Interior Detailing',
      },
    ],
    domainUrl: 'apexdetailing.concept',
    mockupNav: ['Packages', 'Ceramic', 'Gallery', 'Book Wash'],
    mockupHeadline: 'Studio-Grade Detailing & Car Wash',
    mockupSubhead: 'Exterior snow foam wash, ceramic coating, and complete interior restoration.',
    mockupCta: 'Book Wash',
    mockupHighlights: [
      { label: 'Express & Full Wash', detail: 'Clear tiered package comparison' },
      { label: 'Ceramic Coating', detail: 'Long-term gloss & paint protection' },
      { label: 'Fast Reservations', detail: 'Same-day booking on WhatsApp' },
    ],
    deliverables: [
      'Wash & Detailing Package Matrix',
      'Service Photography Showcase',
      'One-Tap Booking Integration',
    ],
  },
  {
    id: 'vespera-store',
    categoryId: 'ecommerce',
    title: 'Vespera Marketplace',
    category: 'E-commerce Websites',
    statusLabel: 'Demo Project',
    image: ecommerceWatchImg,
    imageAlt: 'Vespera Marketplace multi-category e-commerce website preview',
    gallery: [
      {
        image: ecommerceWatchImg,
        alt: 'Minimalist stainless steel wristwatch',
        label: 'Timepieces',
        priceOrTag: 'Watches',
      },
      {
        image: ecomHeadphonesImg,
        alt: 'Wireless matte black headphones',
        label: 'Audio Tech',
        priceOrTag: 'Electronics',
      },
      {
        image: ecomLeatherBagImg,
        alt: 'Structured dark leather bag',
        label: 'Leather Bags',
        priceOrTag: 'Fashion',
      },
      {
        image: ecomSkincareImg,
        alt: 'Amber glass skincare serum',
        label: 'Skincare',
        priceOrTag: 'Beauty',
      },
    ],
    domainUrl: 'vespera-store.demo',
    mockupNav: ['Watches', 'Audio', 'Fashion', 'Cart (2)'],
    mockupHeadline: 'Curated Goods Across Lifestyle Categories',
    mockupSubhead: 'Timepieces, wireless audio, leather accessories, and daily essentials in one storefront.',
    mockupCta: 'Shop All',
    mockupHighlights: [
      { label: 'Product Catalog', detail: 'Multi-category filtering & search' },
      { label: 'Quick View Cart', detail: 'Frictionless checkout experience' },
      { label: 'Order Tracking', detail: 'Clear shipping & warranty info' },
    ],
    deliverables: [
      'Multi-Category Storefront Grid',
      'Product Detail & Variant View',
      'Streamlined Cart Checkout',
    ],
  },
  {
    id: 'alnoor-textile-mills',
    categoryId: 'industrial',
    title: 'Al-Noor Textile Mills',
    category: 'Industrial & Manufacturing Websites',
    statusLabel: 'Concept Design',
    image: industrialTextileImg,
    imageAlt: 'Al-Noor Textile Mills industrial website preview',
    domainUrl: 'alnoortextiles.concept',
    mockupNav: ['Capabilities', 'Fabrics', 'Quality', 'Export Inquiry'],
    mockupHeadline: 'Precision Weaving & Global Textile Supply',
    mockupSubhead: 'High-capacity cotton and blended fabric manufacturing engineered for international buyers.',
    mockupCta: 'Request Sample',
    mockupHighlights: [
      { label: 'Production Units', detail: 'Spinning, weaving & finishing specs' },
      { label: 'Quality Control', detail: 'Testing standards & certifications' },
      { label: 'B2B Inquiries', detail: 'Direct export quotation requests' },
    ],
    deliverables: [
      'Factory Capability Showcase',
      'Product & Fabric Specification Grid',
      'B2B Export Quote Form',
    ],
  },
];

export interface WhyChooseCard {
  title: string;
  description: string;
  iconName: 'sparkles' | 'smartphone' | 'badge-dollar' | 'users';
}

export const WHY_CHOOSE_CARDS: WhyChooseCard[] = [
  {
    title: 'Modern & Professional Designs',
    description: 'Sharp layouts and dark-navy precision tailored to impress your visitors.',
    iconName: 'sparkles',
  },
  {
    title: 'Mobile Responsive Websites',
    description: 'Smooth performance and clean formatting on every phone, tablet, and desktop.',
    iconName: 'smartphone',
  },
  {
    title: 'Affordable Pricing',
    description: 'Practical website packages built to fit startups and growing businesses.',
    iconName: 'badge-dollar',
  },
  {
    title: 'Client-Focused Solutions',
    description: 'Custom designs aligned directly with your industry and business goals.',
    iconName: 'users',
  },
];
