import "./Results.css";
import { useContext } from "react";
import { Countries } from "../../../Context/CountriesContext/countries";
const Results = (props) => {
  const countries = useContext(Countries);
  return <ul className="ul">{props.children}</ul>;
};

export default Results;
