



import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import Basket from "./Basket";
import { TiShoppingCart } from "react-icons/ti";

const NavBar = ({ toggleBasket, basket }) => {
  return (
    <nav className="navbar">
      <Link to="/"><img className="logo" src="src\assets\logo.png" alt="home logo" /></Link>
      <Link to="/About"><h1 className="lexend-600 lrg">FelineFyn</h1></Link>
      {/* <Link to="/Contact">Contact</Link> */}
      <Link to="/basket" className="basket-icon pushRight" onClick={toggleBasket}><TiShoppingCart /> <span className="basket-text">{basket.length === 0 ? 0: basket.length}</span></Link>
    </nav>
  );
};

export default NavBar;

