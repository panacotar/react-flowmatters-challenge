import React, { useState } from "react";

import "./Slider.scss";
import Arrow from "./Arrow";
import Slide from "./Slide.jsx";
import slideData from "../../../data/slides-data.json";

const Slider = () => {
  const [activeIx, setActiveIx] = useState(0);
  const dataLength = slideData.length;

  const prevSlide = () => {
    let ix = activeIx;
    ix < 1 ? (ix = dataLength - 1) : ix--;
    setActiveIx(ix);
  };

  const nextSlide = () => {
    let ix = activeIx;
    ix === dataLength - 1 ? (ix = 0) : ix++;
    setActiveIx(ix);
  };

  return (
    <div className="Slider">
      <div className="slider-items">
        <Arrow left prev={prevSlide} onClick={() => prevSlide} />

        <Slide activeIndex={activeIx} />

        <Arrow next={nextSlide} onClick={() => nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
