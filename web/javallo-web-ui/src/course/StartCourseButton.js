import {withStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";

export const StartCourseButton = withStyles({
  root: {
    background: 'transparent',
    marginLeft: '2.8vw',
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 30,
    color: 'rgb(16, 78, 128)',
  }
})(Button);