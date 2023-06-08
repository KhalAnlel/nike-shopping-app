import React from "react";
import "../../../styles/buyBtn.css";
import CartContext from "../../../cartContext";
import { useContext } from "react";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const BuyBtn = ({
  finalPrice,
  id,
  quantity,
  selectedColor,
  selectedSize,
  index,
}) => {
  const { cartItems, handleAdd } = useContext(CartContext);
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
    <div>
      <div>
        <span className="productPrice">{"$" + finalPrice}</span>
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
      </div>
    </div>
  );
};

export default BuyBtn;
