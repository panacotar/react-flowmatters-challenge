import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles(() => ({
  paper: {
    margin: "auto",
    marginTop: "20vh",
    width: 400,
    height: 400,
    backgroundColor: "none",
    "&:focus": {
      outline: "none",
    },
  },
}));

const PhotoModal = (props) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <img
        src={props.src}
        alt="Selected in Modal"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );

  return (
    <div className="Modal">
      <Grow in={props.open}>
        <Modal open={props.open} onClose={props.onClose} keepMounted>
          {body}
        </Modal>
      </Grow>
    </div>
  );
};

export default PhotoModal;
