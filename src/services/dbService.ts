import { supabase } from '../context/supabaseClient';
import { Product } from '../types';

export const dbService = {
  async getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        reviews (*)
      `);
    
    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }

    // Map database field names to our frontend Product interface if they differ
    return data.map(p => ({
      ...p,
      price: p.price_display, // Use the display price from DB
      price_amount: p.price_amount
    }));
  },

  async getProductById(id: string): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        reviews (*)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching product ${id}:`, error);
      return null;
    }

    return {
      ...data,
      price: data.price_display,
      price_amount: data.price_amount
    };
  },

  async createOrder(orderData: any, items: any[]) {
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([orderData])
      .select()
      .single();

    if (orderError) throw orderError;

    const orderItems = items.map(item => ({
      ...item,
      order_id: order.id
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) throw itemsError;

    return order;
  }
};
