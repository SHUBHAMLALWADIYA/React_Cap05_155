import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timer() {
  
 
    const [seconds, setSeconds] = useState(0);
    const [flag,setflag]=useState(true)
  
    useEffect(() => {
      
      const intervalId = setInterval(() => {
       
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
     
    }, []); 

    function toggleButton(){
     setflag(!flag)
     if(flag==false){
     setSeconds(0)
     }
    }
  
    return (
      <div>
        <button onClick={toggleButton}>
         {flag?"Hide The Timer":"Show The Timer"}
        </button>
        {flag?(<p>Timer: {seconds} seconds</p>):(<p>Click on button</p>)}
      </div>
    );
  };


export default Timer
