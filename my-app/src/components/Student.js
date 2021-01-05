// import React, { useEffect, useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';
// import { axiosWithAuth } from './axiosWithAuth';
// import Login from './Login';

// export default function Student (props) {
//     const [findVolunteer, setFindVolunteer] = useState({});
//     const history = useHistory();
    
//     const selectVolunteer = (e) => {
//         localStorage.clear("token");
// 		history.push("/login");
// 	};
// 	useEffect(() => {
// 		axiosWithAuth()
// 			.get("volunteers/volunteers")
// 			.then((res) => {
// 				console.log(res.data);
// 				setFindVolunteer(res.data)
// 			})
// 			.catch((err) => {
// 				console.log(err);
//             })
//     }, []);
//     return(
//         <div>
//         <header>
//           <h1>Find a Volunteer Mentor</h1>
//         </header>
//         {findVolunteer.map((volunteer) => {
//             return <Student key={volunteer.id} details={friend} />
//         })}
//         </div>)
// }