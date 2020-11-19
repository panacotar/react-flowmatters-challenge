import React from "react";
import { useMediaQuery } from "react-responsive";

import { IoIosArrowBack } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { GrFacebook } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import "./Navbar.scss";
import SearchInput from "./SearchInput";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const NavBar = () => {
  return (
    <div>
      <Mobile>
        <div className="navbar">
          <IoIosArrowBack className="back-arr" />
          <SearchInput />
          <HiDotsHorizontal className="dots-icon" />
        </div>
      </Mobile>
      <Desktop>
        <div className="navbar">
          <div>
            <GrFacebook className="fb-icon" />
            <SearchInput />
          </div>
          <div className="status">
            <div>
              Home <span>5</span>
            </div>
            <div className="status-icons">
              <FaUserFriends />
              <QuestionAnswerIcon />
              <GiEarthAmerica />
            </div>
            <div className="status-menu">
              <HiMenuAlt3 />
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>
      </Desktop>
    </div>
  );
};

export default NavBar;
