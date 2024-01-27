import React from "react";
import Pagination from "@mui/material/Pagination";
const Pages = ({ setCurrentPage, count }) => {
  return (
    <Pagination
      sx={{ margin: "auto"}}
      hidePrevButton
      hideNextButton
      count={count}
      onChange={(event) => setCurrentPage(event.target.textContent)}
    />
  );
};

export default Pages;
