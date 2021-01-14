import "./Search.css";
import SearchResults from "./SearchResults/Results";

const search = (props) => {
  return (
    <div className="Search_Parrent">
      <div>
        {" "}
        <label htmlFor="Search">find Countries </label>
        <input
          className="Search"
          id="Search"
          type="text"
          onChange={props.search}
        />
        <SearchResults searched={[{ name: "Georsddsgia" }, { name: "nksd" }]} />
      </div>
    </div>
  );
};

export default search;
