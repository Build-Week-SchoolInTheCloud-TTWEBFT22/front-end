import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AllTasks from './AllTasks';
// import AllTasks from './AllTasks';
import AssignedTasks from './AssignedTasks';
import { axiosWithAuth } from './axiosWithAuth';



export default function Student (props) {
    const [findAllTasks, setFindAllTasks] = useState({});
    const [assignedTasks, setAssignedTasks] = useState({});
    const history = useHistory();
    
    const logOut1 = (e) => {
        history.push('/login')
      }
    useEffect(() => {
      axiosWithAuth()
        .get("/logout")
        .then((res) => {
            console.log(res.data)
      })
    })

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
  
  
      // useEffect(() => {
      //   axiosWithAuth()
      //     .get("/tasks/task/{id}")
      //     .then((res) => {
      //       console.log(res.data);
      //        assignedTasks(res.data)
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //           })
      //   }, [id]);

    return(
        <div>
        <header>
          <h1>Volunteer Mentor Tasks</h1>
        </header>
        {findAllTasks.map((all)=> {
         return <AllTasks key={all.taskid} description={all} />
       })}
        {assignedTasks.map((assign) => {
          return <AssignedTasks key={assign.taskid} description={assign} />
        })}
        <footer>
            <Link to={'/logout'}>
            <button className="logout" onClick={logOut1}>Log Out</button>
            </Link>
        </footer>
        </div>)
}
