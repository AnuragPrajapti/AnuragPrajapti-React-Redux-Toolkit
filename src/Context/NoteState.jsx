import NoteContext from "./NoteContext";
import React, { useState } from "react";

const NoteState = (props)=>{
    const [title , setTitle] = useState("")
    const data={
        title,
        setTitle
    }

    return (
    <NoteContext.Provider value={data}>
        {props.children}
    </NoteContext.Provider>
   )
}


export default NoteState;