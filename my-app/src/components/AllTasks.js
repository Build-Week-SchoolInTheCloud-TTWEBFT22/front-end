import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`  
  width: 20%;
  height: 50%;
  margin: 1%;
  border-radius: 10px;  
  border: 2px solid ${(props) => props.theme.black};
  padding: 2%;
  color: ${(props) => props.theme.secondaryColor}; 
  background-color: ${(props) => props.theme.tertiaryColor};
`;

const TaskTitle = styled.p`  
  font-size: 1.5em;
`;

const TaskDiv = styled.div`
  padding: 1%;
  text-align: center;
  vertical-align: center;
  font-weight: 500;
`;

function AllTasks(props){
  const {description} = props;
    return (
        <TaskContainer className='alltasks container'>
          <TaskTitle>
            <TaskDiv>{description}</TaskDiv>
          </TaskTitle>
        </TaskContainer>
    )
  }
export default AllTasks;