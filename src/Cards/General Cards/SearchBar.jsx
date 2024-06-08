import styles from "./SearchBar.module.css";
import icon from "../../Res/image/search-icon.png";
import { useState } from "react";
import axios from "axios";

function SearchBar({ hint, setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const response = await axios.get(`http://localhost:5000/forum/search?q=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching forums:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    // <>
    //     <div id="search-bar">
    // <img src={icon} alt="icon" srcset="" id="icon"/>
    //         <input type="text" id="search-input" className="txt24" placeholder={hint}/>
    //     </div>
    // </>
    <div id={styles["search-bar"]}>
      <img src={icon} alt="icon" srcset="" id="icon" />
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
