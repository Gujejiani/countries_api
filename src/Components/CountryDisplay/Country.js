import "./Country.css";
import Wether from "../Wether/Wether";
const Country = (props) => {
  return (
    <div className="Country">
      <h2>{props.name}</h2>
      <div className="info">
        <label>Capital: {props.capital}</label>
        <label>Population: {props.population}</label>
      </div>
      <h3>languages</h3>
      <ul>
        {props.language
          ? props.language.map((EN) => {
              return <li key={EN.name + Math.random()}>{EN.name} </li>;
            })
          : null}
      </ul>
      <img src={props.src} width="200px" />
      <Wether>
        <label>
          <span>Temperature:</span> {props.temp} Celcius
        </label>
        <img src={props.wetherSrc} width="50px" />
        <label>
          <span>wind: </span>
          {props.wind} mph direction {props.dir}
        </label>
      </Wether>
    </div>
  );
};

export default Country;
