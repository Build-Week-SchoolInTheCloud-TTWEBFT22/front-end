import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import VolunteerCard from './VolunteerCard';
import studentImage3 from '../images/studentImage3.png';
import kidImage2 from '../images/kidImage2.png';
import styled from 'styled-components';

const StudentImageThree = styled.img`
  height: 50%;
  width: 25%;
  border-radius: 10px; 
`;

const StudentImageTwo = styled.img`
  height: 80%;
  width: 40%;
  border-radius: 10px; 
`;

const CardFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2%;
`;

const StudentTitle = styled.h1`
  text-align: center;
  font-size: 3em;
  color: ${(props) => props.theme.white};
`;

const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SubTitleChange = styled.h2`
  padding-top: 10%;
  font-size: 2em;
`;

const SecondStepTitle = styled.h2`
  padding-top: 20%;
  font-size: 2em;
`;

const SecondStepDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const LogOutButton1 = styled.div`
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
  const [findVolunteer, setFindVolunteer] = useState({});
  const history = useHistory();
    
  const logOut = (e) => { 
    axiosWithAuth()
    .get("/logout")
    .then((res) => {
      console.log(res.data)
    })
    history.push('/logout')
    }

	useEffect(() => {
		axiosWithAuth()
		.get("/volunteers/volunteers")
		.then((res) => {
			console.log(res.data);
			setFindVolunteer(res.data)
		})
		.catch((err) => {
			console.log(err);
        })
    }, []);

    return(
      <div>
        <header>
          <StudentTitle>Welcome Students!</StudentTitle>
        </header>
        <body>
          <FirstDiv>
            <div>
                <SubTitleChange>Step 1: Find a Volunteer Mentor from the list below</SubTitleChange>
            </div>
                <StudentImageTwo src={kidImage2} alt="kidontablet"/>
          </FirstDiv>
          <CardFlex>
            {findVolunteer.length > 0 ? 
              findVolunteer.map(volunteer => {
                return <VolunteerCard key={volunteer.userid} username={volunteer.username} country={volunteer.country} availability={volunteer.availability} tasks={volunteer.usertasks}/> 
              }) : null 
            }
          </CardFlex>
          <SecondStepDiv>
            <div>
              <SecondStepTitle>Step 2: Let's Get Ready to Study</SecondStepTitle>
            </div>
            <StudentImageThree src={studentImage3} alt="kidoncomputer"/>
          </SecondStepDiv>
        </body>
        <footer>
          <LogOutButton1>
            <button className="logout" onClick={logOut}>Log Out</button>
          </LogOutButton1>
        </footer>
      </div>
    )
}



