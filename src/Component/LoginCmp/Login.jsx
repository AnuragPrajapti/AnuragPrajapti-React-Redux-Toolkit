import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../ReduxToolkit/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import noteContext from "../../Context/NoteContext";



const Login = () => {
  const title = useContext(noteContext)
   
    useEffect(() => {
        title.setTitle("Login Component....")
    },[])
    

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getuserArr = useSelector((state) => state.users.User);


  // const login = useSelector((state) => state.users.id === true);  
  // useEffect(()=>{
  //   let login = getuserArr;
  //   if(login){
  //     navigate('/userData')
  //  }
  // },[])
 
  const [isLoading , setLoading] = useState();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

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
         const userdata  = getuserArr;
        const userlogin = userdata.filter((el ) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          toast.error("Invalid Email & Password", {
            position: "top-center",
          });
        } else {
          console.log("user login succesfulyy");
          dispatch(
            loginUser({
              email: email,
              password:password,
            })
          );
          toast("Successfully Login!!!!!",{
            position : "top-center"
          })
          setLoading(true);
          setTimeout(()=>{
              setLoading(false);
              navigate("/userData");
          },5000)
       
          
        }
      }
    }
  };
  return (
    <>
        <title>Login Page......</title>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          {
            isLoading ? <div>Please Wait..... <br /> <Spinner animation="border" /></div> :
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
            }
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
