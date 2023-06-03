import { useEffect } from "react";
import { createContext, useState } from "react";
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
  useEffect(() => {
    const storedItems = localStorage.getItem("wishlist");
    if (storedItems) {
      setLikedItems(JSON.parse(storedItems));
    }
  }, []);

  // Update local storage whenever liked items change
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(likedItems));
  }, [likedItems]);

  return (
    <WishlistContext.Provider value={{ handleLike, likedItems }}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContext;
