import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Cart, CartContextType } from '../types/cart';
import { Product } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'glowskin_cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
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
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Calculate totals
  const calculateTotals = (items: CartItem[]): [number, number] => {
    const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
    const totalPrice = items.reduce((sum, item) => {
      const price = typeof item.price === 'string' ? parseFloat(String(item.price).replace(/[^0-9.]/g, '')) : item.price;
      const validPrice = isNaN(price) ? 0 : price;
      return sum + validPrice * (item.quantity || 0);
    }, 0);
    return [totalItems, totalPrice];
  };

  const addToCart = (product: Product, quantity: number) => {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (item) => item.productId === product.id
      );

      let newItems: CartItem[];

      if (existingItem) {
        // Product already in cart - update quantity
        newItems = prevCart.items.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // New product - add to cart
        const priceValue = parseFloat(product.price.replace(/[^0-9.]/g, ''));
        const newItem: CartItem = {
          productId: product.id,
          name: product.name,
          price: isNaN(priceValue) ? 0 : priceValue,
          quantity,
          image_url: product.image_url,
          category: product.category,
        };
        newItems = [...prevCart.items, newItem];
      }

      const [totalItems, totalPrice] = calculateTotals(newItems);

      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.productId !== productId);
      const [totalItems, totalPrice] = calculateTotals(newItems);

      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 0) return;

    setCart((prevCart) => {
      let newItems: CartItem[];

      if (quantity === 0) {
        // Remove item if quantity is 0
        newItems = prevCart.items.filter((item) => item.productId !== productId);
      } else {
        // Update quantity
        newItems = prevCart.items.map((item) =>
          item.productId === productId
            ? { ...item, quantity }
            : item
        );
      }

      const [totalItems, totalPrice] = calculateTotals(newItems);

      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  };

  const clearCart = () => {
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
