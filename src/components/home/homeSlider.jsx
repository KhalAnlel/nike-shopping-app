import React from "react";
import SmartSlider from "react-smart-slider";
const slidesArray = [
  {
    url: "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/Add_a_heading_2.png?v=1678281887&width=1880",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0610/0883/8824/files/OTAKU_1.png?v=1678299202&width=1880",
  },
];

export const HomeSlider = () => {
  return (
    <div>
      <SmartSlider slides={slidesArray} autoSlide={true} />
    </div>
  );
};
