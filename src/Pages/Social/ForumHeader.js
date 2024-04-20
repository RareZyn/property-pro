import "./ForumHeader.css";

export const ForumHeader = () => {
  return (
    <div className="ForumHeader">
      <div className="header">
        <h1 id="community-title">PropertyPro+ community</h1>
        <p id="description">
          Connecting customers, seller, broker and developer team together
        </p>
      </div>
      <div className="search">
        <img id="search-image" src={require("../../Res/image/search.png")} />
        <input
          id="search-text"
          type="text"
          placeholder="Search for topics discussion"
        />
      </div>
    </div>
  );
};
