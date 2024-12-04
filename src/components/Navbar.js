import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>ubcguessr</h1> 
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/play">Play</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;