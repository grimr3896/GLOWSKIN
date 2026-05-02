import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const signUp = async (email: string, password: string, fullName: string) => {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });
};

export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};

// Data queries
export const getProducts = async (category?: string) => {
  let query = supabase.from('products').select('*').eq('is_active', true);
  if (category) {
    query = query.eq('category', category);
  }
  return await query;
};

export const getProductById = async (id: string) => {
  return await supabase.from('products').select('*').eq('id', id).single();
};

export const getProductReviews = async (productId: string) => {
  return await supabase
    .from('product_reviews')
    .select('*')
    .eq('product_id', productId)
    .order('created_at', { ascending: false });
};

export const getProfile = async (userId: string) => {
  return await supabase.from('profiles').select('*').eq('id', userId).single();
};

export const updateProfile = async (userId: string, updates: any) => {
  return await supabase.from('profiles').update(updates).eq('id', userId);
};

export const getCart = async (userId: string) => {
  return await supabase
    .from('cart_items')
    .select('*, products(*)')
    .eq('user_id', userId);
};

export const addToCart = async (
  userId: string,
  productId: string,
  quantity: number,
  price: number
) => {
  return await supabase.from('cart_items').upsert(
    {
      user_id: userId,
      product_id: productId,
      quantity,
      price_at_time: price,
    },
    { onConflict: 'user_id,product_id' }
  );
};

export const removeFromCart = async (cartItemId: string) => {
  return await supabase.from('cart_items').delete().eq('id', cartItemId);
};

export const updateCartQuantity = async (cartItemId: string, quantity: number) => {
  return await supabase.from('cart_items').update({ quantity }).eq('id', cartItemId);
};

export const clearCart = async (userId: string) => {
  return await supabase.from('cart_items').delete().eq('user_id', userId);
};

export const getOrders = async (userId: string) => {
  return await supabase
    .from('orders')
    .select('*, order_items(*)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
};

export const createOrder = async (orderData: any) => {
  return await supabase.from('orders').insert([orderData]).select();
};

export const createOrderItems = async (items: any[]) => {
  return await supabase.from('order_items').insert(items);
};
