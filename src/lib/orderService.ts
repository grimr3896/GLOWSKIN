import { CartItem } from '../types/cart';
import { Order, OrderItem } from '../types';
import { supabase } from '../context/supabaseClient';

export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `ORD-2024-${timestamp}-${random}`;
};

export const calculateShippingCost = (method: 'standard' | 'express'): number => {
  return method === 'standard' ? 0 : 12.99;
};

export const calculateTax = (subtotal: number): number => {
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

export const getOrders = async (userId: string): Promise<Order[]> => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      items:order_items(*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching orders:', error);
    return [];
  }

  return data as Order[];
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

    // 1. Create order record
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([{
        order_number: orderNumber,
        user_id: params.userId,
        email: params.email,
        status: 'pending',
        shipping_name: params.shippingDetails.name,
        shipping_address: params.shippingDetails.address,
        shipping_city: params.shippingDetails.city,
        shipping_state: params.shippingDetails.state,
        shipping_zip: params.shippingDetails.zip,
        shipping_method: params.shippingMethod,
        payment_method: params.paymentMethod,
        payment_status: 'succeeded',
        stripe_payment_intent_id: params.stripePaymentIntentId,
        subtotal,
        shipping_cost: shippingCost,
        tax,
        total
      }])
      .select()
      .single();

    if (orderError) throw orderError;

    // 2. Create order items
    const orderItems = params.cartItems.map(item => ({
      order_id: order.id,
      product_id: item.productId,
      product_name: item.name,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.price * item.quantity
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) throw itemsError;

    // 3. Return combined object
    return {
      ...order,
      items: orderItems
    } as Order;
  } catch (error) {
    console.error('Failed to create order:', error);
    throw new Error('Failed to create order. Please contact support.');
  }
};
