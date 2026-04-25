export type Page = 'home' | 'collection' | 'detail' | 'cart' | 'checkout' | 'profile' | 'admin' | 'search';

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: string;
  image_url: string;
  benefits: string[];
  ingredients: string;
  how_to_use: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  preferences?: {
    skinType: string;
    concerns: string[];
  };
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'shipped' | 'delivered';
  total: number;
  items: CartItem[];
}
