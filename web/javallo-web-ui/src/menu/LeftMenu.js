import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";

const leftMenuStyle = theme => ({
  root: {
    background: 'black',
    width: 50,
    height: 180,
    position: 'absolute',
    [theme.breakpoints.down("md")]: {
      display: 'none'
    }
  },
  text: {
    transform: 'rotate(270deg)',
    color: 'rgb(255 ,235, 94)',
    fontSize: 20,
    fontWeight: 700,
    paddingTop: 80,
    marginLeft: -90,
  }
});

class LeftMenu extends Component{
  render() {
    return (
        <div className={this.props.classes.root}>
          <p className={this.props.classes.text}>Free Course</p>
        </div>
    );
  }
}

export default withStyles(leftMenuStyle)(LeftMenu);