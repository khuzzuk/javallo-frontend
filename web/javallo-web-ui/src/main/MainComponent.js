import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/styles";
import CoursePreviewComponent from "../course/CoursePreviewComponent";
import Grid from '@material-ui/core/Grid';
import ConnectionService from "../connection/ConnectionService";

const style = {
  mainBox: {}
};

class MainComponent extends Component {
  connectionService = new ConnectionService();
  state = {
    courses: []
  };

  constructor(props: P, context: any) {
    super(props, context);
    this.connectionService.get('course',
        data => this.setState({courses: data}));
  }

  render() {
    const {classes, onNavigate} = this.props;
    return (
        <Grid container
              className={classes.mainBox}
              spacing={2}
              justify={'center'}>
          {this.state.courses.map(
              value => <CoursePreviewComponent key={value.name}
                                               course={value}
                                               onCourseNavigate={onNavigate}/>)}
        </Grid>
    );
  }
}

MainComponent.propTypes = {
  onNavigate: PropTypes.func
};

export default withStyles(style)(MainComponent);