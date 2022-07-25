import axios from "axios";
import React, { useEffect, useState } from "react";
import './Contact.css'

const  Contact  = ()=> {
   
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