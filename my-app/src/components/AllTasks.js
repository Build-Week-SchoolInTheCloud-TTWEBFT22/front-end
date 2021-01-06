import React from 'react';

function AllTasks(props){
  const {description} = props;
    
      return (
        <div className='alltasks container'>
          <h2>These are all the available tasks: {description}</h2>
        </div>
      )
    }
 
    export default AllTasks;