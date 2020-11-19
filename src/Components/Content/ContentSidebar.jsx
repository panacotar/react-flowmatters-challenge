import React from "react";

import "./ContentSidebar.scss";
import Photos from "./Photos";
import About from "./About";

const ContentSidebar = () => {
  return (
    <div className="Content-sidebar">
      <About />
      <Photos />
    </div>
  );
};

export default ContentSidebar;
