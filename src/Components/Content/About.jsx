import React from "react";

import { CgCornerUpRight } from "react-icons/cg";
import { HiPhone } from "react-icons/hi";
import { BsQuestion } from "react-icons/bs";
import { VscDebugBreakpointConditional } from "react-icons/vsc";

import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="about-header">About</div>
      <div className="about-body">
        <img src="img/MAP.png" alt="Flowmatters address on map" />
        <div className="info">
        <div>
          <CgCornerUpRight />
          <a href="/" >Campul Painii 4-5 <br /> <span>400058 Cluj-Napoca</span></a>
        </div>
        <div>
          <HiPhone />
          <a href="/" className="disabled">0740 070 011</a>
        </div>
        <div>
          <BsQuestion className="bordered"/>
          <a href="/" >Ask for Every Interaction’s hours</a>
        </div>
        <div>
          <VscDebugBreakpointConditional />
          <a href="/" >https://www.flowmatters.com/</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
