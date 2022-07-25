import axios from "axios";
import React, { useEffect, useState } from "react";

const  About  = ()=> {
     
    const [id , setID] = useState();
    const [posts , setPosts] = useState([]);
    const [formClick , setFormClick] = useState(1);

    const  handleClick = () =>{
       setFormClick(id);
    }

    useEffect( ()=>{
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${formClick}`).then(res =>{
            console.log(res);
            setPosts(res.data);
          }).catch(err =>{
              console.log(err);
          })
    } , [formClick])

    return(
        <div align="center">
            <h1>Welcome To About Component</h1>
            <input  type="text" placeholder="Enter Id" value={id} onChange={ (e) => setID(e.target.value)} />
             <button onClick={handleClick}>Click Me</button>
            <div>{posts.title}</div>
        </div>
    );
}

export default About;