import React from "react";
import SmartSlider from "react-smart-slider";
const slidesArray = [
  {
    url: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/bf6ccafa-64c3-4c0f-b6e2-084f4e27af2f/men-s-shoes-clothing-accessories.jpg",
  },
  {
    url: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/16b0e3d3-5323-4733-afe9-519dffe4427e/women-s-shoes-clothing-accessories.jpg",
  },
];

export const HomeSlider = () => {
  return (
    <div>
      <SmartSlider slides={slidesArray} autoSlide={true} />
    </div>
  );
};
