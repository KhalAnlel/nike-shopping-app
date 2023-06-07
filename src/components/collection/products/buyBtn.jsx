import React from "react";
import "../../../styles/buyBtn.css";
import CartContext from "../../../cartContext";
import { useContext } from "react";

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
    handleAdd(id, quantity, selectedColor, selectedSize, index);
  };
  return (
    <div>
      <div>
        <span className="productPrice">{"$" + finalPrice}</span>
        <button className="btn" onClick={() => handleClick(id)}>
          Add To Cart <br />
        </button>
      </div>
    </div>
  );
};

export default BuyBtn;
