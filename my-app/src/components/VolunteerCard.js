import React from 'react';

function VolunteerCard({details}){
  // const {username, description} = props;
    if (!details) {
        return <h3>One moment please...</h3>
    }
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

    // volunteer.usertasks.description;
    //     }).map(function(volunteer){
    //         return volunteer.username
    //     })}