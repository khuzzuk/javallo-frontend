import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/styles/withStyles/withStyles";

export const MenuButton = withStyles({
  root: {
    background: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 20,
  }
})(Button);
