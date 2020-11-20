import React from "react";

import "./ContentSidebar.scss";
import Photos from "../Content/Photos";
import About from "../Content/About";

const ContentSidebar = () => {
  return (
    <div className="Content-sidebar">
      <div>
        <About />
        <Photos />
      </div>
    </div>
  );
};

export default ContentSidebar;
