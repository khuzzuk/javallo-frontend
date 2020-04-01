import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/styles";
import Course from "./Course";
import ViewData from "../ViewData";
import {ViewType} from "../ViewType";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";

const style = theme => ({
  component: {
    paddingBottom: '6vh'
  },
  mainBox: {
    width: 400,
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
    borderRadius: 5,
  },
  header: {
    height: '8vh'
  },
  image: {
    height: '15vw',
  }
});

class CoursePreviewComponent extends Component {
  render() {
    const {classes, course, onCourseNavigate} = this.props;

    return (
        <Grid item className={classes.component}>
          <Card className={classes.mainBox}>
            <CardHeader title={course.name}>
            </CardHeader>
            <CardContent>
              <Typography variant={'body1'}>{course.description}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => onCourseNavigate(
                  ViewData.create(ViewType.COURSE, course))}>Details</Button>
            </CardActions>
          </Card>
        </Grid>
    );
  }
}

CoursePreviewComponent.propTypes = {
  course: PropTypes.shape(Course),
  onCourseNavigate: PropTypes.func,
};

export default withStyles(style)(CoursePreviewComponent);