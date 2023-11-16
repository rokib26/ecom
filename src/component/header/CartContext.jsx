// CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    setCartCount((prevCartCount) => prevCartCount + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
    setCartCount((prevCartCount) => prevCartCount - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  const values = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
