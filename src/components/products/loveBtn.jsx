import React, { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
const LoveBtn = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <Box>
      <IconButton onClick={handleClick} color={clicked ? "error" : "default"}>
        {clicked ? (
          <Favorite fontSize="large" />
        ) : (
          <FavoriteBorder fontSize="large" />
        )}
      </IconButton>
    </Box>
  );
};

export default LoveBtn;
