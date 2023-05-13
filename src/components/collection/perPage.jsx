import React from "react";
import { Typography, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PerPage = () => {
  const [age, setAge] = React.useState("20");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Items/Page</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Items/page"
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={30}>40</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PerPage;
