import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Rates from "./review/rates";
import TotalRate from "./review/totalRate";
import AddReview from "./review/addReview";
import Reviewers from "./review/reviewers";
import SortBy from "./review/sortBy";

const CustomerReview = () => {
  return (
    <Box width="90%" m="auto">
      <Stack direction="row" alignItems="center" width="100%">
        <Typography fontSize={22} fontWeight={700}>
          Customer Review
        </Typography>
        <SortBy />
      </Stack>
      <TotalRate />
      <Stack direction="row" gap={10}>
        <Box>
          <Rates />
          <AddReview />
        </Box>
        <Reviewers />
      </Stack>
    </Box>
  );
};

export default CustomerReview;
