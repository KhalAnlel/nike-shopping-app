import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const AddReviewBtn = () => {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          marginTop: "20px",
          color: "white",
          fontSize: "small",
          fontWeight: "700",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
        Write A Review
      </Button>
    </Box>
  );
};

export default AddReviewBtn;
