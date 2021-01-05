import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function Logout() {
    const history = useHistory();
    
    const home = (e) => {
        history.push('/')
      }
    return(
        <div>
        <h1>You successfully logged out!</h1>
        <p>We hope to see you soon!</p>
        <Link to={'/'}>
        <button className="homebutton" onClick={home}>Home</button>
        </Link>
        </div>
    )
}
