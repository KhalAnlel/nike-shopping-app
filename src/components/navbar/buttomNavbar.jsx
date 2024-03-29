import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import categories from "../../data/categories.json";

export default function ButtomNavbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ bgcolor: "#f2f2f2", display: "flex", justifyContent: "center" }}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
        value={value}
        onChange={handleChange}
        indicatorColor={""}
      >
        {categories.map((item) => (
          <Link
            key={item.title}
            to={`/collection/${item.title}`}
            className="link"
          >
            <Tab key={item.title} label={`${item.title}`} />
          </Link>
        ))}
      </Tabs>
    </Box>
  );
}
