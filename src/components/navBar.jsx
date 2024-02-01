import React from "react";
import { Link } from "react-router-dom"
import "./navBar.css"


const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="./About">About</Link>
            <Link to="./Contact">Contact</Link>
            <div className="basket-icon">Basket</div>
         </nav>
    );
};

export default NavBar;