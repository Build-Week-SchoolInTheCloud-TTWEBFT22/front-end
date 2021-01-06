import React from 'react';

function VolunteerCard({details}){
      return (
        <div className='volunteer container'>
          <h2>This is the volunteer's username: </h2> 
          {details.username}
          {
            <div>
              These are the tasks they're available to do:
              <ul>
                {details.usertasks}
              </ul>
            </div>
          }
        </div>
      )
    }
    export default VolunteerCard;

  