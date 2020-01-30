import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";

const leftMenuStyle = {
  root: {
    background: 'black',
    width: '5vw',
    height: '100vh',
  },
  text: {
    transform: 'rotate(270deg)',
    color: 'rgb(255 ,235, 94)',
    fontSize: 20,
    fontWeight: 700,
    padding: '11vh 0 0 0',
    marginLeft: -100,
  }
};

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