import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FilterDrawer from "./collection/filterDrawer";
import ProductsGrid from "./collection/productsGrid";
import SortBy from "./collection/sortBy";
import PerPage from "./collection/perPage";
import Pages from "./common/pages";
import data from "../data/allProducts.json";
import { filterData, sortDataFunc } from "./collection/dataProcessing";

import Search from "./collection/search";

export const Collection = () => {
  const { category } = useParams();
  const [sortData, setSortData] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const { filteredData, notFound } = filterData(category, data);
  const sortedData = sortDataFunc(sortData, filteredData);

  const totalCards = sortedData.length;
  const cardsPerPage = itemsPerPage;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedData.slice(indexOfFirstCard, indexOfLastCard);

  const handleSortChange = (event) => {
    setSortData(event.target.value);
  };

  const handleItemsPerPageChange = (event, value) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Box p={2} display={"flex"} flexDirection={"column"}>
      <Box>
        <Typography fontWeight={700} fontSize={20}>
          ANIME PRODUCTS
        </Typography>
        <Typography mt={3}>
          Buy High Quality Supercool And Cute Designed Anime For Men Or Women
          With Free Shipping To All Over The World On All Order.
        </Typography>
      </Box>
      <Box m={"auto"} mt={6} width={"350px"}>
        <Search />
      </Box>
      <Box>
        <Stack direction="row" mt={4} alignItems="center" gap={4}>
          <FilterDrawer setCurrentPage={setCurrentPage} />
          <PerPage
            handleItemsPerPageChange={handleItemsPerPageChange}
            itemsPerPage={itemsPerPage}
          />
          <SortBy handleSortChange={handleSortChange} sortData={sortData} />
        </Stack>
        <Stack alignItems="center">
          <ProductsGrid currentCards={currentCards} notFound={notFound} />
          <Stack mt={5}>
            <Pages
              setCurrentPage={setCurrentPage}
              count={Math.ceil(totalCards / cardsPerPage)}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
