export type Page = 'home' | 'collection' | 'detail' | 'cart' | 'checkout' | 'profile' | 'admin' | 'search';

export interface ProductReview {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  comment?: string;
  author_name: string;
  created_at: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  role: 'customer' | 'admin';
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description?: string;
  price: number;
  image_url: string;
  benefits: string[];
  ingredients: string;
  how_to_use: string[];
  stock: number;
  average_rating: number;
  total_reviews: number;
  is_active: boolean;
  limited?: boolean; // Keep for UI compatibility if needed
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
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
  products?: Product; // For Supabase joins
}

export interface Order {
  id: string;
  order_number: string;
  user_id: string;
  customer_email: string;
  customer_name?: string;
  customer_phone?: string;
  shipping_address: string;
  shipping_city: string;
  shipping_state: string;
  shipping_zip: string;
  shipping_country: string;
  shipping_method: string;
  payment_method: string;
  payment_status: string;
  subtotal: number;
  shipping_cost: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  created_at: string;
  order_items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  product_category?: string;
  quantity: number;
  price_per_unit: number;
  subtotal: number;
}

export interface OrderConfirmation {
  order: Order;
  message: string;
  trackingUrl?: string;
}
