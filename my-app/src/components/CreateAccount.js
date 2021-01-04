import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import Students from './Student';
import Volunteers from './Volunteer';
 
const initialFormValues = {
    username: '',
    primaryemail: '',
    password: '', 
    volunteer: false, 
    student: false, 
  }

export default function CreateAccount (props) {
    const [newUser, setNewUser] = useState({});
    const [formValues, setFormValues] = useState(initialFormValues);
    const history = useHistory();
    
    const student = (e) => {
        localStorage.clear("token");
		history.push("/student");
	};
	useEffect(() => {
		axiosWithAuth()
			.get("/createnewuser/student")
			.then((res) => {
				console.log(res.data);
				setNewUser(res.data)
			})
			.catch((err) => {
				console.log(err);
            })
            .finally(() => {
                setFormValues(initialFormValues);
            })
	}, []);
    const volunteer = (e) => {
        localStorage.clear("token");
		history.push("/volunteer");
	};
	useEffect(() => {
		axiosWithAuth()
			.get("/createnewuser/volunteer")
			.then((res) => {
				console.log(res.data);
			    setNewUser(res.data)
			})
			.catch((err) => {
				console.log(err);
            })
            .finally(() => {
                setFormValues(initialFormValues);
            })
    }, []);
    
    const formSubmit = () => {
        const newUser = {
          username: formValues.username.trim(),
          primaryemail: formValues.primaryemail.trim(),
          roles: ['student', 'volunteer'].filter((role) => formValues[role]),
          password: formValues.password.trim(),
        }
        volunteer(newUser);
        student(newUser);
      }

      const onChange = (e) => 
      setNewUser({
        ...newUser, [e.target.name]: e.target.value,
      });

        return(
            <div>
            <header>
              <h1>Create Your Account</h1>
            </header>
            <form onSubmit={formSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={newUser.username}
                  onChange={onChange}
                />
              </label>
              <label>
                  Email:
                  <input
                  type="email"
                  name="primaryemail"
                  value={newUser.primaryemail}
                  onChange={onChange}
                />
              </label>
              <label>
                Password:
                <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={onChange}
                />
              </label>
              <label>Student
              <input type="radio" value="student" name="roles" checked={formValues.roles === 'student'} onChange={onChange}/> 
              </label>
              <label>Volunteer
              <input type="radio" value="volunteer" name="roles" checked={formValues.roles === 'volunteer'} onChange={onChange} />
              </label>
              <button>Log In</button>
            </form>
          </div>
          )
      }

    //   onClick={formValues.roles === 'volunteer' ? '/Volunteer' : '/Student'}