import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timer() {
 
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const timerId = setTimeout(() => {
      
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
     
      return () => clearTimeout(timerId);
    }, [seconds]);
  
    return (
      <div>
        <p>Timer: {seconds} seconds</p>
      </div>
    );
  };
  
  
  


export default Timer;
