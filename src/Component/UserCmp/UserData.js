import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./UserData.css";
import { deleteUser } from "../../ReduxToolkit/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../ReduxToolkit/features/userSlice";
import noteContext from "../../Context/NoteContext";


const UserData = () => {
  
  const title = useContext(noteContext)

  useEffect(() => {
     title.setTitle("Users Component...")
  }, [])
  

  const users = useSelector((state)=>state.users.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
     dispatch(deleteUser({ id }));    
  };

  const handleEdit = (id) => {
     dispatch(editUser(id))
     navigate(`/updateUser/${id}`)
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Password</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          { users?.map((e, id) => {
            return (
              <tr key={id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.date}</td>
                <td>{e.password}</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 28 28"
                    stroke="currentColor"
                    strokeWidth={2}
                    onClick={()=>handleDelete(id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{color : 'red'}}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="3 0 28 28"
                    stroke="currentColor"
                    strokeWidth={2}
                    onClick={()=>handleEdit(id)}
                 >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{color : 'blue'}}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mt-2">
        Don't have account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default UserData;
