import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import noteContext from "../../Context/NoteContext";
import './Contact.css'

const  Contact  = ()=> {
     
     const title = useContext(noteContext)

     useEffect(() => {
       title.setTitle("Contact Component....")
     },[])
     
    
    const [posts ,setPosts] = useState([]);
   
      
     useEffect( ()=>{
        axios
          .get('https://jsonplaceholder.typicode.com/posts').then(res =>{
            //  console.log(res);
             setPosts(res.data);
          }).catch( err =>{
            console.log(err);
          })
     })

    return(
        <div>
            <title>Contact Page......</title>
            <h1 align="center">Welcome To Contact Component</h1>
            {
                posts.map( post => <ul key={post.id}>
                    <li align="center" id="post">{post.title}</li>
                </ul> )
            }
        </div>
    );
}

export default Contact;