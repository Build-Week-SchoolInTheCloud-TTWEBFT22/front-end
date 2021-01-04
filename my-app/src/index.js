import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme/index'; 
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}> 
         <Router>
            <Login />
        </Router>,
  </ThemeProvider>, document.getElementById("root")
);


