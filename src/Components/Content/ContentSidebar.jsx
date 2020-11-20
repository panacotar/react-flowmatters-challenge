import React from "react";

import "./ContentSidebar.scss";
import Photos from "./Photos";
import About from "./About";

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
