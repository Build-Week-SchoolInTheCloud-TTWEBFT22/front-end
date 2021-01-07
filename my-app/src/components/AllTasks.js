import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`  
  width: 100%;
  /* height: 80%; */
  margin: 2%;
  border-radius: 10px;  
  border: 2px solid ${(props) => props.theme.black};
  padding: 2%;
  color: ${(props) => props.theme.secondaryColor}; 
  background-color: ${(props) => props.theme.white};
`;

const TaskTitle = styled.p`  
  font-size: 1.5em;
`;

const TaskDiv = styled.div`
  padding: 2%;
  width: 150px;
  height: 150px;
  text-align: center;
  vertical-align: center;
  font-weight: 500;
`;

function AllTasks(props){
  const {description} = props;
      return (
        <div>
        <TaskContainer className='alltasks container'>
          <TaskTitle>
            <TaskDiv>{description}</TaskDiv>
            </TaskTitle>
        </TaskContainer>
        </div>
      )
    }
    export default AllTasks;