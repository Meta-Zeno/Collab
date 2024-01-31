import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [catData, setCatData] = useState([]);

  const fetchData = async () => {
    try {
      const responce = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      if (!responce.ok) {
        throw new Error(responce.statusText);
      }
      const data = await responce.json();
      setCatData(data);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>
  
  
  
  </>;
}

export default App;
