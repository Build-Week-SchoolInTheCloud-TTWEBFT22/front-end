import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
// import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';
import AllTasks from './AllTasks';
import VolunteerCard from './VolunteerCard';

export default function Student (props) {
  const [allTasks, setAllTasks] = useState({});
  const [selectVolunteer, setSelectVolunteer] = useState({});
  // const {id} = props;
  // const [logout, setLogout] = useState({});
  const history = useHistory();
    
  const logOut2 = (e) => { 
    axiosWithAuth()
    .get("/logout")
    .then((res) => {
      console.log(res.data)
      })
    history.push('/logout')
    }


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

    useEffect(() => {
      axiosWithAuth()
        .get("/volunteers/volunteers")
        .then((res) => {
          console.log(res.data);
          setSelectVolunteer(res.data)
        })
        .catch((err) => {
          console.log(err);
              })
      }, []);


    // useEffect(() => {
    //   axiosWithAuth()
    //     .get("/tasks/task/{id}")
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //           })
    //   }, [id]);

    return(
        <div>
        <header>
          <h1>Admin Page</h1>
        </header>

        {allTasks.length > 0 ? 
          allTasks.map(task => {
            return <AllTasks key={task.taskid} description={task.description} /> 
          }) : null 
        }
       {/* {selectVolunteer.map((volunteer, id) => {
            return <VolunteerCard key={id} details={volunteer}/>
        })} */}
      {/* {allTasks.map((all) => (
        <div>{all}</div>
      ))} */}
        {/* <p>These are your tasks: {allTasks.data.u}</p>  */}
        {/* <p>This is the volunteer's info: {selectVolunteer}</p>  */}
        <footer>
            <Link to={'/logout'}>
            <button className="logout" onClick={logOut2}>Log Out</button>
            </Link>
        </footer>
        </div>)
}

