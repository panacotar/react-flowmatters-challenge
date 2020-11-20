import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";
import Modal from "@material-ui/core/Modal";
import Grow from "@material-ui/core/Grow";

const PhotoModal = (props) => {
  const isLandscape = useMediaQuery({ minWidth: 507, maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const width = isDesktop ? "400px" : "300px",
    height = width;
  const marginTop = isLandscape ? "0" : "10vh";

  const useStyles = makeStyles(() => ({
    paper: {
      margin: "auto",
      marginTop: marginTop,
      width: width,
      height: height,
      backgroundColor: "none",
      "&:focus": {
        outline: "none",
      },
    },
  }));

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
