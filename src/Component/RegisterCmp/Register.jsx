import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../ReduxToolkit/features/userSlice";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "react-bootstrap";
import noteContext from "../../Context/NoteContext";

const Register = () => {

   const title = useContext(noteContext)

   useEffect(() => {
     
      title.setTitle("Register Component...")
  
  }, [])
   

  const [isLoading, setLoading] = useState(false);
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addData = (e) => {
    e.preventDefault();



    const { name, email, date, password } = inpval;
    console.log(inpval);
    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is requred", {
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

      console.log("data added succesfully");
      setInpval({ name: " ", email: " ", date: " ", password: " " });
      dispatch(
        addUser({
          id: uuidv4(),
          name: inpval.name,
          email: inpval.email,
          date: inpval.date,
          password: inpval.password,
        })
      );
      toast("Successfully Register!!!!", {
        position: "top-center",
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
       
        navigate("/login");
      }, 5000);
    }

  };

  return (
    <>
        <title>Register Page......</title>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          {
            isLoading ? (<div>Please Wait...... <br />  <Spinner animation="border" /></div>) :

              <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                <h3 className="text-center col-lg-6">Register Here!!</h3>
                <Form>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control
                      type="text"
                      name="name"
                      value={inpval.name}
                      onChange={(e) =>
                        setInpval({ ...inpval, name: e.target.value })
                      }
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control
                      type="email"
                      name="email"
                      value={inpval.email}
                      onChange={(e) =>
                        setInpval({ ...inpval, email: e.target.value })
                      }
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 col-lg-6">
                    <Form.Control
                      value={inpval.date}
                      onChange={(e) =>
                        setInpval({ ...inpval, date: e.target.value })
                      }
                      name="date"
                      type="date"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type="password"
                      name="password"
                      value={inpval.password}
                      onChange={(e) =>
                        setInpval({ ...inpval, password: e.target.value })
                      }
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
                    Register
                  </Button>
                </Form>
                <p className="mt-3">
                  Already Have an Account{" "}
                  <span>
                    <NavLink to="/login">Login</NavLink>
                  </span>{" "}
                </p>
              </div>
          }
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
