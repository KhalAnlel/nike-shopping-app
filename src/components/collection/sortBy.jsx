import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SortBy = () => {
  const [sort, setSort] = React.useState("Featured");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <Box>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sort}
          onChange={handleChange}
          autoWidth
          label="Sort By"
        >
          <MenuItem value="Best Rated">Best Rated</MenuItem>
          <MenuItem value="A-Z">A-Z</MenuItem>
          <MenuItem value="Z-A">Z-A</MenuItem>
          <MenuItem value="Price low-high">Price low-high</MenuItem>
          <MenuItem value="Price high-low">Price high-low</MenuItem>
          <MenuItem value="Date old-new">Date old-new</MenuItem>
          <MenuItem value="Date new-old">Date new-old</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;
