import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LS_KEYS } from '../constants';

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    const storedCart = localStorage.getItem(LS_KEYS.CART);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(LS_KEYS.CART, JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product) => {
    setCartProducts((prevCartProducts) => {
      const existingProduct = prevCartProducts.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCartProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCartProducts, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((item) => item.id !== productId)
    );
  };

  const cartCount = useMemo(() => {
    return cartProducts.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartProducts]);

  const value = useMemo(() => {
    return {
      cartProducts,
      cartCount,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
    };
  }, [cartProducts, cartCount]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}

export { CartProvider, useCart };