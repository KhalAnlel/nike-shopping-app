import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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

export const ButtomNavbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ bgcolor: "#fafafa", display: "flex", justifyContent: "center" }}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
        value={value}
        onChange={handleChange}
        indicatorColor={""}
      >
        {categories.map((item) => (
          <Link key={item} to={`/collection/${item}`} className="link">
            <Tab key={item} label={`${item}`} />
          </Link>
        ))}
      </Tabs>
    </Box>
  );
};
