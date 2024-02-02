import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import CatCard from "./components/CatCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Basket from "./components/Basket";
import { faker } from "@faker-js/faker";

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

      setData(data);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const plusToBasket = (item) => {
    console.log(`item: ${item}`);
    if (basket.includes(item)) {
      console.log("item already in basket");
    } else {
      let newBasket = [...basket];
      newBasket.push({ ...item, price: item.price, location: item.location });
      setBasket(newBasket);
      console.log(`basket: ${basket}`)
      // newBasket.push({ ...item, ...generateFakeData() });
      // setBasket(newBasket);
      // console.log(basket)
    }
  };

  const generateFakeData = () => {
    return {
      price: faker.commerce.price(),
      location: faker.location.city(),
    };
  };

  // Adding the  total price as a new function ######################

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basket.forEach((item) =>{
  totalPrice += parseFloat(item.price);
        });
    
    return totalPrice.toFixed(2); 
  };

  useEffect(() => {
    console.log("comp run");
    getCats();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar basket={basket} />
        <div className="nav-id">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            {/* <Route path="/basket" element={<Basket basketData={basket} />} />  */}

            {/* added new route for Total price */}
            <Route path="/basket" element={<Basket basketData={basket} catPricesTotal={calculateTotalPrice} />} />
          </Routes>
        </div>
      </BrowserRouter>

      <div className="app">
        <h1></h1>
        <div className="catCont">
          {cats.length > 0 &&
            cats.map((item, index) => {
              return <CatCard cat={item} key={item.id} plusToBasket={plusToBasket} />;
            })}

          {cats.length === 0 &&
            data.length > 0 &&
            data.map((item, index) => {
              return <CatCard cat={item} key={item.id} plusToBasket={plusToBasket} />;
            })}
        </div>
      </div>
    </>
  );
}



export default App;
