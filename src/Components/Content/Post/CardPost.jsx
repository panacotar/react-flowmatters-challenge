import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const CardPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="img/card-img.png"
          title="Perspective"
        />
        <CardContent style={{textAlign: "start", maxHeight: "90px", overflow: "hidden"}}>
          <h3>Cras malesuada nulla at urna elementum laoreet. Donec volutpat convallis tellus vitae ornare.</h3>
          <p>Sed pulvinar consequat mauris nec aliquam. Sed eget condimentum justo, ut consectetur neque. Vestibulum pharetra sagittis dui, eget sodales elit tincidunt mollis. Duis non nisl.</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardPost;
