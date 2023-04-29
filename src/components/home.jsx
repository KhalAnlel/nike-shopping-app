import React from "react";
import "../styles/home.css";
import { Footer } from "./footer";
import { BestSelling } from "./home/bestSelling";
import { ByCategories } from "./home/byCategories";
import { HomeSlider } from "./home/homeSlider";
import { LatestArrival } from "./home/latestArrival";
import { WhyUs } from "./home/whyUs";

export const Home = () => {
  return (
    <div>
      <HomeSlider />
      <WhyUs />
      <LatestArrival />
      <ByCategories />
      <BestSelling />
      <Footer />
    </div>
  );
};
