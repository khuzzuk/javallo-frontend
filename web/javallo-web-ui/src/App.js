import React, {Component} from 'react';
import './App.css';
import TopMenu from "./menu/TopMenu";
import Image from "./art/logo";
import {withStyles} from "@material-ui/styles";
import {StartCourseButton} from "./course/Course";
import Button from "@material-ui/core/Button";
import LeftMenu from "./menu/LeftMenu";

const basicStyle = {
  root: {
    display: 'flex',
  },
  left: {

  },
  right: {

  },

  leftHeading: {
    fontSize: 60,
    margin: '2vh 0 0 3vw',
    maxWidth: 'fit-content',
  },
  divider: {
    height: 10,
    width: '8vw',
    borderRadius: 5,
    marginLeft: '3vw',
    background: 'rgb(150 187 154)',
  },
  courseDetails: {
    marginLeft: '18vw',
    padding: '1vw',
    width: '15vw',
    height: '16vw',
    borderRadius: 40,
    borderColor: 'rgb(242, 121, 78)',
    borderStyle: 'dotted',
    borderWidth: 2,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
  }
};

class App extends Component {
  render() {
    const classes = this.props.classes;

    return (
        <div className={classes.root}>
          <LeftMenu/>
          <div className={classes.left}>
            <Image/>
            <p className={classes.leftHeading}>Building Programs with Classes & Objects</p>
            <StartCourseButton>Start Free Course</StartCourseButton>
            <div className={classes.divider}/>
            <div className={classes.courseDetails}>
              <p/>
              <Button>Course Cost</Button>
              <p style={{margin: '0 0 0 10px'}}>Free</p>
              <p/>
              <Button>Skill Level</Button>
              <p style={{margin: '0 0 0 10px'}}>Beginner</p>
              <p/>
              <Button>Timeline</Button>
              <p style={{margin: '0 0 0 10px'}}>Approx. 4 months</p>
              <p/>
            </div>
          </div>
          <div className={classes.right}>
            <TopMenu/>
          </div>
        </div>
    );
  }
}

export default withStyles(basicStyle)(App);
