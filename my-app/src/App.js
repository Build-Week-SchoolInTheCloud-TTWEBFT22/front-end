
// import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Student from './Student';
import Teacher from './Teacher';
import Volunteer from './Volunteer';
import Home from './Home';

// const HomeWrapper = styled.div`
 /* text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  width: 100%;
  height: 100%;
  padding: 4%;
`; */

function App() {
    return(
      <h1>Happy</h1>
        // <HomeWrapper>
        //     <header>
        //         <h1>School in the Cloud</h1>
        //     </header>
            /* <Switch>
                <Route path='/teacher'>
                    <Teacher />
                </Route>
                <Route path='/student'>
                    <Student />
                </Route>
                <Route path='/volunteer'>
                    <Volunteer />
                </Route>
                <Route path='/teacher'>
                    <Teacher />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch> */
        // </HomeWrapper>
    )
}

export default App;