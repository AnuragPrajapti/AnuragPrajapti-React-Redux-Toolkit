import axios from "axios";
import { Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import noteContext from "../../Context/NoteContext";

const  About  = ()=> {
    
 const title = useContext(noteContext);

    const [id , setID] = useState();
    const [posts , setPosts] = useState([]);
    const [formClick , setFormClick] = useState(1);
    const [isLoading , setLoading] = useState(false);

    const  handleClick = () =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },4000)
       setFormClick(id);
    }

    useEffect(() => {
        title.setTitle("About component....")
      }, [])
      
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
            <h1>{title.About}</h1>
             <title>About Page......</title>
            <h1>Welcome To About Component</h1>
            <input  type="text" placeholder="Enter Id" value={id} onChange={ (e) => setID(e.target.value)} />
             {
               isLoading ? <div>Please Wait ......</div> : <button onClick={handleClick}>Click Me</button>
             }
             {
                isLoading ? <Spinner animation="border" />  :  <div>{posts.title} {posts.body}</div>
             }
             
            
        </div>
    );
}

export default About;