import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../ReduxToolkit/features/userSlice'
import { Spinner } from 'react-bootstrap'

const UpdateUser = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector((state)=>state?.users?.isEdit);
    const id = useSelector((state) => state.users.id);
    console.log(users)
    const navigate = useNavigate();

    const [isLoading , setLoading] = useState();
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })


    useEffect(()=>{
       if(users)
         setInpval({
            ...inpval,
            name : users.name,
            email : users.email,
            date : users.date,
            password : users.password,
            id : id
         })
       
    
       },[users,id])


    const handleCancel = () => {
        navigate("/userData");
    }

    const editData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (date === "") {
            toast.error('date field is requred', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            dispatch(updateUser({
                id : params.id,
                name : inpval.name,
                email : inpval.email,
                date : inpval.date,
                password : inpval.password
            }))

            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
                navigate("/userData")
            },5000)
           toast.success("Data Updated!!!!",{
              position : "top-center"
           })
            
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    {
                        isLoading ? <div>PLease Wait.... <br /> <Spinner animation='border' /> </div> 
                        :
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Register Here!!</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6">

                                <Form.Control type="text" name='name' value={inpval.name} onChange={(e) => setInpval({ ...inpval, name: e.target.value })} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">

                                <Form.Control type="email" name='email' value={inpval.email} onChange={(e) => setInpval({ ...inpval, email: e.target.value })} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">

                                <Form.Control value={inpval.date} onChange={(e) => setInpval({ ...inpval, date: e.target.value })} name='date' type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' value={inpval.password} onChange={(e) => setInpval({ ...inpval, password: e.target.value })} placeholder="Password" />
                            </Form.Group>
                            <span style={{ margin: "5px" }}>
                                <Button type="submit" variant="primary" style={{ background: "rgb(67, 185, 127)" }} onClick={editData} >Update</Button>
                                <Button type="reset" variant="primary" style={{ background: "rgb(67, 185, 127)" }} onClick={() => handleCancel()}>cancel</Button>
                            </span>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login</NavLink></span> </p>
                    </div>
                      }
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default UpdateUser;