import React, {Component} from "react";
import {MenuButton} from "./MenuButton";
import {withStyles} from "@material-ui/styles";
import {ViewType} from "../ViewType";
import {Drawer, Hidden} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const menuStyle = theme => ({
  root: {
    display: 'flex',
    height: '7vh',
  },
  mobileMenu: {
    background: 'rgb(100, 100, 100)',
  }
});

class TopMenu extends Component {
  state = {
    mobileOpen: false
  };

  render() {
    const {changeView, classes} = this.props;
    const onMenuClick = redirect => event => {
      this.setState({mobileOpen: false});
      changeView(redirect);
    };

    const menu = <div>
      <MenuButton
          key={'explore'}
          onClick={onMenuClick(ViewType.MAIN)}>Explore</MenuButton>
      <MenuButton
          key={'catalog'}
          onClick={onMenuClick(ViewType.CATALOG)}>Catalog</MenuButton>
      <MenuButton key={'business'}
                  onClick={onMenuClick(ViewType.MAIN)}>For
        business</MenuButton>
      <MenuButton key={'signin'}
                  onClick={onMenuClick(ViewType.MAIN)}>Sign
        in</MenuButton>
      <MenuButton key={'start'}
                  onClick={onMenuClick(ViewType.MAIN)}>Get
        started</MenuButton>
    </div>;

    return <nav className={this.props.classes.root}>
      <Hidden mdDown>
        {menu}
      </Hidden>
      <Hidden lgUp>
        <IconButton
            edge={'start'}
            onClick={() => this.setState({mobileOpen: !this.state.mobileOpen})}>
          <MenuIcon/>
        </IconButton>
        <Drawer anchor={'left'}
                variant={'temporary'}
                container={this.props.container}
                open={this.state.mobileOpen}
                onClose={() => this.setState({mobileOpen: false})}
                className={classes.mobileMenu}
                keepMounted>
          <IconButton onClick={() => this.setState(
              {mobileOpen: false})}><ChevronLeftIcon/>
          </IconButton>
          {menu}
        </Drawer>
      </Hidden>
    </nav>
  }

  menuClick
}

export default withStyles(menuStyle)(TopMenu);
