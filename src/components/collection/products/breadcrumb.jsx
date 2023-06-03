import React from "react";
import Link from "@mui/material/Link";
import { Breadcrumbs } from "@mui/material";

const BreadCrumb = ({ title }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ m: "10px" }}>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/collection/all">
        Products
      </Link>
      <Link underline="hover" color="text.primary" href="" aria-current="page">
        {title}
      </Link>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
