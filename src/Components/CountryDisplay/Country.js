import "./Country.css";

const Country = (props) => {
  return (
    <div className="Country">
      <h2>{props.name}</h2>
      <div>
        <label>{props.capital}</label>
        <label>{props.population}</label>
      </div>
      <h3>languages</h3>
      <ul>
        {props.language
          ? props.language.map((EN) => {
              return <li>{EN.name} </li>;
            })
          : null}
      </ul>
      <img src={props.src} width="200px" />
    </div>
  );
};

export default Country;
