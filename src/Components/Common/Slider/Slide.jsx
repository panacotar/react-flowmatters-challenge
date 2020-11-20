import React from "react";

import "./Slider.scss";
import imgData from "../../../data/slides-data.json";

const Slide = ({ activeIndex }) => {
  return (
    <div className="slide">
      {imgData.map((img, ix) => {
        return (
          <div className={ix === activeIndex ? "active" : "inactive"} key={ix}>
            <img src={img.full} alt="Slides" />
          </div>
        );
      })}
    </div>
  );
};

export default Slide;
