import React from "react";
import { TextField } from "@mui/material";

const Quantity = ({ stockAvailable, quantity, onQuantityChange }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    onQuantityChange(newQuantity);
  };
  return (
    <TextField
      InputProps={{
        inputProps: {
          max: stockAvailable,
          min: 1,
        },
      }}
      defaultValue={quantity}
      id="outlined-number"
      label="Quantity"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      sx={{ width: "80px" }}
      onChange={handleQuantityChange}
    />
  );
};

export default Quantity;
