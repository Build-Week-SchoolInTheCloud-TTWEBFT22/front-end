import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
  color: ${(props) => props.theme.white};
`;

const MissionStatement = styled.p`
  font-size: 1.5em;
  color: ${(props) => props.theme.white};
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4em;
  padding: 3%;
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
`
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

const Login = (props) => {
  const [credentials, setCredentials] = useState({username: "", password: ""});
  const history = useHistory();

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

const handleChange = (e) => 
  setCredentials({
    ...credentials, [e.target.name]: e.target.value,
  });

const createNew = (e) => {
  history.push('/create')
}
return(
  <div>
    <header>
      <Title>School in the Cloud</Title>
      <MissionStatement>Our mission is to connect students with available, qualified volunteer mentors.</MissionStatement>
    </header>
    <form onSubmit={login}>
      <FacebookLike>
        <InputDiv>
        <label>Username:
          <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          />
        </label>
        <label>Password:
          <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          />
        </label>
        <label>Student
         <input 
          type="radio" 
          value="student" 
          name="roles" 
          onChange={handleChange}
          /> 
        </label>
        <label>Volunteer
          <input 
          type="radio" 
          value="volunteer" 
          name="roles" 
          onChange={handleChange} 
          />
        </label>
        <label>Administrator
          <input 
          type="radio" 
          value="admin" 
          name="roles" 
          onChange={handleChange} 
          />
        </label>
      </InputDiv>
      <LoginButton>
        <button onClick={login}>Log In</button>
      </LoginButton>
      <br />
      <Link to={'/create'}>
        <ButtonStyled>
          <button className="create" onClick={createNew}>Create New Account</button>
        </ButtonStyled>
      </Link>
    </FacebookLike>
  </form>
</div>
)
}
export default Login;
