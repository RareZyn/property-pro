import style from "./BrowserProperty.module.css";
import { HouseDisplayCard, PropertyDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import SearchBar from "../../Cards/General Cards/SearchBar";
import "./GeneralProperty.css";
import backIcon from "../../Res/image/back-icon.png";
import { NavHeader } from "../Navigation/NavHeader";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";

export const BrowserProperty = () => {

  return (
    <div>
      <header id={style["header-container"]}>
        <SearchBar id={style["browse-search"]} hint="Browse Property..." />
      </header>
      <div className="property-browse-div">
        <div className="property-headline">Hot Items</div>
        <div id="Property-Card-Row">
        <HouseDisplayCard link={"/property-house-details"}></HouseDisplayCard>
        <LandDisplayCard link={"/property-land-details"}></LandDisplayCard>
        <VehicleDisplayCard link={"/property-vehicle-details"}></VehicleDisplayCard></div>
        </div>
      </div>
   
  );
};
