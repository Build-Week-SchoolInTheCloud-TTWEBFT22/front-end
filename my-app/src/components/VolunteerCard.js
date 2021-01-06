import React, { useEffect, useState, useRef } from 'react';
import Button from './button';
import DropDownCard from './dropDownCard';

function VolunteerCard(props){
  const {username} = props;

  const ButtonWithDropDownCmp = () => {
    const [open, setOpen] = useState(false);
    const drop = useRef(null);

    function handleClick(e) { 
      
      if(e.target.closest(`${drop.current.className}`) && open)
      setOpen(false)
    }
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      }
    })
      return (
        <div className='dropdown' ref={drop} style={{position: 'relative', margin: '16px'}}>
          <Button onClick={()=> setOpen(open => !open)} />
          {open && <DropDownCard data={username} />}
          {/* <h2>This is the volunteer's username: {username}</h2>  */}

        </div>
      )
    }
  }
    export default VolunteerCard;

  