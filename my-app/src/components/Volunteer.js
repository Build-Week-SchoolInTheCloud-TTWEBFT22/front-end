import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AllTasks from './AllTasks';
import { axiosWithAuth } from './axiosWithAuth';
import teacherImage3 from '../images/teacherImage3.png';
import styled from 'styled-components';
import teacher2 from '../images/teacher2.png';

const TeacherImageThree = styled.img`
  height: 60%;
  width: 25%;
  border-radius: 10px; 
`;

const TeacherImageTwo = styled.img`
  height: 60%;
  width: 25%;
  border-radius: 10px; 
`;

const VolunteerTitle = styled.h1`
  text-align: center;
  font-size: 3em;
  color: ${(props) => props.theme.white};
  font-family: 'Roboto', sans-serif;
`;

const SubtitleStyle = styled.h2`
  padding-top: 5%;
  font-size: 2em;
`;

const FirstFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const CardFlex2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1%;
`;

const LastFlex = styled.div`
    display: flex;
    flex-direction: column;
  align-items: center;
    font-size: 1.5em;
    padding: 2%2%;
`;

const LogOutButton3 = styled.div`
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
        <VolunteerTitle>Welcome Mentors!</VolunteerTitle>
        <FirstFlex>
          <SubtitleStyle>Below is a list of all the Available Tasks</SubtitleStyle>
          <TeacherImageThree src={teacherImage3} alt="happyteacher"/>
          </FirstFlex>
        </header>
        <CardFlex2>
          {findAllTasks.length > 0 ? 
          findAllTasks.map(task => {
            return <AllTasks key={task.taskid} description={task.description} /> 
          }) : null 
        }
        </CardFlex2>
        <LastFlex>
          <TeacherImageTwo src={teacher2} alt="happyteacher" />
          <LogOutButton3>
            <button className="logout" onClick={logOut1}>Log Out</button>
          </LogOutButton3>
        </LastFlex>
        </div>)
}
