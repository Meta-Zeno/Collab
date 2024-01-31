import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const [catData, setCatData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setCatData(data);
      console.log(data)
    } catch (err) {
      console.log(err);

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <h1>TESTING</h1>
    
  )

}

export default App;

























// import React, { useState, useEffect } from 'react';
// import './App.scss';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ContactUs from './pages/ContactUs';
// import ProductDetails from './pages/ProductDetails';
// import Basket from './components/Basket';
// import { fetchCatData } from './api/catApi';


//   useEffect(() => {
//     fetchCatData().then((data) => setCats(data));
//   }, []);

//   const addToBasket = (cat) => {
//     setBasket([...basket, cat]);
//   };

//   const removeFromBasket = (index) => {
//     const newBasket = [...basket];
//     newBasket.splice(index, 1);
//     setBasket(newBasket);
//   };

//   const calculateTotalPrice = () => {
//     return basket.reduce((total, cat) => total + cat.price, 0);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Switch>
//           <Route path="/" exact>
//             <Home cats={cats} addToBasket={addToBasket} />
//           </Route>
//           <Route path="/product/:id">
//             <ProductDetails cats={cats} addToBasket={addToBasket} />
//           </Route>
//           <Route path="/contact-us">
//             <ContactUs />
//           </Route>
//         </Switch>
//         <Basket basket={basket} removeFromBasket={removeFromBasket} calculateTotalPrice={calculateTotalPrice} />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;