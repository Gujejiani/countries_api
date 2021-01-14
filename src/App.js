import "./App.css";

import Search from "./Components/Search/Search";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Countries } from "./Context/CountriesContext/countries";
function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((result) => {
        setCountries(result.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    const findedCountries = countries.filter((c) => {
      return c.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearching(findedCountries);
  }, [search]);
  const searchingHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <div>search: {search}</div>
      <Countries.Provider value={searching}>
        <Search search={searchingHandler} />
      </Countries.Provider>
    </div>
  );
}

export default App;
