import React from "react";
import { BestRated } from "./home/bestRated";
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
      <BestRated />
    </div>
  );
};
