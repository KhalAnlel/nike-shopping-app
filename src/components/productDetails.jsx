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
import data from "../data/latestArrivalData.json";
import SmartSlider from "react-smart-slider";
import "../styles/productDetails.css";
import Description from "./products/description";
import LoveBtn from "./products/loveBtn";
import CustomerReview from "./products/customerReview";

export const ProductDetails = () => {
  const { productID } = useParams();
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
            {data[productID - 1].price}
          </Typography>
          <ProductColor colorsAvailable={data[productID - 1].colors} />
          <ProductSize sizeAvailable={data[productID - 1].size} />
          <Stack direction="row" alignItems="center" gap={2}>
            <Quantity stockAvailable={data[productID - 1].stock} />
            <BuyBtn />
            <LoveBtn />
          </Stack>
          <Box maxWidth={500} marginTop={4}>
            <img
              src="https://cdn.shopify.com/s/files/1/0610/0883/8824/files/Untitled_design_5_2a9c7130-6f4c-4643-843b-21be8216a157@2x.png?v=1678414688"
              width="100%"
            />
          </Box>
        </Stack>
      </Box>
      <Description
        images={data[productID - 1]["images"]}
        description={data[productID - 1]["description"]}
        material={data[productID - 1]["material"]}
        itemType={data[productID - 1]["item_type"]}
        style={data[productID - 1]["style"]}
      />
      <CustomerReview />
    </Box>
  );
};
