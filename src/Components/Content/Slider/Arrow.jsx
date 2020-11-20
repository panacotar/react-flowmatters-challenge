import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import "./Slider.scss";

const Arrow = ({ left, prev, next }) => {
  const goTo = () => {
    if (left) {
      return prev();
    }

    return next();
  };
  return (
    <div className="slider-arrows">
      <MdKeyboardArrowRight
        onClick={goTo}
        className={left ? "arrow-left" : "arrow-right"}
      />
    </div>
  );
};

export default Arrow;
