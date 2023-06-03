import React from "react";
import "../../../styles/buyBtn.css";
const BuyBtn = ({ price }) => {
  return (
    <div>
      <button className="btn">
        Add To Cart <br />
        <em>{"$" + price}</em>
      </button>
    </div>
  );
};

export default BuyBtn;
