import React from "react";

import "./ToggleBtn.scss";

const ToggleBtn = (props) => {
  return (
    <div className="toggle-btn">
      <label className={props.inline && "label-flex"}>
        <input type="checkbox" value="1" />
        <span>{props.icon} </span>
        <span> {props.text}</span>
      </label>
    </div>
  );
};

export default ToggleBtn;
