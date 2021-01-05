import React from 'react';

function VolunteerCard({details}){
    if (!details) {
        return <h3>One moment please...</h3>
      }
    
      return (
        <div className='volunteer container'>
          <h2>This is the volunteer's username: {details.username}</h2>
          {
            !!details.usertasks && !!details.usertasks.length &&
            <div>
              These are the tasks they're available to do:
              <ul>
                {details.usertasks.map((task, idx) => <li key={idx}>{task}</li>)}
              </ul>
            </div>
          }
        </div>
      )
    }
 
    export default VolunteerCard;
