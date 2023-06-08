import React from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Box, Stack, Typography } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BreadCrumb from "./products/breadcrumb";
import ProductColor from "./products/productColor";
import ProductSize from "./products/productSize";
import Quantity from "./products/quantity";
import BuyBtn from "./products/buyBtn";
import SmartSlider from "react-smart-slider";
import Description from "./products/description";
import CustomerReview from "./products/customerReview";
import data from "../../data/allProducts.json";
import "../../styles/productDetails.css";
import { useState } from "react";
import Like from "../common/like";
import WishlistContext from "../../wishlistContext";
import { useContext } from "react";

export const ProductDetails = () => {
  const { productID } = useParams();
  const { likedItems, handleLike } = useContext(WishlistContext);

  const availableColors = data[productID - 1].colors;
  const availableSizes = data[productID - 1].size;

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const finalPrice = Math.ceil(data[productID - 1].price * quantity);
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-around"
        sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}
      >
        <Box>
          <BreadCrumb title={data[productID - 1].title} />
          <Box
            sx={{ width: { xs: "90%", sm: "80%", md: "90%" }, margin: "auto" }}
          >
            <SmartSlider
              slides={data[productID - 1]["images"]}
              autoSlide={true}
            />
          </Box>
        </Box>
        <Stack direction="column" marginTop={7} gap={2} p={2}>
          <Typography fontSize={20} fontWeight={600}>
            {data[productID - 1].title}
          </Typography>
          <Rating name="read-only" value={data[productID - 1].rate} readOnly />
          <Typography display="flex" color="red" alignItems="center">
            <LocalFireDepartmentIcon />
            {data[productID - 1].stock} in stock
          </Typography>
          <Typography fontSize={18} fontWeight={600}>
            ${data[productID - 1].price}
          </Typography>
          <ProductColor
            availableColors={availableColors}
            onColorChange={handleColorChange}
            selectedColor={selectedColor}
          />
          <ProductSize
            availableSizes={availableSizes}
            onSizeChange={handleSizeChange}
            selectedSize={selectedSize}
          />
          <Stack direction="row" alignItems="center" gap={2}>
            <Quantity
              stockAvailable={data[productID - 1].stock}
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
            <BuyBtn
              finalPrice={finalPrice}
              quantity={quantity}
              id={data[productID - 1].id}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
            <Like
              id={data[productID - 1].id}
              handleLike={handleLike}
              likedItems={likedItems}
            />
          </Stack>
          <Box maxWidth={500} marginTop={4}>
            <img
              src="https://cdn.shopify.com/s/files/1/0610/0883/8824/files/Untitled_design_5_2a9c7130-6f4c-4643-843b-21be8216a157@2x.png?v=1678414688"
              width="100%"
              alt={data[productID - 1].title}
            />
          </Box>
        </Stack>
      </Box>
      <Description
        images={data[productID - 1]["images"]}
        description={data[productID - 1]["description"]}
        material={data[productID - 1]["material"]}
        itemType={data[productID - 1]["type"]}
      />
      <CustomerReview />
    </Box>
  );
};
