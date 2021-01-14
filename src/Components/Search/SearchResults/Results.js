import "./Results.css";
import { useContext } from "react";
import { Countries } from "../../../Context/CountriesContext/countries";
const Results = (props) => {
  const countries = useContext(Countries);
  return (
    <ul className="ul">
      {countries.map((country) => {
        return <li>{country.name}</li>;
      })}
    </ul>
  );
};

export default Results;
