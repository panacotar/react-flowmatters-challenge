import React from "react";

import "./Content.scss";
import Header from "./Header";
import Photos from "./Photos";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <div className="links">Links</div>
      <Photos />
    </div>
  );
};

export default Content;
