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
    navigate(`/collection`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <IconButton onClick={handleSubmit} sx={{ ml: "10px" }}>
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
      <IconButton onClick={handleReset} sx={{ mr: "10px" }}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </form>
  );
};

export default Search;
