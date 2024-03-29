import React from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/collection.css";
import { Link } from "react-router-dom";
import Like from "../common/like";
import WishlistContext from "../../wishlistContext";
import { useContext } from "react";

const ProductsGrid = ({ currentCards, notFound }) => {
  const { likedItems, handleLike } = useContext(WishlistContext);
  if (notFound) {
    return <Typography>No items found.</Typography>;
  }
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap={3}
      justifyContent="center"
      mt={2}
    >
      {currentCards.map((item) => {
        return (
          <Box className="card" key={item.id}>
            <Box className="image">
              <img
                src={item["images"][0].url}
                alt={item.title}
                width="90%"
                height="240px"
              />
              <Link
                to={`/collection/productDetails/${item.id}`}
                className="button"
              >
                BUY
              </Link>
            </Box>
            <Typography className="title">{item.title}</Typography>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography className="price">${item.price}</Typography>
              <Like
                id={item.id}
                handleLike={handleLike}
                likedItems={likedItems}
                size={"medium"}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProductsGrid;
