import React from "react";
import data from "../../data/allProducts.json";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const WishList = () => {
  const likedItems = localStorage.getItem("wishlist");

  // Convert the likedItems string to an array
  const likedItemsArray = JSON.parse(likedItems);

  // Filter the data based on the likedItems array
  const filteredData = likedItemsArray.map((item) =>
    data.find((product) => product.id === item.id)
  );

  return (
    <Box p={2}>
      {filteredData.length === 0 ? (
        <p>No Favorites</p>
      ) : (
        filteredData.map((item, index) => (
          <Box key={item.id}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <img src={item["images"][0].url} width="35px" height="35px" />
              <Typography fontSize="smaller" fontWeight={500}>
                <Link to={`/collection/productDetails/${item.id}`}>
                  {item.title.split(" ").slice(0, 2).join(" ")}
                </Link>
              </Typography>
            </Box>
            {index !== filteredData.length - 1 && (
              <Box height="1px" width="100%" bgcolor="#333" mt={1} mb={1}></Box>
            )}
          </Box>
        ))
      )}
    </Box>
  );
};

export default WishList;
