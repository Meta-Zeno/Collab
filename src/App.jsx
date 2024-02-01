import { useEffect, useState } from "react";
import "./App.css";
import CatCard from "./components/CatCard";

// import { TheCatAPI } from "@thatapicompany/thecatapi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  const [cats, setCats] = useState([]);

  const [data, setData] = useState([]);



  const [basket, setBasket] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  // const theCatAPI = new TheCatAPI("live_1j9u5LnTVpxTZI7rpqtemC1sln7kdJe2A4gfpnora6RrGgNjcRTfptX4rqnpPREA");

  // const { faker } = require('@faker-js/faker');




  const getCats = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=40&api_key=live_1j9u5LnTVpxTZI7rpqtemC1sln7kdJe2A4gfpnora6RrGgNjcRTfptX4rqnpPREA");

      if (!response.ok) {
        throw new Error("Something went wrong...")
      }

      const data = await response.json();

      // console.log(data);
      setData(data)


    } catch (error) {
      setErrorMsg(error.message)
    }

  };

  const addToBasket = (cat) => {
        setBasket([...basket, cat]);
      };

  useEffect(() => {
    console.log("comp run")
    getCats();
  }, []);




  return (
    <>    
      <div className="app">
          <h1></h1>
          {/* <Search search={handleSearch} /> */}
          <div className="catCont">
              {cats.length > 0 &&
                  cats.map((item, index) => {
                      return <CatCard cat={item} key={item.id} />;
                  })}

              {cats.length === 0 &&
                  data.length > 0 &&
                  data.map((item, index) => {
                      return <CatCard cat={item} key={item.id} />;
                  })}
          </div>
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