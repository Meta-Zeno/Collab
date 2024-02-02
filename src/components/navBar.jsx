



import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import Basket from "./Basket";

const NavBar = ({ toggleBasket, basket }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/basket" className="basket-icon" onClick={toggleBasket}>Basket <span>{basket.length === 0 ? 0: basket.length}</span></Link>
    </nav>
  );
};

export default NavBar;

