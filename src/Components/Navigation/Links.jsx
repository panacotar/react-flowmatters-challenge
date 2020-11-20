import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import "./Links.scss";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 20,
  },
});

const Links = () => {
  const classes = useStyles();
  const [value, setIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  return (
    <div className="links">
      <Tabs
        className={classes.root}
        style={{ height: "20px" }}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="icon label tabs example"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label={<div>Home </div>} />
        <Tab label={<div>Posts </div>} />
        <Tab label={<div>Photos </div>} />
        <Tab label={<div>Videos </div>} />
        <Tab label={<div>Info </div>} />
      </Tabs>
    </div>
  );
};

export default Links;
