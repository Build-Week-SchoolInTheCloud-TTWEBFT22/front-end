import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
              <h1>Create Your Account</h1>
            </header>
            <form onSubmit={formSubmit}>
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
              <button>Log In</button>
            </form>
          </div>
          )
      }
