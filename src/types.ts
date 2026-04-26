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
  limited?: boolean;
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
}

export interface Order {
  id: string;
  orderNumber: string;        // ORD-2024-00123
  userId: string;
  email: string;
  createdAt: string;          // ISO timestamp
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  
  // Shipping
  shippingName: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  shippingMethod: 'standard' | 'express';
  
  // Payment
  paymentMethod: 'card' | 'mpesa';
  paymentStatus: 'pending' | 'succeeded' | 'failed';
  stripePaymentIntentId?: string;
  
  // Items & Totals
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface OrderConfirmation {
  order: Order;
  message: string;
  trackingUrl?: string;
}
