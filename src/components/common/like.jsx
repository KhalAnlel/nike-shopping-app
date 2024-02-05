import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useState } from "react";

const Like = ({ id, handleLike, likedItems, size }) => {
  const [clickedItems, setClickedItems] = useState({});
  const isClicked = likedItems.some((item) => item.id === id);
  const handleClick = (id) => {
    setClickedItems((prevState) => ({...prevState,[id]: !prevState[id]}));
    handleLike(id);
  };

  return (
    <div>
      <IconButton
        onClick={() => handleClick(id)}
        color={isClicked ? "error" : "default"}
      >
        {isClicked ? (
          <Favorite fontSize={size} />
        ) : (
          <FavoriteBorder fontSize={size} />
        )}
      </IconButton>
    </div>
  );
};

export default Like;
