import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`  
  width: 100%;
  border-radius: 10px;  
  border: 2px solid ${(props) => props.theme.black};
  padding: 2%;
  color: ${(props) => props.theme.secondaryColor}; 
  background-color: ${(props) => props.theme.white};
`;

const TaskTitle = styled.h2`  
  font-size: 1.5em;
`;

function AllTasks(props){
  const {description} = props;
      return (
        <div>
        <TaskContainer className='alltasks container'>
          <TaskTitle>{description}</TaskTitle>
        </TaskContainer>
        </div>
      )
    }
    export default AllTasks;