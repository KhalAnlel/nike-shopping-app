import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import "../../styles/search.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/collection/${searchValue}`);
  }
  const handleReset = () => {
    setSearchValue("");
  };

  return (
    <Box m={"auto"} mt={6} width={"500px"}>
      <form class="form" onSubmit={handleSubmit}>
        <IconButton onClick={handleSubmit}>
          <SearchIcon fontSize="medium" />
        </IconButton>
        <input
          className="input"
          placeholder="Search here..."
          required=""
          type="text"
          value={searchValue}
          onChange={handleSearch}
        />
        <IconButton onClick={handleReset}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </form>
    </Box>
  );
};

export default Search;
