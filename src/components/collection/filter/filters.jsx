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

export default function Filters() {
  const [openSeries, setOpenSeries] = React.useState(true);
  const [openAvailability, setOpenAvailability] = React.useState(true);
  const [openPrice, setOpenPrice] = React.useState(true);

  const handleClickSeries = () => {
    setOpenSeries(!openSeries);
  };
  const handleClickAvailability = () => {
    setOpenAvailability(!openAvailability);
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
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Attack on Titan" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Demon Slayer" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Jujutsu Kaisen" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="One Piece" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Naruto" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="One Punch Man" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Hunter x Hunter" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Vinland Saga" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Dragon Ball" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickAvailability}>
        <ListItemText primary="AVAILABILITY" />
        {openAvailability ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAvailability} timeout="auto" unmountOnExit>
        <List component="div" sx={{ p: 3 }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="In Stock"
            />
            <FormControlLabel control={<Checkbox />} label="Out of Stock" />
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
