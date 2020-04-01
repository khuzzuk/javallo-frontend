import React, {Component} from 'react';
import './App.css';
import TopMenu from "./menu/TopMenu";
import Image from "./art/logo";
import {withStyles} from "@material-ui/styles";
import LeftMenu from "./menu/LeftMenu";
import {ViewType} from "./ViewType";
import MainComponent from "./main/MainComponent";
import CourseComponent from "./course/CourseComponent";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {mainTheme} from "./MainTheme";

const basicStyle = theme => ({
  root: {
    display: 'flex',
    width: '100vw',
  },
  content: {
    width: 'fit-content',
  },
  left: {

  },
  top: {
  },
  right: {
    display: 'flex',
    [theme.breakpoints.down("md")]: {
      flexFlow: 'row-reverse',
      display: 'inline-flex',
    },
  }
});

class App extends Component {
  state = {
    view: 'MAIN',
    course: null,
  };

  render() {
    const classes = this.props.classes;
    let content;
    switch (this.state.view) {
      case ViewType.COURSE:
        content = <CourseComponent course={this.state.course}/>;
        break;

      default:
        content = <MainComponent onNavigate={viewData => this.setState({view: viewData.viewType,
          course: viewData.course})}/>;
    }

    return (
        <ThemeProvider theme={mainTheme}>
        <div className={classes.root}>
          <LeftMenu/>
          <div className={classes.content}>
            <div className={classes.right}>
              <Image/>
              <TopMenu changeView={view => this.setState({view: view})}/>
            </div>
            {content}
          </div>
        </div>
        </ThemeProvider>
    );
  }
}

export default withStyles(basicStyle)(App);
