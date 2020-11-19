import React from "react";
import { useMediaQuery } from "react-responsive";

import "./Content.scss";
import Photos from "./Photos";
import StatusPost from "./Post/StatusPost";
import Post from "./Post/Post";
import ContentSidebar from "./ContentSidebar";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Content = () => {
  return (
    <div className="content">
      <Mobile>
        <Photos />
        <StatusPost />
        <Post />
      </Mobile>
      <Desktop>
        <div className="posts">
          <StatusPost />
          <Post />
        </div>
        <ContentSidebar />
      </Desktop>
    </div>
  );
};

export default Content;
