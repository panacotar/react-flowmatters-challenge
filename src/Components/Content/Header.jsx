import React from "react";
import { useMediaQuery } from "react-responsive";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { AiFillLike } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

import "./Header.scss";
import ToggleBtn from "./ToggleBtn";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

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
      <img src={src} className="responsive-img__img" alt="Flowmatters cover" />
    </div>
  );
};


const Header = () => {

  return (
    <div>
      <Mobile>
        <div className="Header">
          <ResponsiveImage src="img/cover-sm.png" width={768} height={340} />
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
              className="btn-send-msg"
            >
              Send Message
            </Button>
            <div className="main-actions">
              <ToggleBtn
                text="Like"
                icon={<AiFillLike className="action-icon" />}
              />
              <ToggleBtn
                text="Follow"
                icon={<MdRssFeed className="action-icon" />}
              />
              <ToggleBtn
                text="Share"
                icon={<IoMdShareAlt className="action-icon" />}
              />
              <ToggleBtn
                text="Save"
                icon={<BsBookmarkFill className="action-icon" />}
              />
            </div>
          </div>
        </div>
      </Mobile>
      <Desktop>
        <div className="Header">
          <ResponsiveImage src="img/cover.jpg" width={897} height={397} />
          <div className="actions">
    
              <ButtonGroup className="btn-group" variant="contained" color="default">
                <Button>
                  <AiFillLike /> <span>Liked</span> <ArrowDropDownIcon />
                </Button>
                <Button>
                  {" "}
                  <FaFacebookMessenger /> <span>Message</span>
                </Button>
                <Button>
                  {" "}
                  <HiDotsHorizontal /> <span>More</span> <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
            
            <div>
              <Button
                variant="contained"
                color="primary"
                className="btn-contact"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Desktop>
    </div>
  );
};

export default Header;
