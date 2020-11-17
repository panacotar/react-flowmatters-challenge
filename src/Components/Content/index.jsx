import React from "react";

import "./Content.scss";
import Header from "./Header";
import Photos from "./Photos";
import Links from "./Links";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <Links />
      <Photos />
    </div>
  );
};

export default Content;
