import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const [credentials, setCredentials] = useState({username: "", password: ""});
  
  const login = (e) => {
    e.preventDefault();
    axios.post('https://schoolinthecloudstt22.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {headers: {Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
    "Content-Type": "application/x-www-form-urlencoded",
    },
  },
  )
    .then((res) => {
      console.log(res.data); 
      localStorage.setItem("token", res.data.access_token);
			props.history.push("/userinfo");
    });
  }
const handleChange = (e) => {
  setCredentials({
    ...credentials, [e.target.name]: e.target.value,
  });
};
    return(
      <div>
      <header>
        <h1>School in the Cloud</h1>
      </header>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          password:
          <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          />
        </label>
        <button>Log In</button>
      </form>
    </div>
    )
}

export default Login;

// const HomeWrapper = styled.div`
 /* text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  width: 100%;
  height: 100%;
  padding: 4%;
`; */

// const [newUser, setNewUser] = useState(initialUser);
  // const [formValues, setFormValues] = useState(initialFormValues);
  // const [formErrors, setFormErrors] = useState(initialFormErrors);
  // const [disabled, setDisabled] = useState(initialDisabled);
  // const inputChange = (username, value) => {
  //   yup.reach(schema, username)
  //   .validate(value)
  //   .then(() => {
  //     setFormErrors({
  //       ...formErrors,
  //       [username]: err.errors[0],
  //     })
  //   })
  //   setFormValues({
  //     ...formValues, [username]: value,
  //   })
  // }
  // const formSubmit = () => {
  //   const newAccount = {
  //     username: formValues.username.trim(),
  //     primaryemail: formValues.primaryemail.trim(),
  //     country: formValues.country.trim(),
  //     availability: formValues.availability.trim(),
  //     role: formValues.role.trim(),
  //   }
  //   postNewUser(newAccount);
  // }
  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   })
  // }, [formValues])

//   <Switch>
//   <Route path='/admin'>
//     <Teacher />
//   </Route>
//   <Route path='/student'>
//     <Student />
//   </Route>
//   <Route path='/volunteer'>
//     <Volunteer />
//   </Route>
//   <Route path='/'>
//     <Home />
//   </Route>
// </Switch> 
// import styled from 'styled-components';
// import * as yup from 'yup';
// import schema from './validation/formSchema'
// import { Route, Switch } from 'react-router-dom';

// import Student from './components/Student';
// import Teacher from './components/Teacher';
// import Volunteer from './components/Volunteer';
// import Home from './components/Home';

// const initialFormValues = {
//   username: '',
//   primaryemail: '',
//   password: '',
//   student: false,
//   teacher: false,
// }

// const initialFormErrors = {
//   username: '',
//   primaryemail: '',
//   password: '',
// }

// const initialUser = [];
// const initialDisabled = true;