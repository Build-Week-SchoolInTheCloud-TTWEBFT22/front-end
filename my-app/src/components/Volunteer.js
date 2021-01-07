import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AllTasks from './AllTasks';
import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';
import teacherImage3 from '../images/teacherImage3.png';
import styled from 'styled-components';
import teacher2 from '../images/teacher2.png';

const TeacherImageThree = styled.img`
  height: 200px;
  width: 200px;
`

const TeacherImageTwo = styled.img`
  height: 200px;
  width: 200px;
`


export default function Student (props) {
    const [findAllTasks, setFindAllTasks] = useState({});
    const history = useHistory();
    
    const logOut1 = (e) => {
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
          setFindAllTasks(res.data)
        })
        .catch((err) => {
          console.log(err);
              })
      }, []);

    return(
        <div>
        <header>
          <h1>Volunteer Mentor Tasks</h1>
          <TeacherImageThree src={teacherImage3} alt="happyteacher"/>
        </header>
        <select  name="button">
          <option value="">--Select a Size--</option>
          <option value="small">{findAllTasks.length > 0 ? 
          findAllTasks.map(task => {
            return <AllTasks key={task.taskid} description={task.description} /> 
          }) : null 
        }</option>
        </select>
        <TeacherImageTwo src={teacher2} alt="happyteacher" />
        <footer>
          <button className="logout" onClick={logOut1}>Log Out</button>
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
      