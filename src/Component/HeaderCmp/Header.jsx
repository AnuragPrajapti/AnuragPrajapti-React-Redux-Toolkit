import React from "react";
import './Header.css'
import logo from '../Images/Logo.jpg'
import { useContext } from "react";
import noteContext from "../../Context/NoteContext";

const Header = () => {
    const title =  useContext(noteContext);
    return (
        <div className="header">
            <img src={logo} alt="logo" width="100px" height="100px" />
            <h2 className="title"><b>{title.title ? title.title : "Time Travel"}</b></h2> 
               
        </div>
    );
}

export default Header;