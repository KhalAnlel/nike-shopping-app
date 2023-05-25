import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Filter from "./collection/filter";
import ProductsGrid from "./collection/productsGrid";
import SortBy from "./collection/sortBy";
import PerPage from "./collection/perPage";
import CollectionPagination from "./collection/collectionPagination";

export const Collection = () => {
  const [page, setPage] = React.useState("20");

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const [sort, setSort] = React.useState("new-old");

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };
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
          <PerPage handlePageChange={handlePageChange} page={page} />
          <SortBy handleSortChange={handleSortChange} sort={sort} />
        </Stack>
        <Stack alignItems="center">
          <ProductsGrid category={category} page={page} sort={sort} />
          <CollectionPagination />
        </Stack>
      </Box>
    </Box>
  );
};
