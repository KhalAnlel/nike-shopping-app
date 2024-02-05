import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (id, quantity, selectedColor, selectedSize, index) => {
    const newItem = {
      id,
      quantity,
      selectedColor,
      selectedSize,
      index: Date.now(),
    };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedList = cartItems.filter((item) => item.index !== itemId);
    setCartItems(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

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
