import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import "./CardPost.scss";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

const CardPost = ({ image, title, description, link }) => {
  const classes = useStyles();

  return (
    <Card className="Card-post">
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent
          style={{ textAlign: "start", maxHeight: "90px", overflow: "hidden" }}
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </CardContent>
        <span className="card-link">{link}</span>
      </CardActionArea>
    </Card>
  );
};

export default CardPost;
