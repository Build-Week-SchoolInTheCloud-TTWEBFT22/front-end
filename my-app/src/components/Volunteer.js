import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
// import AllTasks from './AllTasks';
import AssignedTasks from './AssignedTasks';
import { axiosWithAuth } from './axiosWithAuth';



export default function Student (props) {
    // const [allTasks, setAllTasks] = useState({});
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
            history.push('/logout')
      })
    })
    // const viewAllTasks = (e) => {
    //     localStorage.clear("token");
		// history.push("/volunteer");
    // };
    
  //   const viewAssignedTasks = (e) => {
  //       localStorage.clear("token");
	// 	history.push("/volunteer");
	// };
	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get("/tasks/tasks")
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setAllTasks(res.data)
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
  //           })
  //   }, []);

    useEffect(() => {
		axiosWithAuth()
			.get("tasks/task/{taskid}")
			.then((res) => {
				console.log(res.data);
				setAssignedTasks(res.data)
			})
			.catch((err) => {
				console.log(err);
            })
    }, []);

    return(
        <div>
        <header>
          <h1>Volunteer Mentor Tasks</h1>
        </header>
        {/* {allTasks.map((all) => {
            return <AllTasks key={all.id} description={all} />
        })} */}
        {/* <AllTasks /> */}
        <AssignedTasks />
        <footer>
            <Link to={'/logout'}>
            <button className="logout" onClick={logOut1}>Log Out</button>
            </Link>
        </footer>
        </div>)
}
