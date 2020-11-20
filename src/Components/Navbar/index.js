import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { IoIosArrowBack } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { GrFacebook } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

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
  const [fixed, setFixed] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (isDesktop) {
      const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return function cleanup() {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [fixed, isDesktop]);
  return (
    <div id="Navbar" className={fixed && isDesktop ? "navbar fixed" : "navbar"}>
      <Mobile>
        <IoIosArrowBack className="back-arr" />
        <SearchInput />
        <HiDotsHorizontal className="dots-icon" />
      </Mobile>
      <Desktop>
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
      </Desktop>
    </div>
  );
};

export default NavBar;
