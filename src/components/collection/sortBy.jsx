import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SortBy = ({ handleSortChange, sort }) => {
  return (
    <Box>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sort}
          onChange={handleSortChange}
          autoWidth
          label="Sort By"
        >
          <MenuItem value="Best Rated">Best Rated</MenuItem>
          <MenuItem value="A-Z">A-Z</MenuItem>
          <MenuItem value="Z-A">Z-A</MenuItem>
          <MenuItem value="low-high">Price Low-High</MenuItem>
          <MenuItem value="high-low">Price High-Low</MenuItem>
          <MenuItem value="old-new">Date Old-New</MenuItem>
          <MenuItem value="new-old">Date New-Old</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;
