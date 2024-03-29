import React from "react";
import data from "../../data/allProducts.json";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../../cartContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems, handleRemoveItem } = useContext(CartContext);
  const handleDelete = (itemId) => {
    handleRemoveItem(itemId);
  };
  // Filter the data based on the cartItems array
  const filteredData = cartItems.map((item) => {
    const product = data.find((product) => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      index: item.index,
      color: item.selectedColor,
      size: item.selectedSize,
    };
  });

  return (
    <Box p={2} display={"flex"} flexDirection={"column"} gap={2}>
      {filteredData.length === 0 ? (
        <p>Empty Cart</p>
      ) : (
        filteredData.map((item, index) => (
          <Box key={item.id}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={1}
              justifyContent="space-around"
            >
              <img
                src={item["images"][0].url}
                width="55px"
                height="55px"
                style={{ borderRadius: "50%" }}
                alt={item["images"][0].url}
              />
              <Stack>
                <Typography
                  fontSize="smaller"
                  fontWeight={600}
                  width={"120px"}
                  sx={{
                    "& a": {
                      color: "#000",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#3b71ca",
                      },
                    },
                  }}
                >
                  <Link to={`/collection/productDetails/${item.id}`}>
                    {item.title.split(" ").slice(0, 3).join(" ")}
                  </Link>
                </Typography>
                <Typography fontSize={12} fontStyle={"italic"}>
                  {item.color} / {item.size}
                </Typography>
              </Stack>
              <Typography>${Math.ceil(item.price * item.quantity)}</Typography>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => handleDelete(item.index)}
              >
                <DeleteIcon color="error"/>
              </IconButton>
            </Box>
          </Box>
        ))
      )}
      {filteredData.length >= 1 && (
        <Typography
          textAlign={"center"}
          mt={1}
          sx={{
            "& a": {
              color: "#000",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "blue",
              },
            },
          }}
        >
          <Link to={`/checkout/`}>View All</Link>
        </Typography>
      )}
    </Box>
  );
};

export default Cart;
