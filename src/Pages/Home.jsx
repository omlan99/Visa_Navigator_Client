import React from "react";
import Latest from "../Component/Latest";
import About from "../Component/About";
import Newsletter from "../Component/Newsletter";
import Slider from "../Component/Sllider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Latest></Latest>
      <About></About>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
