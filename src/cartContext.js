import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (id, quantity, selectedColor, selectedSize, index) => {
    const newItem = { id, quantity, selectedColor, selectedSize, index };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedList = cartItems.filter((item) => item.index !== itemId);
    setCartItems(updatedList);
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const countCart = cartItems.length;

  return (
    <CartContext.Provider
      value={{ handleAdd, cartItems, countCart, handleRemoveItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
