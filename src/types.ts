export interface Medicine {
  id: string;
  medicineName: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
  detailedDescription?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  mrp: number;
  image: string;
  category: string;
  rating: number;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment';
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  isGoogleReview?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HealthTipItem {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
}
