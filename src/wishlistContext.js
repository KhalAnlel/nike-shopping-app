import React, { createContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [likedItems, setLikedItems] = useState([]);

  const handleLike = (id) => {
    const itemExists = likedItems.some((item) => item.id === id);
    if (!itemExists) {
      const newItem = { id };
      setLikedItems([...likedItems, newItem]);
    } else {
      const updatedItems = likedItems.filter((item) => item.id !== id);
      setLikedItems(updatedItems);
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedList = likedItems.filter((item) => item.id !== itemId);
    setLikedItems(updatedList);
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("wishlist");
    if (storedItems) {
      setLikedItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(likedItems));
  }, [likedItems]);

  const count = likedItems.length;

  return (
    <WishlistContext.Provider
      value={{ handleLike, likedItems, count, handleRemoveItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContext;
