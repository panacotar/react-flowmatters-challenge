import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import { AiFillLike } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";

import "./Header.scss";

const ResponsiveImage = ({ src, width, height }) => {
  return (
    <div
      style={{
        width,
      }}
      className="responsive-img"
    >
      <div
        style={{
          paddingBottom: (height / width) * 100 + "%",
        }}
      />
      <img src={src} className="responsive-img__img" alt="Flowmatters cover"/>
    </div>
  );
};

const Header = () => {
  // const smallCover = "img/cover-sm.png";
  // const webCover = "img/cover.jpg";

  return (
    <div className="Header">
      {/* <div className="cover"> */}
      {/* <img src="img/cover.jpg" srcSet={`${smallCover} 400w,${"img/avatar.jpg"} 600w` } alt="Flowmatters cover" /> */}
      <ResponsiveImage src="img/cover-sm.png" width={640} height={281} />
      {/* </div> */}
      <div className="info">
        <div className="avatar">
          <img src="img/avatar-sm.png" alt="Flowmatters avatar" />
        </div>
        <div className="title">
          <p>Flowmatters</p>
          <CheckCircleIcon
            className="checked-icon"
            style={{ fill: "#7F7F7F" }}
          />
          <p>@EveryInteraction</p>
        </div>
      </div>
      <div className="actions">
        <Button
          variant="contained"
          color="primary"
          href="#"
          className="btn-send-msg"
        >
          Send Message
        </Button>
        <div className="main-actions">
          <div>
            <AiFillLike className="action-icon" />
            <p>Like</p>
          </div>
          <div>
            <MdRssFeed className="action-icon" />
            <p>Follow</p>
          </div>
          <div>
            <IoMdShareAlt className="action-icon" />
            <p>Share</p>
          </div>
          <div>
            <BsBookmarkFill className="action-icon" />
            <p>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
