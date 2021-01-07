import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import teacherImage1 from '../images/teacherImage1.png';
import kidImage1  from '../images/kidImage1.png';
import * as yup from 'yup';
import schema from './validation/formSchema1';

const HeaderImage = styled.img`
  height: 100%;
  width: 40%;
  border-radius: 10px;
`;

const KidImage = styled.img`
  height: 100%;
  width: 40%;
  border-radius: 10px; 
`;

const VipkidFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0;
  color: ${(props) => props.theme.white};
`;

const MissionStatement = styled.p`
  font-size: 1.5em;
  color: ${(props) => props.theme.white};
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.1em;
  padding: 4%;
  color: ${(props) => props.theme.white};
`;

const FacebookLike = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
    color: ${(props) =>  props.theme.secondaryColor};
    padding: 2%2%;
    border: 2px solid ${(props) => props.theme.black};
    border-radius: 10px; 
`;

const ButtonStyled = styled.div`
    button{
      background: ${(props) => props.theme.white};
      font-size: 1.3em;
      border-radius: 3px;
      border: 2px solid ${(props) => props.theme.white};
      margin: 0 1em;
      padding: 0.25em 1em;
      color: ${(props) => props.theme.primaryColor};
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    }
`;

const LoginButton = styled.div`
    button{
      background: ${(props) => props.theme.black};
      font-size: 1.3em;
      border-radius: 3px;
      border: 2px solid ${(props) => props.theme.black};
      margin: 0 1em;
      padding: 0.25em 1em;
      color: ${(props) => props.theme.tertiaryColor}; 
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    }
`;

const initialFormValues1 = {
  username: '',
  password: '', 
  roles: '',
}

const initialFormErrors1 = {
  username: '',
  password: '', 
  roles: '',
}

const initialDisabled1 = true;

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialFormValues1);
  const [formErrors1, setFormErrors1] = useState(initialFormErrors1);
  const [disabled1, setDisabled1] = useState(initialDisabled1);
  const history = useHistory();

  const inputChange1 = (e) => {
    e.preventDefault();
    yup.reach(schema, e.target.name)
    .validate(e.target.value)
    .then(() => {
      setFormErrors1({
        ...formErrors1, 
        [e.target.name]: '',
      })
    })
    .catch((err) => {
      setFormErrors1({
        ...formErrors1,
        [e.target.name]: err.errors[0],
      })
    }) 
    setCredentials({
      ...credentials, [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    schema.isValid(credentials).then((valid) => {
      setDisabled1(!valid);
    })
  }, [credentials]);

const createNew = (e) => {
  history.push('/create')
}

  const login = (e) => {
    e.preventDefault();
    if(credentials.roles === "volunteer"){
      axios.post('https://schoolinthecloudstt22.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {headers: {Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    },
    )
    .then((res) => {
      console.log(res.data); 
      localStorage.setItem("token", res.data.access_token);
			props.history.push("/volunteer");
    });
    } else if(credentials.roles === "student"){
      axios.post('https://schoolinthecloudstt22.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {headers: {Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    },
    )
    .then((res) => {
      console.log(res.data); 
      localStorage.setItem("token", res.data.access_token);
      props.history.push("/student");
    });
    } else {
      axios.post('https://schoolinthecloudstt22.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {headers: {Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    },
    )
    .then((res) => {
      console.log(res.data); 
      localStorage.setItem("token", res.data.access_token);
      props.history.push("/admin");
    });
  }
}

return(
  <VipkidFlex>
    <TopDiv>
      <HeaderDiv>
      <Title>School in the Cloud</Title>
      <MissionStatement>Our mission is to connect students with available, qualified volunteer mentors.</MissionStatement>
      </HeaderDiv>
      <ImageDiv>
      <HeaderImage src={teacherImage1} alt="teacher1" />
      <KidImage src={kidImage1} alt="kid1"/>
      </ImageDiv>
    </TopDiv>
      <div>
        <form onSubmit={login}>
          <div className="errors" style={{color: 'white'}}>
            <div>{formErrors1.username}</div>
            <div>{formErrors1.password}</div>
           </div>
          <FacebookLike>
            <InputDiv>
              <label>Username:
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={inputChange1}
                />
              </label>
              <label>Password:
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={inputChange1}
                />
              </label>
              <label>Student
                <input 
                  type="radio" 
                  value="student" 
                  name="roles" 
                  onChange={inputChange1}
                /> 
              </label>
              <label>Volunteer
                <input 
                  type="radio" 
                  value="volunteer" 
                  name="roles" 
                  onChange={inputChange1} 
                />
              </label>
              <label>Administrator
                <input 
                  type="radio" 
                  value="admin" 
                  name="roles" 
                  onChange={inputChange1} 
                />
              </label>
            </InputDiv>
            <LoginButton>
              <button className="login" disabled={disabled1} onClick={login}>Log In</button>
            </LoginButton>
            <br />
            <ButtonStyled>
              <button className="create" onClick={createNew}>Create New Account</button>
            </ButtonStyled>
          </FacebookLike>
        </form>
      </div>
  </VipkidFlex>
)
}
export default Login;
