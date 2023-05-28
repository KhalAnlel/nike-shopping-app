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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import animeSeries from "../../data/animeSeries.json";
import categories from "../../data/categories.json";

export default function Filters() {
  const navigate = useNavigate();

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

  const [radioValue, setRadioValue] = useState("all");
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setRadioValue(selectedValue);

    switch (selectedValue) {
      case "all":
        navigate("/collection/all");
        break;
      case "best rated":
        navigate("/collection/best rated");
        break;
      case "latest":
        navigate("/collection/latest");
        break;
    }
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
            <Link to={`/collection/${item}`}>
              <ListItemButton sx={{ pl: 4 }} key={item}>
                <ListItemText secondary={item.toLocaleUpperCase()} />
              </ListItemButton>
            </Link>
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
            <Link to={`/collection/${item}`}>
              <ListItemButton sx={{ pl: 4 }} key={item}>
                <ListItemText secondary={item.toLocaleUpperCase()} />
              </ListItemButton>
            </Link>
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
            defaultValue="all"
            name="radio-buttons-group"
            value={radioValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All Products"
            />

            <FormControlLabel
              value="best rated"
              control={<Radio />}
              label="Best Rated"
            />

            <FormControlLabel
              value="latest"
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
