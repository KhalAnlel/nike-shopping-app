import React from "react";
import { Link } from "react-router-dom";

const LearnMoreBtn = ({ id }) => {
  return (
    <Link
      to={`/collection/productDetails/${id}`}
      style={{
        padding: "10px",
        backgroundColor: "#000",
        borderRadius: "4px",
        color: "aliceblue",
      }}
    >
      Learn More
    </Link>
  );
};

export default LearnMoreBtn;
