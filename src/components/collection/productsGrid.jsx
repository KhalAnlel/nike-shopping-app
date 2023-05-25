import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import data from "../../data/allProducts.json";
import "../../styles/collection.css";
import { Link } from "react-router-dom";

const ProductsGrid = ({ category, page, sort }) => {
  const [clickedItems, setClickedItems] = useState({});

  const handleClick = (id) => {
    setClickedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  let filteredData = "";
  if (category) {
    filteredData = data.filter((item) => item.type === category);
  }
  if (category === "all") {
    filteredData = data;
  }
  if (category === "latest") {
    filteredData = data.slice(-50).reverse();
  }
  if (category === "best rated") {
    filteredData = data
      .filter((item) => item.rate >= 4)
      .sort((a, b) => b.rate - a.rate);
  }

  switch (sort) {
    case "A-Z":
      filteredData = [...filteredData].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;
    case "Z-A":
      filteredData = [...filteredData].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;
    case "old-new":
      // No changes needed for this case
      break;
    case "new-old":
      filteredData = [...filteredData].reverse();
      break;
    case "low-high":
      filteredData = [...filteredData].sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      filteredData = [...filteredData].sort((a, b) => b.price - a.price);
      break;
    case "Best Rated":
      filteredData = [...filteredData].sort((a, b) => b.rate - a.rate);
      break;
    default:
      // Handle the case when sort is not one of the specified options
      break;
  }

  let slicedData = filteredData.slice(0, page);

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap={3}
      justifyContent="center"
      mt={2}
    >
      {slicedData.map((item) => {
        const isClicked = clickedItems[item.id];
        return (
          <Box className="card" key={item.id}>
            <Box className="image">
              <img src={item["images"][0].url} width="100%" height="240px" />
              <Link to={`/productDetails/${item.id}`} className="button">
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
              <Typography className="price">{item.price}</Typography>
              <IconButton
                onClick={() => handleClick(item.id)}
                color={isClicked ? "error" : "default"}
              >
                {isClicked ? (
                  <Favorite fontSize="medium" />
                ) : (
                  <FavoriteBorder fontSize="medium" />
                )}
              </IconButton>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProductsGrid;
