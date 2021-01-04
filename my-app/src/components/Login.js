import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Admin from './Admin';
import CreateAccount from './CreateAccount';

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
			props.history.push("/admin");
    });
  }
const handleChange = (e) => 
  setCredentials({
    ...credentials, [e.target.name]: e.target.value,
  });
  const history = useHistory();
  
  const createNew = (e) => {
    history.push('/create')
  }

    return(
      <div>
      <header>
        <h1>School in the Cloud</h1>
        <p>Our mission is to connect students with available, qualified volunteer mentors.</p>
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
          Password:
          <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          />
        </label>
        <button onClick={login}>Log In</button>
        <br />
        <p>Ready to Join!</p>
        <Link to={'/create'}>
        <button className="create" onClick={createNew}>Create New Account</button>
        </Link>
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
