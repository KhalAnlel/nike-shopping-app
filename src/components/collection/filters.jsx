import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Radio, RadioGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import categories from "../../data/categories.json";

export default function Filters({ setCurrentPage }) {
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

  const [radioValue, setRadioValue] = useState("");
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setRadioValue(selectedValue);
    setCurrentPage(1);

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
      default:
        navigate("/collection/all");
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
      <ListItemButton onClick={() => handleClick("openCategories")}>
        <ListItemText primary="ANIME CATEGORIES" />
        {openStates.openCategories ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((item) => (
            <Link to={`/collection/${item.title}`}>
              <ListItemButton sx={{ pl: 4 }} key={item}>
                <ListItemText secondary={item.title.toLocaleUpperCase()} />
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
            defaultValue=""
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
    </List>
  );
}
