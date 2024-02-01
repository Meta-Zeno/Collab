import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import CatCard from "./components/CatCard";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  const [cats, setCats] = useState([]);
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getCats = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=40&api_key=live_1j9u5LnTVpxTZI7rpqtemC1sln7kdJe2A4gfpnora6RrGgNjcRTfptX4rqnpPREA"
      );

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();

      // console.log(data);
      setData(data);
    } catch (error) {
      setErrorMsg(error.message);
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
    console.log("comp run");
    getCats();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="nav-id">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

      <div className="app">
        <h1></h1>
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
  );
}

export default App;
