import style from "./BrowserProperty.module.css";
import { PropertyDisplayCard } from "../../Cards/Property Cards/PropertyDisplayCard";
import SearchBar from "../../Cards/General Cards/SearchBar";
import "./GeneralProperty.css";
import backIcon from "../../Res/image/back-icon.png";
import { NavHeader } from "../Navigation/NavHeader";

export const BrowserProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 6; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    propertyCards.push(<PropertyDisplayCard link={"/property-details"} />);
  }

  return (
    <div>
      <header id={style["header-container"]}>
        <SearchBar id={style["browse-search"]} hint="Browse Property..." />
      </header>
      <div className="properties-grid">
        <h1 className="property-headline">Hot Items</h1>
        {propertyCards}
      </div>
    </div>
  );
};
