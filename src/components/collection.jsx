import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Filter from "./collection/filter";
import ProductsGrid from "./collection/productsGrid";
import SortBy from "./collection/sortBy";
import PerPage from "./collection/perPage";
import CollectionPagination from "./collection/collectionPagination";

export const Collection = () => {
  const { category } = useParams();
  return (
    <Box p={2}>
      <Box>
        <Typography fontWeight={700} fontSize={20}>
          ANIME {category === "all" ? "PRODUCTS" : `${category.toUpperCase()} `}
        </Typography>
        <Typography mt={3}>
          Buy High Quality Supercool And Cute Designed Anime{" "}
          {category ? `${category} ` : ""}For Men Or Women With Free Shipping To
          All Over The World On All Order.
        </Typography>
      </Box>
      <Box>
        <Stack
          direction="row"
          mt={4}
          alignItems="center"
          justifyContent="flex-end"
          gap={4}
        >
          <Filter />
          <PerPage />
          <SortBy />
        </Stack>
        <Stack alignItems="center">
          <ProductsGrid category={category} />
          <CollectionPagination />
        </Stack>
      </Box>
    </Box>
  );
};
