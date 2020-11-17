import React from "react";
import Button from "@material-ui/core/Button";

import "./Links.scss";

const Links = () => {

  return (
    <div className="links">
      <Button>Home</Button>
      <Button>Posts</Button>
      <Button>Photos</Button>
      <Button>Videos</Button>
      <Button>Info</Button>
    </div>
  );
};

export default Links;
