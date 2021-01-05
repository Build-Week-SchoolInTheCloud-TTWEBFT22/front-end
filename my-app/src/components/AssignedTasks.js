import React from 'react';

function AssignedTasks({details}){
    if (!details) {
        return <h3>One moment please...</h3>
      }
    
      return (
        <div className='assignedtasks container'>
          {
            !!details.description && !!details.description.length &&
            <div>
              <p>These are the tasks assigned for you to do: </p>
              {/* <ul>
                {details.description.map((descr, idx) => <li key={idx}>{descr}</li>)}
              </ul> */}
            </div>
          }
        </div>
      )
    }
 
    export default AssignedTasks;