import React, { useContext } from "react";
import {  CountContext } from "../App";

export default function ComponentC() {
  
    const countContext = useContext(CountContext);
    return (
      <>
        <div>ComponentC -{countContext.countState}</div>
       <button onClick={()=>countContext.countDispatch("increment")}>Zide</button>
       <button onClick={()=>countContext.countDispatch("decrement")}>n9sse</button>
       <button onClick={()=>countContext.countDispatch("reset")}>Rde l9lawi ki kane</button>
  
      </>
    )
}
