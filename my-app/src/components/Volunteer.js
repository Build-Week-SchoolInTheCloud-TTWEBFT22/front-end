import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AllTasks from './AllTasks';
import axios from 'axios';
// import { createPopper } from '@popperjs/core';
// import AllTasks from './AllTasks';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AssignedTasks from './AssignedTasks';
import { axiosWithAuth } from './axiosWithAuth';

export default function Student (props) {
    const [findAllTasks, setFindAllTasks] = useState({});
    // const [assignedTasks, setAssignedTasks] = useState({});
    // const [dropdownOpen, setOpen] = useState(false);
    // const toggle = () => setOpen(!dropdownOpen);
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
      

    return(
        <div>
        <header>
          <h1>Volunteer Mentor Tasks</h1>
        </header>
        {/* <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            Button Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Header</DropdownItem>
            <DropdownItem >Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown> */}
        {findAllTasks.length > 0 ? 
          findAllTasks.map(task => {
            return <AllTasks key={task.taskid} description={task.description} /> 
          }) : null 
        }
        {/* {assignedTasks.length > 0 ? 
          assignedTasks.map(task => {
            return <AssignedTasks key={task.taskid} description={task.description} /> 
          }) : null 
        } */}
        
        <footer>
          <button className="logout" onClick={logOut1}>Log Out</button>
        </footer>
        </div>)
}
