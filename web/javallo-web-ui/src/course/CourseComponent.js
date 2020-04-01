import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import {MenuButton} from "../menu/MenuButton";
import Button from "@material-ui/core/Button";

const style = theme => ({
  paper: {
    [theme.breakpoints.down("md")]: {
      width: '95vw',
    },
  },
  component: {
    width: '100vw',
    height: '70vh',
    [theme.breakpoints.down("md")]: {
      height: '200vh',
    },
  },
  heading: {
    fontSize: 50,
    margin: 10,
    maxWidth: 'fit-content',
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
  },
  priceText: {
    color: theme.palette.primary[1000]
  }
});

class CourseComponent extends Component {
  formatPrice = price => {
    return price && price.toFixed(2) + ' zł';
  };

  render() {
    const {classes, course} = this.props;

    return (
        <Grid container alignItems={"center"} justify={"center"}
              className={classes.component} spacing={2}>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Grid container alignItems={"center"} justify={"center"}
                    className={classes.component} spacing={0}>
                <Grid item container xs={10} justify={"center"}>
                  <Typography align={"center"}
                              className={classes.heading}>{course.name}</Typography>
                </Grid>
                <Grid item container direction={"column"} xs={10} lg={6}
                      spacing={3}>
                  <Grid item>
                    <Typography>{course.description}</Typography>
                  </Grid>
                  <Grid item>
                    {course.subjects && course.subjects.map(
                        subject => <Typography
                            key={subject}>* {subject}</Typography>)}
                  </Grid>
                </Grid>
                <Grid item container direction={"column"} xs={10} lg={3}
                      spacing={6}>
                  <Grid item>
                    <Button color={"primary"} size={'large'}
                            variant={"contained"}>
                      <Typography variant={"h5"} className={classes.priceText}>
                        {this.formatPrice(course.price)}
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item container spacing={2}>
                    {course.tags.map(
                        tag => <Grid key={tag} item><Chip label={tag}
                                                          onClick={() => {
                                                          }}/></Grid>)}
                  </Grid>
                  <Grid item>
                    <MenuButton>Start</MenuButton>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        // <Paper className={classes.paper}>
        /*          <Grid container
                        direction={"column"}
                        className={classes.component}
                        alignItems={"center"}
                        justify={"center"}
                        spacing={0}>
                    <Grid item container direction={"column"}>
                      <Grid item>
                        <Typography variant={"h3"}
                                    className={classes.heading}>{course.name}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{course.description}</Typography>
                      </Grid>
                      <Grid item>
                        {course.tags.map(tag => <Chip label={tag}/>)}
                      </Grid>
                    </Grid>
                    <Grid item container direction={"column"}>
                      <StartCourseButton>Start Course</StartCourseButton>
                    </Grid>
                    <Grid item container direction={"column"}>
                      <Typography>{course.price}</Typography>
                    </Grid>
                  </Grid>*/
        //
    );
  }
}

export default withStyles(style)(CourseComponent);