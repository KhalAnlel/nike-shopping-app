import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SortBy = () => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <Box marginLeft="auto">
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sort}
          onChange={handleChange}
          autoWidth
          label="Sort By"
          defaultValue="Date"
        >
          <MenuItem value="Date">Date</MenuItem>
          <MenuItem value="Rate">Rate</MenuItem>
          <MenuItem value="Content">Content</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;
