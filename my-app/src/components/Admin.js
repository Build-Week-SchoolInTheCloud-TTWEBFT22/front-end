import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import AllTasks from './AllTasks';
import VolunteerCard from './VolunteerCard';
import styled from 'styled-components';
import LoginPageImage1 from '../images/LoginPageImage1.png';

const TabletImage = styled.img`
  height: 60%;
  width: 25%;
  border-radius: 10px; 
`;

const AdminTitle = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 3em;
  color: ${(props) => props.theme.white};
`;

const AdminFirstFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
`;

const AdminTasks = styled.h2`
  font-size: 2em;
`;

const AdminVolunteers = styled.h2`
  font-size: 2em;
`;

const CardFlex3 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1%;
`;

const CardFlex4 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2%;
`;

const LogOutAdmin = styled.div`
 text-align: center;
 padding: 4%4%;
    button{
      background: ${(props) => props.theme.black};
      font-size: 1.3em;
      border-radius: 3px;
      border: 2px solid ${(props) => props.theme.black};
      margin: 0 1em;
      padding: 0.25em 1em;
      color: ${(props) => props.theme.tertiaryColor}; 
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
    }
`;

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
        <AdminFirstFlex>
          <AdminTitle>Welcome Admin Team!</AdminTitle>
          <TabletImage src={LoginPageImage1} alt="tabletinhand" />
        </AdminFirstFlex>
        <AdminTasks>All Available tasks:</AdminTasks>
          <CardFlex3>
            {allTasks.length > 0 ? 
              allTasks.map(task => {
                return <AllTasks key={task.taskid} description={task.description} /> 
              }) : null 
            }
          </CardFlex3>
        <AdminVolunteers>All Volunteers:</AdminVolunteers>
          <CardFlex4>
            {selectVolunteer.length > 0 ? 
              selectVolunteer.map(volunteer => {
                return <VolunteerCard key={volunteer.userid} username={volunteer.username} country={volunteer.country} availability={volunteer.availability} tasks={volunteer.usertasks} /> 
              }) : null 
            }
          </CardFlex4>
        <LogOutAdmin>
          <button className="logout" onClick={logOut2}>Log Out</button>
        </LogOutAdmin>
      </div>
    )
}
