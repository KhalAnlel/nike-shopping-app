import React from "react";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, size, theme) {
  return {
    fontWeight:
      size.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const ProductSize = ({ availableSizes, onSizeChange }) => {
  const theme = useTheme();
  const [size, setSize] = React.useState([availableSizes[0]]);

  const handleSizeClick = (event) => {
    setSize(event.target.value);
    onSizeChange(event.target.value);
  };
  return (
    <FormControl sx={{ marginBottom: 2, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Size</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={size}
        onChange={handleSizeClick}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
        required
      >
        {availableSizes.map((item) => (
          <MenuItem
            key={item}
            value={item}
            style={getStyles(item, size, theme)}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProductSize;
