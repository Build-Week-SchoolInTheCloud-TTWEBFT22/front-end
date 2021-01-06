import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import VolunteerCard from './VolunteerCard';


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
          <h1>Find a Volunteer Mentor</h1>
        </header>
        {findVolunteer.length > 0 ? 
          findVolunteer.map(volunteer => {
            return <VolunteerCard key={volunteer.userid} username={volunteer.username} /> 
          }) : null 
        }
        <footer>
            <button className="logout" onClick={logOut}>Log Out</button>
        </footer>
        </div>)
}



