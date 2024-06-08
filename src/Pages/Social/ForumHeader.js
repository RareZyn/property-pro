import "./ForumHeader.css";
import SearchBar from "../../Cards/General Cards/SearchBar";

export const ForumHeader = ({ setSearchResults }) => {
  return (
    <div className="ForumHeader">
      <h1 id="community-title">PropertyPro+ community</h1>
      <span id="description">
        Connecting customers, seller, broker and developer team together
      </span>
      <div id="search-container">
        <SearchBar id hint={"Search for topics discussion"} setSearchResults={setSearchResults}/>
      </div>
    </div>
  );
};
