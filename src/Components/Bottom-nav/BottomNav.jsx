import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import { BiNews } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  action: {
    fontSize: "1.7rem",
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction className={classes.action} icon={<BiNews />} />
      <BottomNavigationAction
        className={classes.action}
        icon={<FaUserFriends />}
      />
      <BottomNavigationAction
        className={classes.action}
        icon={<GiEarthAmerica />}
      />
      <BottomNavigationAction
        className={classes.action}
        icon={<CgMenuGridO />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
