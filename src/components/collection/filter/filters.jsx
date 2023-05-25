import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import PriceRange from "./priceRange";
import { Radio, RadioGroup } from "@mui/material";

const categories = [
  "hoodies",
  "shirts",
  "hats",
  "pants",
  "cosplay costumes",
  "figures",
  "accessories",
  "anime pillow",
  "all",
];
const animeSeries = [
  "Attack on Titan",
  "Demon Slayer",
  "Jujutsu Kaisen",
  "One Piece",
  "Naruto",
  "One Punch Man",
  "Hunter x Hunter",
  "Vinland Saga",
  "Dragon Ball",
];

export default function Filters() {
  const [openStates, setOpenStates] = React.useState({
    openSeries: true,
    openCategories: true,
    openProducts: true,
    openPrice: true,
  });

  const handleClick = (stateName) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [stateName]: !prevState[stateName],
    }));
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filter
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handleClick("openSeries")}>
        <ListItemText primary="ANIME SERIES" />
        {openStates.openSeries ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.openSeries} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {animeSeries.map((item) => (
            <ListItemButton sx={{ pl: 4 }} key={item}>
              <ListItemText secondary={item.toLocaleUpperCase()} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <ListItemButton onClick={() => handleClick("openCategories")}>
        <ListItemText primary="ANIME CATEGORIES" />
        {openStates.openCategories ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((item) => (
            <ListItemButton sx={{ pl: 4 }} key={item}>
              <ListItemText secondary={item.toLocaleUpperCase()} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <ListItemButton onClick={() => handleClick("openProducts")}>
        <ListItemText primary="Products" />
        {openStates.openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.openProducts} timeout="auto" unmountOnExit>
        <List component="div" sx={{ p: 3 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All Products"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="All Products"
              control={<Radio />}
              label="All Products"
            />
            <FormControlLabel
              value="Best Rated"
              control={<Radio />}
              label="Best Rated"
            />
            <FormControlLabel
              value="Latest Arrival"
              control={<Radio />}
              label="Latest Arrival"
            />
          </RadioGroup>
        </List>
      </Collapse>
      <ListItemButton onClick={() => handleClick("openPrice")}>
        <ListItemText primary="Price" />
        {openStates.openPrice ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.openPrice} timeout="auto" unmountOnExit>
        <List component="div" sx={{ p: 3 }}>
          <PriceRange />
        </List>
      </Collapse>
    </List>
  );
}
