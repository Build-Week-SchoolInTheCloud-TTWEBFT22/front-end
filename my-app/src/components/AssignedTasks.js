import React from 'react';

function AssignedTasks(props){
  const {assign} = props;
      return (
        <div className='assignedtasks container'>
              <p>These are the tasks assigned for you to do: {assign.description}</p>
        </div>
      )
    }
 
    export default AssignedTasks;