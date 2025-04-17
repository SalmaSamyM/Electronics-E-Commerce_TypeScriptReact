
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  brand: string;
  rating: number;
  reviews?: number;
  stock: number;
  discount?: number;
  isNew?: boolean;
  specifications?: Record<string, string | string[]>;
  features?: string[];
}
