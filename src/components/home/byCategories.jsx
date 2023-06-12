import { Box, CardActionArea, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";

const categories = [
  {
    id: 1,
    title: "hoodies",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/product-image-1757593221_785x.webp?v=1651586729",
  },
  {
    id: 2,
    title: "hats",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/product-image-1928396145_640x.jpg?v=1645283590",
  },
  {
    id: 3,
    title: "figures",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/product-image-1903216555_785x.jpg?v=1645335007",
  },
  {
    id: 4,
    title: "shirts",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/product-image-1839473909_785x.jpg?v=1645351306",
  },
  {
    id: 5,
    title: "accessories",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/product-image-1856352329_785x.webp?v=1650109914",
  },
  {
    id: 6,
    title: "pants",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/product-image-1500807474_640x.jpg?v=1645336217",
  },
  {
    id: 7,
    title: "cosplay ",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/H79a2e88db99545a89be32c4c9a84f902Z_785x.jpg?v=1645335329",
  },
  {
    id: 8,
    title: "anime pillows",
    imageUrl: "https://www.pngmart.com/files/10/Anime-Pillow-PNG-Picture.png",
  },
];

export const ByCategories = () => {
  return (
    <>
      <Box marginTop={7}>
        <Typography textAlign="center" variant="h4" fontWeight={700}>
          SEARCH BY CATEGORY
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <LaunchIcon fontSize="small" sx={{ marginTop: "3px" }} />
          <Link to="/collection/all">View All</Link>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
        m={"auto"}
        marginTop={4}
        sx={{ width: { md: "70%", sm: "90%" } }}
      >
        {categories.map((item) => (
          <Box key={item.id} maxWidth={180} boxShadow={2} margin="auto">
            <CardActionArea href={`collection/${item.title}`}>
              <CardMedia
                component="img"
                alt={item.title}
                image={item.imageUrl}
              />
              <Typography textAlign={"center"}>
                {item.title.toLocaleUpperCase()}
              </Typography>
            </CardActionArea>
          </Box>
        ))}
      </Box>
    </>
  );
};
