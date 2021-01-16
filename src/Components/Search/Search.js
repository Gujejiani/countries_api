import "./Search.css";
import SearchResults from "./SearchResults/Results";

const Search = (props) => {
  return (
    <div className="Search_Parrent">
      <div>
        <label htmlFor="Search">find Countries </label>
        <input
          className="Search"
          placeholder="Search"
          id="Search"
          type="text"
          onChange={props.search}
        />
        <SearchResults>
          {props.countries.map((country) => {
            return (
              <li key={country.name + Math.random()}>
                {country.name}
                {country.message ?? (
                  <span
                    onClick={() => props.ShowClicked(country.name)}
                    className="Show"
                  >
                    Show
                  </span>
                )}
              </li>
            );
          })}
        </SearchResults>
      </div>
    </div>
  );
};

export default Search;
