import React from "react";

import "./ToggleBtn.scss";

const ToggleBtn = (props) => {
  

  return (
    <div className="toggle-btn" >
      <label>
        <input type="checkbox" value="1"/>
        <span>{props.icon} {props.text}</span>
      </label>
    </div>
  );
};

export default ToggleBtn;
