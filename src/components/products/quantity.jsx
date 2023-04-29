import React from "react";
import { TextField } from "@mui/material";

const Quantity = ({ stockAvailable }) => {
  return (
    <TextField
      InputProps={{
        inputProps: {
          max: stockAvailable,
          min: 1,
        },
      }}
      defaultValue={1}
      id="outlined-number"
      label="Quantity"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      sx={{ width: "80px" }}
    />
  );
};

export default Quantity;
