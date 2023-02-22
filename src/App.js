import "./App.css";
import React, { useRef, useEffect,useState } from "react";

function App() {
     const [timer,setTimer]=useState(0)
  const inervalRef=useRef()
     useEffect(()=>{
      inervalRef.current=setInterval(()=>{
        setTimer(prevTimer=>prevTimer+1)
      },1000)
      // return()=>{
      //   clearInterval(inervalRef.current)
      // }
     },[])
   
  return (
    <>
      Hook Timer -{timer}
      <button onClick={()=>clearInterval(inervalRef.current)}>Clear Hook Timer</button>
    </> 
  );
}
 
export default App;
