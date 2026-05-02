import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Cart, CartContextType } from '../types/cart';
import { Product } from '../types';
import { useAuth } from './AuthContext';
import { getCart, addToCart as addToCartInDB, removeFromCart as removeFromCartInDB, updateCartQuantity as updateCartInDB, clearCart as clearCartInDB } from '../lib/supabase';

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'glowskin_cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });

  // Sync with Supabase on mount and user change
  useEffect(() => {
    async function syncCart() {
      if (user) {
        try {
          const { data, error } = await getCart(user.id);
          if (data && !error) {
            const supabaseItems: CartItem[] = data.map((item: any) => ({
              id: item.id,
              productId: item.product_id,
              name: item.products?.name || 'Unknown Product',
              price: item.products?.price || item.price_at_time,
              quantity: item.quantity,
              image_url: item.products?.image_url || '',
              category: item.products?.category || '',
            }));
            
            const [totalItems, totalPrice] = calculateTotals(supabaseItems);
            setCart({
              items: supabaseItems,
              totalItems,
              totalPrice
            });
            return;
          }
        } catch (err) {
          console.error('Failed to sync with Supabase cart:', err);
        }
      }

      // Fallback to localStorage if not logged in or sync fails
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          if (parsedCart && Array.isArray(parsedCart.items)) {
            const [totalItems, totalPrice] = calculateTotals(parsedCart.items);
            setCart({
              ...parsedCart,
              totalItems,
              totalPrice
            });
          }
        } catch (error) {
          console.error('Failed to parse cart from localStorage:', error);
        }
      }
    }
    
    syncCart();
  }, [user]);

  // Save cart to localStorage whenever it changes (for guest users)
  useEffect(() => {
    if (!user) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, user]);

  // Calculate totals
  const calculateTotals = (items: CartItem[]): [number, number] => {
    const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    const totalPrice = items.reduce((sum, item) => {
      return sum + (item.price || 0) * (item.quantity || 0);
    }, 0);
    return [totalItems, totalPrice];
  };

  const addToCart = async (product: Product, quantity: number) => {
    if (quantity <= 0) return;

    if (user) {
      try {
        await addToCartInDB(user.id, product.id, quantity, product.price);
        // Refresh cart from DB after adding
        const { data } = await getCart(user.id);
        if (data) {
          const supabaseItems: CartItem[] = data.map((item: any) => ({
            id: item.id,
            productId: item.product_id,
            name: item.products?.name || 'Unknown Product',
            price: item.products?.price || item.price_at_time,
            quantity: item.quantity,
            image_url: item.products?.image_url || '',
            category: item.products?.category || '',
          }));
          const [totalItems, totalPrice] = calculateTotals(supabaseItems);
          setCart({ items: supabaseItems, totalItems, totalPrice });
          return;
        }
      } catch (err) {
        console.error('Failed to add to Supabase cart:', err);
      }
    }

    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (item) => item.productId === product.id
      );

      let newItems: CartItem[];

      if (existingItem) {
        newItems = prevCart.items.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image_url: product.image_url,
          category: product.category,
        };
        newItems = [...prevCart.items, newItem];
      }

      const [totalItems, totalPrice] = calculateTotals(newItems);
      return { items: newItems, totalItems, totalPrice };
    });
  };

  const removeFromCart = async (productId: string) => {
    const itemToRemove = cart.items.find(item => item.productId === productId);
    
    if (user && itemToRemove?.id) {
      try {
        await removeFromCartInDB(itemToRemove.id);
      } catch (err) {
        console.error('Failed to remove from Supabase cart:', err);
      }
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.productId !== productId);
      const [totalItems, totalPrice] = calculateTotals(newItems);
      return { items: newItems, totalItems, totalPrice };
    });
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity < 0) return;

    const itemToUpdate = cart.items.find(item => item.productId === productId);

    if (user && itemToUpdate?.id) {
      try {
        if (quantity === 0) {
          await removeFromCartInDB(itemToUpdate.id);
        } else {
          await updateCartInDB(itemToUpdate.id, quantity);
        }
      } catch (err) {
        console.error('Failed to update Supabase cart quantity:', err);
      }
    }

    setCart((prevCart) => {
      let newItems: CartItem[];

      if (quantity === 0) {
        newItems = prevCart.items.filter((item) => item.productId !== productId);
      } else {
        newItems = prevCart.items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        );
      }

      const [totalItems, totalPrice] = calculateTotals(newItems);
      return { items: newItems, totalItems, totalPrice };
    });
  };

  const clearCart = async () => {
    if (user) {
      try {
        await clearCartInDB(user.id);
      } catch (err) {
        console.error('Failed to clear Supabase cart:', err);
      }
    }
    
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0,
    });
  };

  const getTotalPrice = (): number => {
    return cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalItems = (): number => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
