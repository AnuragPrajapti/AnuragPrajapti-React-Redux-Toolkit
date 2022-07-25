// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import './Login.css'

// const  Login  = ()=> {

//     const history = useNavigate();

//     const [formValue , setFormValue] = useState({
//         email : "",
//         password : ""
//     })

//     const [data , setData] = useState([]);
//      console.log(formValue)

//          const handleInputChange = (e)=>{
//              const { value , name} = e.target;
//              setFormValue(()=>{
//                 return {
//                     ...formValue,
//                     [name] : value
//                 }
//              })
//          }

//       const handleSubmit = (e) =>{
//          e.preventDefault();
//          const getuserArr = localStorage.getItem('register')
//          console.log(getuserArr);

//          const {email , password} = formValue;
//          if(email === ""){
//             toast.error('email field is required',{
//                 position : "top-center"
//             });
//          }else if(!email.includes('@')){
//             toast.error('plz enter a valid email',{
//                 position : "top-center"
//             })
//          }else if(password === ""){
//             toast.error('password field is required',{
//                 position : "top-center"
//             })
//          }else if(!password.length < 5){
//             toast.error('PLease Enter a Valid password',{
//                 position : "top-center"
//             })
//          }else {
//             if(getuserArr && getuserArr.length){
//                 const userData = JSON.parse(getuserArr);
//                 const userLogin = userData.filter((el)=>{
//                     return el.email === email && el.password === password
//                 });
//                 if(userLogin.length === 0){
//                     alert("invalid details")
//                 }else{
//                     console.log("Successfully User Login")
//                     localStorage.setItem("user_login",JSON.stringify(userLogin))
//                     history("/userData")
//                 }
//             }
//          }
//       }

//     return(
//         <div>
//         <nav className="header">
//           <div>
//             <h2 align="center">
//               <b>Login Here!!!</b>
//             </h2>
//           </div>
//         </nav>
//         <div className="container">
//           <div className="container-body">
//             <div className="">
//               <form className="LoginForm" >
//                 <div>
//                   <label>
//                     UserName *
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     placeholder="Email address"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label>
//                     Password *
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     name="password"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <div className="custom-control custom-checkbox">
//                     <input
//                       type="checkbox"
//                       id="customCheck1"

//                    />
//                     <label>Remember me</label>
//                   </div>
//                 </div>
//                 <button className="btn btn-primary" type="submit" onClick={handleSubmit} >
//                   Login
//                 </button>
//                 <p className="mt-2">
//                   Don't have account? <Link to="/register">Register</Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Login;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("register");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/userData");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Login Here!!</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Login
              </Button>
            </Form>
            <p className="mt-2">
              Don't have account? <Link to="/register">Register</Link>
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
