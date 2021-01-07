import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import TabletKid from '../images/TabletKid.png';
import * as yup from 'yup';
import schema from './validation/formSchema';

const TabletChild = styled.img`
  height: 40%;
  width: 50%;
  border-radius: 10px; 
`;

const TitleCreate = styled.h1`
  font-size: 3em;
  text-align: center;
  color: ${(props) => props.theme.white};
`;

const BorderDiv = styled.div`
  border: 2px solid ${(props) => props.theme.black};
  padding: 3%;
  border-radius: 10px; 
`;
  
const SmallerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.4em;
  padding: 3%;
  color: ${(props) => props.theme.white};
`;

const CreateDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.5em;
    padding: 2%2%;
`;

const LoginButton = styled.div`
    button{
      background: ${(props) => props.theme.black};
      font-size: 1.3em;
      border-radius: 3px;
      border: 2px solid ${(props) => props.theme.black};
      margin: 0 1em;
      padding: 0.25em 4em;
      color: ${(props) => props.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    }
`;

const initialFormValues = {
    username: '',
    primaryemail: '',
    password: '', 
    roles: '',
  }

  const initialFormErrors = {
    username: '',
    primaryemail: '',
    password: '',
    roles: '', 
  }

  const initialDisabled = true;

export default function CreateAccount(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory();
 
  const inputChange = (e) => {
    yup.reach(schema, e.target.name)
    .validate(e.target.value)
    .then(() => {
      setFormErrors({
        ...formErrors, 
        [e.target.name]: '',
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [e.target.name]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues, [e.target.name]: e.target.value,
    })
  }

  useEffect((e) => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    })
  }, [formValues]);

  const formSubmit = (e) => {
    e.preventDefault(); 
    const newUser = {
      username: formValues.username.trim(),
      primaryemail: formValues.primaryemail.trim(),
      password: formValues.password.trim(),
    }

    if (formValues.roles === "volunteer"){
        axios
        .post("https://schoolinthecloudstt22.herokuapp.com/createnewuser/volunteer", newUser)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.access_token);
          setFormValues(initialFormValues);
          history.push("/login");
        })
        .catch((err) => console.log(err))
      } else {
        axios
        .post("https://schoolinthecloudstt22.herokuapp.com/createnewuser/student", newUser)
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          setFormValues(initialFormValues);
          history.push("/login");
          console.log(res.data);
        })
        .catch((err) => console.log(err))
      }
    }

    return(
      <div>
        <header>
          <TitleCreate>Create Your Account</TitleCreate>
        </header>
        <form onSubmit={formSubmit}>
          <div className="errors" style={{color: 'white'}}>
              <div>{formErrors.username}</div>
              <div>{formErrors.primaryemail}</div>
              <div>{formErrors.password}</div>
          </div>
          <CreateDiv>
          <TabletChild src={TabletKid} alt="handsontablet" />
            <BorderDiv>
              <SmallerDiv>
                <label>Username:
                  <input
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={inputChange}
                  />
                </label>
                <label>Email:
                  <input
                    type="email"
                    name="primaryemail"
                    value={formValues.primaryemail}
                    onChange={inputChange}
                  />
                </label>
                <label>Password:
                  <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={inputChange}
                  />
                </label>
                <label>Student
                  <input 
                    type="radio" 
                    value="student" 
                    name="roles" 
                    onChange={inputChange}
                  /> 
                </label>
                <label>Volunteer
                  <input 
                    type="radio" 
                    value="volunteer" 
                    name="roles" 
                    onChange={inputChange} 
                  />
                </label>
              </SmallerDiv>
              <LoginButton>
                <button className="createaccount" disabled={disabled}>Create</button>
              </LoginButton>
            </BorderDiv>
          </CreateDiv>
        </form>
      </div>
    )
}
