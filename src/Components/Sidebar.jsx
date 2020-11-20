import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./Sidebar.scss";

const useStyles = makeStyles({
  root: {
    minHeight: "35px",
    paddingLeft: "10px",
  },
  wrapper: {
    alignItems: "end",
  },
  selected: {
    backgroundColor: "#dee0e3",
  },

  indicator: {
    left: "0",
  },
});

const SideBar = () => {
  const { root, wrapper, selected, indicator, vertical } = useStyles();
  const [value, setValue] = useState(0);

  const headers = [
    "Home",
    "About",
    "Notes",
    "Email Signup",
    "Photos",
    "Reviews",
    "Videos",
    "Likes",
    "Posts",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sidebar">
      <div>
        <div>
          <div className="info">
            <div className="avatar">
              <img src="img/avatar-sm.png" alt="Flowmatters avatar" />
            </div>
            <div className="title">
              <span>
                Flowmatters{" "}
                <CheckCircleIcon
                  className="checked-icon"
                  style={{ fill: "#7F7F7F" }}
                />
              </span>
              <p>@EveryInteraction</p>
            </div>
          </div>
        </div>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            aria-label="Vertical tabs"
            orientation="vertical"
            className={root}
            classes={{ indicator, vertical }}
          >
            {headers.map((header, ix) => {
              return (
                <Tab
                  key={ix}
                  disableRipple
                  classes={{
                    root,
                    wrapper,
                    selected,
                  }}
                  label={header}
                />
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
