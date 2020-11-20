import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import "./Links.scss";

const useStyles = makeStyles({
  tabRoot: {
    width: "20%",
    minWidth: "10px",
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
        style={{ height: "20px", width: "100%" }}
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab classes={{ root: classes.tabRoot }} label={<div>Home </div>} />
        <Tab classes={{ root: classes.tabRoot }} label={<div>Posts </div>} />
        <Tab classes={{ root: classes.tabRoot }} label={<div>Photos </div>} />
        <Tab classes={{ root: classes.tabRoot }} label={<div>Videos </div>} />
        <Tab classes={{ root: classes.tabRoot }} label={<div>Info </div>} />
      </Tabs>
    </div>
  );
};

export default Links;
