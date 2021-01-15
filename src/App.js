import "./App.css";

import Search from "./Components/Search/Search";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Countries } from "./Context/CountriesContext/countries";
import Country from "./Components/CountryDisplay/Country";

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
    if (!search) {
      setSearching([]);
    } else {
      if (findedCountries.length > 10) {
        setSearching([{ message: "Too many matches, specify another filter" }]);
      } else {
        setSearching(findedCountries);
      }
    }
  }, [search]);

  const searchingHandler = (e) => {
    console.log(searching);
    setSearch(e.target.value);
  };
  const country =
    searching.length < 2
      ? searching.map((country) => {
          return (
            <Country
              name={country.name}
              src={country.flag}
              capital={country.capital}
              population={country.population}
              language={country.languages}
            />
          );
        })
      : null;
  return (
    <div className="App">
      <div>search: {search}</div>
      <Countries.Provider value={searching}>
        <Search search={searchingHandler} />
      </Countries.Provider>
      {country}
    </div>
  );
}

export default App;
