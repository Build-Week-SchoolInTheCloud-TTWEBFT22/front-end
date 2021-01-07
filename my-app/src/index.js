import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import theme from "./theme/index";
import { ThemeProvider } from 'styled-components';
import "./index.css";


ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Router>
        <App />
    </Router>
    </ThemeProvider>, document.getElementById("root"));