import React, { useContext, useState,useEffect } from "react";
import noteContext from "../../Context/NoteContext";

const  Service  = ()=> {
    const title = useContext(noteContext)
    const intioalcount = 0
    const [count , setCount] = useState(intioalcount);
   
     const FiveTime = () =>{
        for(let i = 0;i<5;i++){
             setCount(count + 5);
        }
     }


  useEffect(() => {
    title.setTitle("Service component....")
  }, [])
  
     
    return(
        <div>
            <title>Service Page......</title>
               Count : {count}
              <button onClick={ ()=> setCount(intioalcount)}>Reset</button>
              <button onClick={ ()=> setCount(count + 1)}>Increment</button>
              <button onClick={ ()=> setCount(count - 1)}>Decrement</button>
              <button onClick={FiveTime}>FiveTime</button>
        </div>
    );
}

export default Service;