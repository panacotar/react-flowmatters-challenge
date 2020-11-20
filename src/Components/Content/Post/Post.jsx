import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

import { makeStyles } from "@material-ui/core/styles";

import { BiSmile } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { MdModeComment } from "react-icons/md";

import "./Post.scss";
import ToggleBtn from "../ToggleBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    border: "0.5px solid gray",
    padding: "3px",
    flexGrow: "1",
  },
  input: {
    backgroundColor: "white",
    maxHeight: "100px",
    overflow: "auto",
    fontSize: "0.9rem",
  },
  btn: {
    backgroundColor: "white",
    border: "none",
    margin: "3px",
    color: "gray",
  },
}));

const Post = ({ description, children, likes, currentUser }) => {
  const classes = useStyles();

  return (
    <div className="post">
      <div className="post-head">
        <div className="avatar-post">
          <img src="img/avatar-xsm.png" alt="Flowmatters avatar" />
        </div>
        <div>
          <p>
            <span className="page-title">Flowmatters</span>
            <br />
            23 hrs • <GiEarthAfricaEurope style={{ fontSize: "0.9rem", color: "#90949c" }} />{" "}
          </p>
        </div>
      </div>
      <div className="post-description">
        <p>{description}</p>
      </div>
      <div className="card-post">
        {children}
        <hr />
      </div>
      <div className="post-actions">
        <ToggleBtn inline text="Like" icon={<AiFillLike />} />
        <ToggleBtn inline text="Comment" icon={<MdModeComment />} />
        <ToggleBtn inline text="Share" icon={<IoMdShareAlt />} />
      </div>
      <div className="post-comment">
        { likes ? <img src="img/liked.png" className="liked" alt="Liked Icon" /> : ""}
        <div className="comment">
          <div className="user-avatar-comment">
            <img src={currentUser} alt="Flowmatters avatar" />
          </div>

          <FormControl className={classes.root}>
            <Input
              className={classes.input}
              disableUnderline
              multiline
              placeholder="Write a comment..."
              endAdornment={
                <InputAdornment position="end">
                  <button className={classes.btn}>
                    <FaCamera />
                  </button>
                  <button className={classes.btn}>
                    <BiSmile />
                  </button>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Post;
