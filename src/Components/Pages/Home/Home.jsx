import React from "react";
import Banner from "./Banner/Banner";
import HomeCategory from "./HomeCategory/HomeCategory";
import DiscountSlider from "./DiscountSlider/DiscountSlider";
import HealthTips from "./HealthTips/HealthTips";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <HomeCategory></HomeCategory>
      <DiscountSlider></DiscountSlider>
      <HealthTips></HealthTips>
    </div>
  );
}
