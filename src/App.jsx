import { Component, useEffect, useState } from "react";
import "./App.css";

import { TheCatAPI } from "@thatapicompany/thecatapi";
import faker from "@faker-js/faker"; //i have added the faker library for the random information on the cats
import Card from "./components/card";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [catData, setCatData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isBasketOpen, setIsBasketOpen] = useState(false); //added the basket usestate for the modal

  const theCatAPI = new TheCatAPI(
    "live_1j9u5LnTVpxTZI7rpqtemC1sln7kdJe2A4gfpnora6RrGgNjcRTfptX4rqnpPREA"
  );

  const fetchData = async () => {
    try {
      const images = await theCatAPI.images.searchImages({
        limit: 10,
      });
      setCatData(images);
    } catch (error) {
      // handle error
    }
  };

  const addToBasket = (item) => {
    if (basket.includes(item)) {
      console.log("item already in basket");
    } else {
      let newBasket = [...basket];
      newBasket.push({ ...item, ...generateFakeData() }); //adding the fake data to the bbasket from the newly imported library
      setBasket(newBasket);
    }
  };

  const removeFromBasket = (index) => {
    let newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  const generateFakeData = () => {
    return {
      price: faker.commerce.price(),
      location: faker.address.city(),
      // keep adding more informaiton from library if needed.
    };
  };

  const calculateTotalPrice = () => {
    return basket.reduce((total, item) => total + item.price, 0);
  };

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <h1>
        <button onClick={toggleBasket}>Basket ({basket.length})</button>
      </h1>

      <div className="catContainer">
        {catData.map((cat, index) => (
          <CatSpace
            key={index}
            id={cat.id}
            catPic={cat.url}
            addCat={() => addToBasket(cat)}
            removeCat={() => removeFromBasket(index)}
          />
        ))}
      </div>

      {isBasketOpen && (
        <Basket
          basket={basket}
          totalPrice={calculateTotalPrice()}
          closeBasket={toggleBasket}
        />
      )}
    </div>
  );
}

const CatSpace = (props) => {
  return (
    <div className="catImageContainer">
      <img className="catImage" src={props.catPic} alt="catImage"></img>
      <button className="catButton" onClick={props.addCat}>
        ADD
      </button>
      <button onClick={props.removeCat}>REMOVE</button>
    </div>
  );
};

const Basket = ({ basket, totalPrice, closeBasket }) => {
  return (
    <div className="basketModal">
      <h2>Your Basket</h2>
      {basket.map((item, index) => (
        <div key={index}>
          <p>
            {item.price} - {item.location}
          </p>
        </div>
      ))}
      <p>Total Price: {totalPrice}</p>
      <button onClick={closeBasket}>Close Basket</button>
    </div>
  );
};

export default App;
