import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Typography, Box } from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import PhotoIcon from "@material-ui/icons/Photo";
import Input from "@material-ui/core/Input";

import "./StatusPost.scss";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 20
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const StatusPost = () => {
  const classes = useStyles();
  const [value, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue("")
  }

  return (
    <div className={classes.root}>
      <Tabs
        style={{height: "20px"}}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="icon label tabs example"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label={
            <div>
              <CreateIcon
                style={{ verticalAlign: "middle", color: "#3B5998" }}
              />{" "}
              Status{" "}
            </div>
          }
        />
        <Tab
          label={
            <div>
              <PhotoIcon
                style={{ verticalAlign: "middle", color: "#F4B178" }}
              />{" "}
              Photo/Video{" "}
            </div>
          }
        />
      </Tabs>

      <TabPanel
        value={value}
        index={0}
        style={{ height: "100px", background: "white" }}
      >
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Input
            disableUnderline
            fullWidth
            placeholder="Write something on this page"
            inputProps={{ "aria-label": "description" }}
            style={{ fontSize: "1.2rem" }}
            onChange={handleInputChange}
            value={inputValue}
          />
          <div>
            <IconButton
              aria-label="add"
              color="primary"
              style={{ float: "right", display: `${inputValue ? "" : "none"}` }}
              type="submit"
            >
              <AddIcon />
            </IconButton>
          </div>
        </form>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{ height: "100px", background: "white" }}
      >
        Add Photo
      </TabPanel>
    </div>
  );
};

export default StatusPost;
