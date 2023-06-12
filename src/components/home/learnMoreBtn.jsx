import React from "react";
import { Link } from "react-router-dom";

const LearnMoreBtn = ({ data }) => {
  return (
    <Link
      to={`/collection/productDetails/${data}`}
      style={{
        padding: "10px",
        backgroundColor: "#3b71ca",
        borderRadius: "4px",
        color: "aliceblue",
      }}
    >
      Learn More
    </Link>
  );
};

export default LearnMoreBtn;
