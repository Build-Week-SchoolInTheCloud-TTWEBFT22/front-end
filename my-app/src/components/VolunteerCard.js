import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`  
  width: 25%;
  border-radius: 10px;  
  border: 2px solid ${(props) => props.theme.black};
  padding: 2%;
  margin: 1%;
  color: ${(props) => props.theme.secondaryColor}; 
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
`;

const UsernameTitle = styled.h2`
font-size: 1.4em;
margin: 0;
padding-bottom: 4%;
font-weight: 700;
`;

const CountryTitle = styled.h3`
font-size: 1.1em;
margin: 0;
padding-bottom: 4%;
`;

const AvailabilityTitle = styled.h4`
font-size: 1em;
margin: 0;
padding-bottom: 4%;
`;

function VolunteerCard(props){
  const { username, country, availability, tasks } = props;
      return (
          <CardContainer>
              <UsernameTitle>{username}</UsernameTitle>
              <CountryTitle>{country}</CountryTitle>
              <AvailabilityTitle>{availability}</AvailabilityTitle>
              {tasks.map(task => {
              return <div>{task.description}</div> })}
          </CardContainer>
        )
}

export default VolunteerCard;

    