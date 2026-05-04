import { PRODUCTS } from '../constants';
import { Product } from '../types';

export const dbService = {
  async getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  },

  async getProductById(id: string): Promise<Product | null> {
    const product = PRODUCTS.find(p => p.id === id) || null;
    return Promise.resolve(product);
  }
};
