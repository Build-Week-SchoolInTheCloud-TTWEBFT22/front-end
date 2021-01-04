import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as yup from 'yup';
import schema from './validation/formSchema'
import { Route, Switch } from 'react-router-dom';

import Student from './components/Student';
import Teacher from './components/Teacher';
import Volunteer from './components/Volunteer';
import Home from './components/Home';

const initialFormValues = {
  username: '',
  primaryemail: '',
  country: '',
  availability: '',
  role: '',
}

const initialFormErrors = {
  username: '',
  primaryemail: '',
  country: '',
  availability: '',
  role: '',
}

const initialUser = [];
const initialDisabled = true;

function App() {
  const [newUser, setNewUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  const postNewUser = (newAccount) => {
    axios.post('https://schoolinthecloudstt22.herokuapp.com/createnewuser/{usertype}', newAccount)
    .then((res) => {
      console.log(res);
      setNewUser([res.data, ...newUser])
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setFormValues(initialFormValues);
    })
  }

  const inputChange = (username, value) => {
    yup.reach(schema, username)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [username]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues, [username]: value,
    })
  }
    return(
      <header>
        <h1>Happy</h1>
      </header>
      
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

// const HomeWrapper = styled.div`
 /* text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  width: 100%;
  height: 100%;
  padding: 4%;
`; */