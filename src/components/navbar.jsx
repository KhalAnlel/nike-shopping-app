import React from "react";
import TopNavbar from "./navbar/topNavbar";
import ButtomNavbar  from "./navbar/buttomNavbar";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <div>
      <TopNavbar />
      <ButtomNavbar />
    </div>
  );
};
