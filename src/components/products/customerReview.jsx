import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Rates from "./review/rates";
import TotalRate from "./review/totalRate";
import AddReviewBtn from "./review/addReviewBtn";
import Reviewers from "./review/reviewers";

const CustomerReview = () => {
  return (
    <Box width="90%" m="auto">
      <Typography fontSize={22} fontWeight={700}>
        Customer Review
      </Typography>
      <TotalRate />
      <Stack direction="row" gap={10}>
        <Box>
          <Rates />
          <AddReviewBtn />
        </Box>
        <Reviewers />
      </Stack>
    </Box>
  );
};

export default CustomerReview;
