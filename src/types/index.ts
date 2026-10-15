export interface PizzaItem {
  id: string;
  name: string;
  category: 'individual' | 'pack';
  badge: string;
  badgeColor?: string;
  price: number;
  priceLabel: string;
  description: string;
  ingredients: string[];
  image: string;
  subtext: string;
  hotNote: string;
  packSize?: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
  boxFlavors?: { [key: string]: number };
}

export interface Hotspot {
  id: string;
  name: string;
  area: string;
  timeWindow: string;
  description: string;
  coordinates: { x: number; y: number }; // relative map percentage (0-100)
  icon: string;
  popularFor: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  avatarEmoji: string;
  quote: string;
  pizzasCount: string;
}
