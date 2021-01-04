import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Student from './components/Student';
import Admin from './components/Admin';
import Volunteer from './components/Volunteer';
import CreateAccount from './components/CreateAccount';

import './App.css';

const App = () => {
return(
    <div className="app">
        <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/create' component={CreateAccount} />
        <Route path='/student' component={Student} />
        <Route path='/volunteer' component={Volunteer} />
        <Route exact path = '/' component={Login} />
        </Switch>
    </div>
)
}
export default App;