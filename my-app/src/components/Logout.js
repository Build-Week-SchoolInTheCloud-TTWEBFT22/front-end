import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LogoutImage from '../images/LogoutImage.png';

const LogOutImage = styled.div`
  background-image: url(${LogoutImage});
  height: 500px;
  width: 500px;

`

export default function Logout() {
    const history = useHistory();
    
    const home = (e) => {
        history.push('/login')
      }
    return(
        <LogOutImage>
        <h1>You successfully logged out!</h1>
        <p>We hope to see you soon!</p>
        <button className="homebutton" onClick={home}>Home</button>
        </LogOutImage>
    )
}
