import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

export const ProductColor = ({ availableColors, onColorChange }) => {
  const [color, setColor] = React.useState(availableColors[0]);
  const handleColorClick = (event) => {
    setColor(event.target.value);
    onColorChange(event.target.value); // Pass the selected color
  };
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Colors Available
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={color}
        onChange={handleColorClick}
      >
        {availableColors.map((item) => (
          <FormControlLabel
            value={item}
            key={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ProductColor;
