import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import LogoutImage from '../images/LogoutImage.png';

const LogOutImage = styled.img`
  height: 100%;
  width: 70%;
  border-radius: 10px; 
`;

const HomeButton = styled.div`
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

const LogOutFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.5em;
    padding: 2%2%;
`;

export default function Logout() {
    const history = useHistory();
    
    const home = (e) => {
        history.push('/')
      }

    return(
      <LogOutFlex>
        <div>
        <LogOutImage src={LogoutImage} alt="goodbye" />
        </div>
        <div>
          <h1>You successfully logged out!</h1>
            <p>We hope to see you soon!</p>
          <HomeButton>
          <button className="homebutton" onClick={home}>Home</button>
          </HomeButton>
        </div>
      </LogOutFlex>
    )
}
