import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {mainTheme} from "./MainTheme";

ReactDOM.render(
  <ThemeProvider theme={mainTheme}><App /></ThemeProvider>,
  document.getElementById('root')
);
