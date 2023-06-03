import React from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const TotalRate = () => {
  return (
    <Stack direction="row" alignItems="center" gap={2} marginTop={2}>
      <Box
        bgcolor="black"
        p={2}
        borderRadius={3}
        width="fit-content"
        color="white"
        fontSize={24}
        fontWeight={700}
      >
        5.0
      </Box>
      <Typography>Based on 21 reviews</Typography>
    </Stack>
  );
};

export default TotalRate;
