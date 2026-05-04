import { CartItem } from '../types/cart';
import { Order, OrderItem } from '../types';

// This will connect to Supabase when you set it up
// For now, mock implementation

export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `ORD-2024-${timestamp}-${random}`;
};

export const calculateShippingCost = (method: 'standard' | 'express'): number => {
  return method === 'standard' ? 0 : 12.99;
};

export const calculateTax = (subtotal: number): number => {
  // Assuming 8% tax for now - adjust based on location
  return subtotal * 0.08;
};

export interface CreateOrderParams {
  userId: string;
  email: string;
  cartItems: CartItem[];
  shippingDetails: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  shippingMethod: 'standard' | 'express';
  paymentMethod: 'card' | 'mpesa';
  stripePaymentIntentId: string;
}

const ORDERS_STORAGE_KEY = 'glowskin_orders';

export const getOrders = (): Order[] => {
  const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (!savedOrders) return [];
  try {
    return JSON.parse(savedOrders);
  } catch {
    return [];
  }
};

export const saveOrder = (order: Order) => {
  const orders = getOrders();
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([order, ...orders]));
};

export const createOrder = async (params: CreateOrderParams): Promise<Order> => {
  try {
    const orderNumber = generateOrderNumber();
    const shippingCost = calculateShippingCost(params.shippingMethod);
    const subtotal = params.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = calculateTax(subtotal);
    const total = subtotal + shippingCost + tax;

    // Mock response for now
    const order: Order = {
      id: Math.random().toString(),
      orderNumber,
      userId: params.userId,
      email: params.email,
      createdAt: new Date().toISOString(),
      status: 'pending',
      shippingName: params.shippingDetails.name,
      shippingAddress: params.shippingDetails.address,
      shippingCity: params.shippingDetails.city,
      shippingState: params.shippingDetails.state,
      shippingZip: params.shippingDetails.zip,
      shippingMethod: params.shippingMethod,
      paymentMethod: params.paymentMethod,
      paymentStatus: 'succeeded',
      stripePaymentIntentId: params.stripePaymentIntentId,
      items: params.cartItems.map(
        (item) =>
          ({
            id: Math.random().toString(),
            orderId: '',
            productId: item.productId,
            productName: item.name,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.price * item.quantity,
          } as OrderItem)
      ),
      subtotal,
      shippingCost,
      tax,
      total,
    };

    saveOrder(order);
    return order;
  } catch (error) {
    console.error('Failed to create order:', error);
    throw new Error('Failed to create order. Please contact support.');
  }
};
