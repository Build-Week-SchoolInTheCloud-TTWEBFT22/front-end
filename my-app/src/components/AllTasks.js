import React from 'react';

function AllTasks({details}){
    if (!details) {
        return <h3>One moment please...</h3>
      }
    
      return (
        <div className='alltasks container'>
          <h2>These are all the available tasks: {details.description}</h2>
        </div>
      )
    }
 
    export default AllTasks;