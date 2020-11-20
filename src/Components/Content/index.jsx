import React from "react";
import { useMediaQuery } from "react-responsive";

import "./Content.scss";
import Photos from "./Photos";
import StatusPost from "./Post/StatusPost";
import PostList from "./Post/PostList";
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
        <PostList />
      </Mobile>
      <Desktop>
        <div className="posts">
          <StatusPost />
          <PostList />
        </div>
        <ContentSidebar />
      </Desktop>
    </div>
  );
};

export default Content;
