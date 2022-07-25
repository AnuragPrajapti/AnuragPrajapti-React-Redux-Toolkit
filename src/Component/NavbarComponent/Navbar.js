import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/about">About US</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/userData">UserData</Link></li>
                {/* <li><Link to="/updateUser">UpdateData</Link></li> */}
            </ul>
                <div className="form-outline">
                    <input type="search" placeholder="Search" id="form1" className="form-control"  />
                </div>
        </div>
    );
}

export default Navbar;

