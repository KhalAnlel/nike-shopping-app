import React from "react";
import { Link } from "react-router-dom";

const LearnMoreBtn = ({ data }) => {
  return (
    <Link
      to={`/productDetails/${data}`}
      style={{
        padding: "10px",
        backgroundColor: "rgb(117, 158, 255)",
        borderRadius: "10px",
        color: "aliceblue",
      }}
    >
      Learn More
    </Link>
  );
};

export default LearnMoreBtn;
