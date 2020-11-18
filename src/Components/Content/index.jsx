import React from "react";

import "./Content.scss";
import Header from "./Header";
import Photos from "./Photos";
import Links from "./Links";
import StatusPost from "./Post/StatusPost";
import Post from "./Post/Post";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <Links />
      <Photos />
      <StatusPost />
      <Post />
    </div>
  );
};

export default Content;
