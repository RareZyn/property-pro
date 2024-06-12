import styles from "./SearchBar.module.css";
import icon from "../../Res/image/search-icon.png";
import { useState } from "react";
import { getPropertyName } from "../../utils/api";

function SearchBar({ hint, setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const response = await getPropertyName(searchTerm);
      setSearchResults(response); // Set the response directly
    } catch (error) {
      console.error("Error searching properties:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div id={styles["search-bar"]}>
      <img srcSet={icon} alt="icon" id="icon" />
      <input
        type="text"
        id={styles["search-input"]}
        placeholder={hint}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
