import { Component, useEffect, useState } from "react";
import "./App.css";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import Card from "./components/card"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  const [catData, setCatData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const theCatAPI = new TheCatAPI("live_1j9u5LnTVpxTZI7rpqtemC1sln7kdJe2A4gfpnora6RrGgNjcRTfptX4rqnpPREA");

  const fetchData = async () => {
    try {
      const images = await theCatAPI.images.searchImages({
        limit: 20,
      });
      console.log(images);
      setCatData(images)

    } catch (error) {
      // handle error
    }

  };

  const addToBasket = (cat) => {
        setBasket([...basket, cat]);
      };

  useEffect(() => {
    console.log("comp run")
    fetchData();
  }, []);




  return (
    <>    
          <div className="catContainer">
          {
              catData.map((cat, index) => {
                return(
                  <button className="catButton" onClick={addToBasket}>
                  <img id={cat.id} key={index} className="catImage" src={cat.url} alt="catImage"></img>
                  </button>
                )  
              }
            )
          }
          </div>
    </>
    
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