import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import Student from './components/Student';
import Admin from './components/Admin';
import Volunteer from './components/Volunteer';
import CreateAccount from './components/CreateAccount';
import Logout from './components/Logout';
import "./index.css";


const HomeWrapper = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  padding: 4%;
`; 

const App = () => {
return(
    <HomeWrapper className="app">
        <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/create' component={CreateAccount} />
        <Route path='/student' component={Student} />
        <Route path='/volunteer' component={Volunteer} />
        <Route path='/logout' component={Logout} />
        <Route path ='/login' component={Login} />
        </Switch>
    </HomeWrapper>
)
}
export default App;


