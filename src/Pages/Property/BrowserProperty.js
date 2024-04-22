import style from "./BrowserProperty.module.css";
import { PropertyDisplayCard } from "./Property component/PropertyDisplayCard";
import SearchBar from "../../Components/SearchBar";
import backIcon from "../../Res/image/back-icon.png";
import { NavHeader } from "../Navigation/NavHeader";

export const BrowserProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 6; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    // switch (color) {
    //   case 0:
    //     propertyCards.push(<PropertyDisplayCard color={"#F49F1F"} />);
    //     break;
    //   case 1:
    //     propertyCards.push(<PropertyDisplayCard color={"#27A088"} />);
    //     break;
    //   case 2:
    //     propertyCards.push(<PropertyDisplayCard color={"#2B3D50"} />);
    //     break;
    //   case 3:
    //     propertyCards.push(<PropertyDisplayCard color={"#868686"} />);
    //     break;
    //   case 4:
    //     propertyCards.push(<PropertyDisplayCard color={"#27A088"} />);
    //     break;
    //   case 5:
    //     propertyCards.push(<PropertyDisplayCard color={"#FFFDEF"} />);
    //     break;
    // }
    propertyCards.push(<PropertyDisplayCard color={"#FFF2AF"} />);
  }

  return (
    <div className={style["BrowserProperty"]}>
      <NavHeader />
      <header id={style["header-container"]}>
        <SearchBar id={style["browse-search"]} hint="Browse Property..." />
      </header>
      <div className={style["Properties-grid"]}>
        <h1 id={style["title"]}>HOT ITEMS</h1>
        {propertyCards}
      </div>
    </div>
  );
};
