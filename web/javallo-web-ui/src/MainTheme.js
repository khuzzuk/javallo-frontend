import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(219, 232, 222)',
      dark: 'rgb(106,160,130)',
      1000: 'rgb(43,92,66)',
    },
    secondary: {
      main: 'rgb(242, 121, 78)',
    },
  }
});