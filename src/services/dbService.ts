import { supabase } from '../lib/supabase';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

export const dbService = {
  async getProducts(): Promise<Product[]> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          reviews (*)
        `);

      if (error) throw error;
      if (!data || data.length === 0) return PRODUCTS;

      return data as Product[];
    } catch (err) {
      console.error('Database fetch failed, falling back to local data:', err);
      return PRODUCTS;
    }
  },

  async getProductById(id: string): Promise<Product | null> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          reviews (*)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      if (!data) return PRODUCTS.find(p => p.id === id) || null;

      return data as Product;
    } catch (err) {
      console.error(`Database fetch failed for product ${id}, falling back to local data:`, err);
      return PRODUCTS.find(p => p.id === id) || null;
    }
  }
};
