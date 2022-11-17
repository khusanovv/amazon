import React from "react";
import HeroBanner from "../../components/hero-banner/HeroBanner";
import Main from "../../components/main/Main";
import ShopsGifts from "../../components/shops-gifts/ShopsGifts";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Main />
      <ShopsGifts />
    </div>
  );
};

export default Home;
