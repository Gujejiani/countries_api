import "./Wether.css";

const Wether = (props) => {
  return (
    <div className="Wether_container">
      {" "}
      <label>
        <span>Temperature:</span> {props.temp} Celcius
      </label>
      <img src={props.wetherSrc} width="50px" />
      <label>
        <span>wind: </span>
        {props.wind} mph direction {props.dir}
      </label>
    </div>
  );
};

export default Wether;
