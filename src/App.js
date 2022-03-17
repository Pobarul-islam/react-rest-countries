import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return <div className="App">
    <LoadCountries></LoadCountries>
  </div>;
}


function LoadCountries() {
  // Step - 1
  const [countries, setCountries] = useState([]);

  // step - 2 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      // step - 3
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [])

  return (
    <div>
      <h1>Visiting Evey country of the world!!!</h1>
      <h3>Available Countries: ${ countries.length}</h3>
    </div>
  );
}
export default App;
