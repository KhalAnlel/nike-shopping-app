import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button, Stack, TextField } from "@mui/material";

export default function PriceRange() {
  const [value, setValue] = React.useState([20, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTextFieldChange = (event, index) => {
    const newValue = event.target.value;
    const newValues = [...value];
    newValues[index] = newValue;
    setValue(newValues);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        value={value}
        onChange={handleChange}
        max={250}
        step={5}
        min={5}
      />
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        justifyContent="center"
        mt={2}
      >
        <Stack direction="row" justifyContent="center" gap={2}>
          <TextField
            inputProps={{
              max: value[1] - 1,
              min: 5,
            }}
            value={value[0]}
            id="outlined-number"
            label="Min"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "80px" }}
            onChange={(event) => handleTextFieldChange(event, 0)}
          />
          <TextField
            inputProps={{
              max: 250,
              min: value[0] + 1,
            }}
            value={value[1]}
            id="outlined-number"
            label="Max"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "80px" }}
            onChange={(event) => handleTextFieldChange(event, 1)}
          />
        </Stack>
        <Button variant="contained" sx={{backgroundColor:"black"}}>Apply</Button>
      </Box>
    </Box>
  );
}
