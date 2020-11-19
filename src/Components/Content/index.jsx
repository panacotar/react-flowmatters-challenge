import React from "react";
import { useMediaQuery } from "react-responsive";

import "./Content.scss";
import Header from "./Header";
import Photos from "./Photos";
import Links from "./Links";
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
    <div>
      <Mobile>
        <div className="content">
          <Header />
          <Links />
          <Photos />
          <StatusPost />
          <Post />
        </div>
      </Mobile>
      <Desktop>
        <div className="content">
          <Header />
          <div className="content-flex">
            <div className="posts">
              <StatusPost />
              <Post />
            </div>
            <ContentSidebar />
          </div>
        </div>
      </Desktop>
    </div>
  );
};

export default Content;
