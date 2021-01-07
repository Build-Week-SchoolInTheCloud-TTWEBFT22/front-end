import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import AllTasks from './AllTasks';
import VolunteerCard from './VolunteerCard';
import styled from 'styled-components';
import LoginPageImage1 from '../images/LoginPageImage1.png';

const TabletImage = styled.img`
  height: 200px;
  width: 200px;
`

export default function Student (props) {
  const [allTasks, setAllTasks] = useState({});
  const [selectVolunteer, setSelectVolunteer] = useState({});
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

    return(
        <div>
        <header>
          <h1>Admin Page</h1>
        </header>
        <TabletImage src={LoginPageImage1} alt="tabletinhand" />
        {allTasks.length > 0 ? 
          allTasks.map(task => {
            return <AllTasks key={task.taskid} description={task.description} /> 
          }) : null 
        }
         {selectVolunteer.length > 0 ? 
          selectVolunteer.map(volunteer => {
            return <VolunteerCard key={volunteer.userid} username={volunteer.username} /> 
          }) : null 
        }
        <footer>
            <button className="logout" onClick={logOut2}>Log Out</button>
        </footer>
        </div>)
}


      // axios
      //   .get("/tasks/task", {
      //   params: {
      //     taskid: 10
      //   }
      // })
      //   .then((res) => {
      //     console.log(res.data);
      //     setAssignedTasks(res.data)
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })