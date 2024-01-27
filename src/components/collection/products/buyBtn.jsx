import React from "react";
import "../../../styles/buyBtn.css";
import CartContext from "../../../cartContext";
import { useContext } from "react";
import { Box, Chip, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const BuyBtn = ({
  finalPrice,
  id,
  quantity,
  selectedColor,
  selectedSize,
  index,
}) => {
  const { handleAdd } = useContext(CartContext);
  const handleClick = (id) => {
    handleAdd(id, quantity, selectedColor, selectedSize, null);
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <Box display={"flex"} gap={2} alignItems={"center"}>
      <Chip
        label={"$" + finalPrice}
        color="primary"
        sx={{ p: "5px", fontSize: "16px", fontWeight: 600 }}
      />

      <button className="btn" onClick={() => handleClick(id)}>
        Add To Cart <br />
      </button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added to Cart"
        action={action}
      />
    </Box>
  );
};

export default BuyBtn;
