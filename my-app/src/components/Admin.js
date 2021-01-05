import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

import AllTasks from './AllTasks';
import VolunteerCard from './VolunteerCard';

export default function Student (props) {
    const [allTasks, setAllTasks] = useState({});
    
    const history = useHistory();
    
    const logOut2 = (e) => {
        history.push('/login')
      }
    
    const viewAllTasks = (e) => {
        localStorage.clear("token");
		history.push("/volunteer");
    };

    // axios.delete('tasks/task/{taskid}', {
    //     headers: {
    //       Authorization: authorizationToken
    //     },
    //     data: {
    //       source: source
    //     }
    //   });
    
	useEffect(() => {
		axiosWithAuth()
			.get("/tasks/tasks")
			.then((res) => {
				console.log(res.data);
				setAllTasks(res.data)
			})
			.catch((err) => {
				console.log(err);
            })
    }, []);

    return(
        <div>
        <header>
          <h1>Admin Page</h1>
        </header>
       
        <AllTasks />
        <footer>
            <Link to={'/'}>
            <button className="logout" onClick={logOut2}>Log Out</button>
            </Link>
        </footer>
        </div>)
}
