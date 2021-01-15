import "./Results.css";
import { useContext } from "react";
import { Countries } from "../../../Context/CountriesContext/countries";
const Results = (props) => {
  const countries = useContext(Countries);

  return (
    <ul className="ul">
      {countries.map((country) => {
        return (
          <li key={country.name + Math.random()}>
            {country.name} {country.message}
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
