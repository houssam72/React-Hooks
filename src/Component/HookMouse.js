import React, { useState, useEffect } from "react";

export default function HookMouse() {
   
    const [count,setCount]=useState(0);
    

  useEffect(() => {
    const tick=()=>{
        setCount(prev=>prev +1)
   }
    const interval=setInterval(tick,1000)
    return()=>{
        console.log("clearInterval")
        clearInterval(interval)
    }
    //It will executed when the component will unmount Mine kaymoute Makayb9ach f Dom
  }, [count]);
  //UseEffect Run Effect only once Like ComponentDidMount
  return <div>{count}</div>;
}
