import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Students from './Student';
import Volunteers from './Volunteer';

const Title = styled.h1`
  font-size: 3em;
  color: ${(props) => props.theme.white};
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
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
    color: ${(props) =>  props.theme.secondaryColor};
    padding: 2%2%;
    border: 2px solid ${(props) => props.theme.black};
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
`
 
const initialFormValues = {
    username: '',
    primaryemail: '',
    password: '', 
    volunteer: false, 
    student: false, 
  }

export default function CreateAccount (props) {
    const [formValues, setFormValues] = useState(initialFormValues);
    const history = useHistory();
    
    const student = (e) => {
        localStorage.clear("token");
		history.push("/student");
    };
    
    const volunteer = (e) => {
        localStorage.clear("token");
		history.push("/volunteer");
    };
    
    const formSubmit = () => {  
        const newUser = {
          username: formValues.username.trim(),
          primaryemail: formValues.primaryemail.trim(),
          password: formValues.password.trim(),
        }
        if (formValues.roles === "volunteer"){
            axios
			.post("/createnewuser/volunteer", newUser)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
            })
            .finally(() => {
                setFormValues(initialFormValues);
            })
            volunteer(newUser);
        } else {
            axios
			.post("/createnewuser/student", newUser)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
            })
            .finally(() => {
                setFormValues(initialFormValues);
            })
            student(newUser);
        }
      }

      const onChange = (e) => 
      setFormValues({
        ...formValues, [e.target.name]: e.target.value,
      });

        return(
            <div>
            <header>
              <Title>Create Your Account</Title>
            </header>
            <form onSubmit={formSubmit}>
              <CreateDiv>
                <SmallerDiv>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formValues.username}
                  onChange={onChange}
                />
              </label>
              <label>
                  Email:
                  <input
                  type="email"
                  name="primaryemail"
                  value={formValues.primaryemail}
                  onChange={onChange}
                />
              </label>
              <label>
                Password:
                <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={onChange}
                />
              </label>
              <label>Student
              <input 
              type="radio" 
              value="student" 
              name="roles" 
              onChange={onChange}/> 
              </label>
              <label>Volunteer
              <input 
              type="radio" 
              value="volunteer" 
              name="roles" 
              onChange={onChange} />
              </label>
              </SmallerDiv>
              <LoginButton>
              <button>Log In</button>
              </LoginButton>
              </CreateDiv>
            </form>
          </div>
          )
      }
