import React, {Component} from "react";
import {MenuButton} from "./MenuButton";
import {withStyles} from "@material-ui/styles";

const menuStyle = {
  root: {
    display: 'flex',
    height: '7vh',
  }
};

class TopMenu extends Component {
  render() {
    return <div className={this.props.classes.root}>
      <MenuButton>Explore</MenuButton>
      <MenuButton>Nanodegree</MenuButton>
      <MenuButton>Catalog</MenuButton>
      <MenuButton>For business</MenuButton>
      <MenuButton>Sign in</MenuButton>
      <MenuButton>Get started</MenuButton>
    </div>
  }
}

export default withStyles(menuStyle)(TopMenu);
