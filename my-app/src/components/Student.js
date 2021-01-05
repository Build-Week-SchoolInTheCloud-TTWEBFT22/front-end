import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
// import Login from './Login';
import VolunteerCard from './VolunteerCard';


export default function Student (props) {
    const [findVolunteer, setFindVolunteer] = useState([]);
    const history = useHistory();
    
    const logOut = (e) => {
        history.push('/logout')
      }
    useEffect(() => {
        axiosWithAuth()
        .get("/logout")
        .then((res) => {
            console.log(res.data)
            history.push('/logout')
        })
    })
	useEffect(() => {
		axiosWithAuth()
			.get("volunteers/volunteers")
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
        {findVolunteer.map((volunteer) => {
            return <VolunteerCard key={volunteer.userid} details={volunteer}/>
        })}
        
        <footer>
            <Link to={'/logout'}>
                <button className="logout" onClick={logOut}>Log Out</button>
            </Link>
        </footer>
        </div>)
}



