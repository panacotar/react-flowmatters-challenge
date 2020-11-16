import React from "react";
import { IoIosArrowBack } from 'react-icons/io';
import { HiDotsHorizontal } from 'react-icons/hi';


import "./Navbar.scss";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return <div className="navbar">
  <IoIosArrowBack className="back-arr"/>
  <SearchInput />
  <HiDotsHorizontal className="dots-icon"/>
  </div>;
};

export default NavBar;
