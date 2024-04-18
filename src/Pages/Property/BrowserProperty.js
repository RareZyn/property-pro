import "./BrowserProperty.css";
import {PropertyDisplayCard} from "./Browser component/PropertyDisplayCard";
import SearchBar from "../../Components/SearchBar";
import backIcon from "../../Res/image/back-icon.png"

export const BrowserProperty = () => {
  return (
    <div className="BrowserProperty">
      <header>
        <a href=""><img id="back-button" src={backIcon} alt=""/></a>
        <SearchBar hint="Browse Property..."/>
      </header>
      <div className="Properties-grid">
        <h1 id="title">Browser Property</h1>
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
      </div>
    </div>
  );
};
