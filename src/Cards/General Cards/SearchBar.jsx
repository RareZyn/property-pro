import styles from "./SearchBar.module.css";
import icon from "../../Res/image/search-icon.png";

function SearchBar({ hint }) {
  return (
    <div id={styles["search-bar"]}>
      <img srcSet={icon} alt="icon" id="icon" />
      <input type="text" id={styles["search-input"]} placeholder={hint} />
    </div>
  );
}

export default SearchBar;
