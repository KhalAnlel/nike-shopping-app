import React from "react";
import data from "../../data/allProducts.json";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import WishlistContext from "../../wishlistContext";
import { useContext } from "react";

const WishList = () => {
  const { likedItems, handleRemoveItem } = useContext(WishlistContext);

  const handleDelete = (itemId) => {
    handleRemoveItem(itemId);
  };

  // Filter the data based on the likedItems array
  const filteredData = likedItems.map((item) =>
    data.find((product) => product.id === item.id)
  );

  return (
    <Box p={2} display={"flex"} flexDirection={"column"} gap={2}>
      {filteredData.length === 0 ? (
        <p>No Favorites</p>
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
              />
              <Typography
                fontSize="smaller"
                fontWeight={500}
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
              <Typography color={"red"}>${item.price}</Typography>
              <IconButton color="primary" aria-label="add to shopping cart">
                <DeleteIcon onClick={() => handleDelete(item.id)} />
              </IconButton>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default WishList;
