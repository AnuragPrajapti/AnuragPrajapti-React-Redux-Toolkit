import React, { useState } from "react";

const  Service  = ()=> {
    const intioalcount = 0
    const [count , setCount] = useState(intioalcount);
   
     const FiveTime = () =>{
        for(let i = 0;i<5;i++){
             setCount(count + 5);
        }
     }
     
    return(
        <div>
            <h1>Welcome To Service Component</h1>
               Count : {count}
              <button onClick={ ()=> setCount(intioalcount)}>Reset</button>
              <button onClick={ ()=> setCount(count + 1)}>Increment</button>
              <button onClick={ ()=> setCount(count - 1)}>Decrement</button>
              <button onClick={FiveTime}>FiveTime</button>
        </div>
    );
}

export default Service;