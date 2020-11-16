import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { BiLike } from "react-icons/bi";
import { MdRssFeed } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";

import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="cover">
        <img src="img/cover.jpg" alt="Flowmatters cover" />
      </div>
      <div className="info">
        <div className="avatar">
          <img src="img/avatar.jpg" alt="Flowmatters avatar" />
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
        <div>
          <BiLike className="action-icon" />
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
  );
};

export default Header;
