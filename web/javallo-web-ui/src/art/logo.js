import {makeStyles} from "@material-ui/styles";
import React from "react";

const logoStyle = makeStyles({
  root: {
    width: '40vw',
    height: '25vh',
    lineHeight: 3,
    fontSize: 40,
    textAlign: 'center',
    verticalAlign: 'middle',
  }
});

export default function Image() {
  const classes = logoStyle();
  return <div className={classes.root}>JavaHello</div>;
}
