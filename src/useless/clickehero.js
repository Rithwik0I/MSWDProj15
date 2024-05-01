import { useState } from 'react';

export default function MyButton() {
    const [count, setCount] = useState(0);
    const [titl, setTitl] = useState("Starter");
    function handleClick() {
      setCount(count+1);
      level(count);
    }
    function level(count)
    {
      if(count>=1000)
        setTitl("MASTER CLICKER");
      else if(count>=500)
        setTitl("Experienced Clicker");
      else if(count>=250)
        setTitl("Regular Clicker");
      else if(count>=100)
        setTitl("Basic Clicker");
      else if(count>=25)
        setTitl("Apprentice Clicker");
      
      
      
  
      document.getElementById('Say').titl=titl;
    }
  
  
    return (
      <>
      <p id='Say'>{titl} clicked {count} times</p>
      <button onClick={handleClick}>I'm a button</button>
      </>
      
    );
  }