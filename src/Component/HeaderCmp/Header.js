import React from "react";
import './Header.css'
import logo from '../Images/Logo.jpg'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" width="100px" height="100px" />
            <h2 className="title"><b>Time Travel</b></h2> 
        </div>
    );
}

export default Header;