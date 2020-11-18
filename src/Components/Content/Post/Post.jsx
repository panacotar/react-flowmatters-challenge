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
import { FaCommentAlt } from "react-icons/fa";

import "./Post.scss";
import CardPost from "./CardPost";
import ToggleBtn from "../ToggleBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    border: "0.5px solid gray",
    padding: "3px",
    // width: "100%",
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

const Post = () => {
  const classes = useStyles();

  return (
    <div className="post">
      <div className="post-head">
        <div className="avatar-post">
          <img src="img/avatar-xsm.png" alt="Flowmatters avatar" />
        </div>
        <div>
          <p>
            Flowmatters
            <br />
            23 hrs • <GiEarthAfricaEurope style={{ fontSize: "0.8rem" }} />{" "}
          </p>
        </div>
      </div>
      <div className="post-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien
          diam, suscipit et lacus.
        </p>
      </div>
      <div className="card-post">
        <CardPost />
        <hr />
      </div>
      <div className="post-actions">
        <ToggleBtn inline text="Like" icon={<AiFillLike />} />
        <ToggleBtn inline text="Comment" icon={<FaCommentAlt />} />
        <ToggleBtn inline text="Share" icon={<IoMdShareAlt />} />
      </div>
      <div className="post-comment">
        <AiFillLike className="liked" />
        <div className="comment">
          <div className="user-avatar-comment">
            <img src="img/avatar-xsm.png" alt="Flowmatters avatar" />
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
