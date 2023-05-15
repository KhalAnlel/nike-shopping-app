import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PriceRange from "./priceRange";

const categories = [
  "hoodies",
  "shirts",
  "hats",
  "pants",
  "cosplay costumes",
  "figures",
  "accessories",
  "anime pillow",
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
  const [openSeries, setOpenSeries] = React.useState(true);
  const [openCategories, setOpenCategories] = React.useState(true);
  const [openProducts, setOpenProducts] = React.useState(true);
  const [openPrice, setOpenPrice] = React.useState(true);

  const handleClickSeries = () => {
    setOpenSeries(!openSeries);
  };
  const handleClickCategories = () => {
    setOpenCategories(!openCategories);
  };
  const handleClickProducts = () => {
    setOpenProducts(!openProducts);
  };
  const handleClickPriceSlider = () => {
    setOpenPrice(!openPrice);
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
      <ListItemButton onClick={handleClickSeries}>
        <ListItemText primary="ANIME SERIES" />
        {openSeries ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSeries} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {animeSeries.map((item) => {
            return (
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText secondary={item.toLocaleUpperCase()} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickCategories}>
        <ListItemText primary="ANIME CATEGORIES" />
        {openCategories ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((item) => {
            return (
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText secondary={item.toLocaleUpperCase()} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickProducts}>
        <ListItemText primary="Products" />
        {openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProducts} timeout="auto" unmountOnExit>
        <List component="div" sx={{ p: 3 }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="All Products"
            />
            <FormControlLabel control={<Checkbox />} label="Latest Arrival" />
            <FormControlLabel control={<Checkbox />} label="Best Selling" />
          </FormGroup>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickPriceSlider}>
        <ListItemText primary="Price" />
        {openPrice ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPrice} timeout="auto" unmountOnExit>
        <List component="div" sx={{ p: 3 }}>
          <PriceRange />
        </List>
      </Collapse>
    </List>
  );
}
