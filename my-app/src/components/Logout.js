import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout() {
    const history = useHistory();
    
    const home = (e) => {
        history.push('/login')
      }
    return(
        <div>
        <h1>You successfully logged out!</h1>
        <p>We hope to see you soon!</p>
        <button className="homebutton" onClick={home}>Home</button>
        </div>
    )
}
