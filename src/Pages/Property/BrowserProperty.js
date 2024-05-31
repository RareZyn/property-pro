import style from "./BrowserProperty.module.css";
import { HouseDisplayCard, PropertyDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import SearchBar from "../../Cards/General Cards/SearchBar";
import "./GeneralProperty.css";
import backIcon from "../../Res/image/back-icon.png";
import { NavHeader } from "../Navigation/NavHeader";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";

export const BrowserProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 1; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    propertyCards.push(<HouseDisplayCard link={"/property-house-details"} />);
  }

  for (let i = 0; i < 1; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    propertyCards.push(<LandDisplayCard link={"/property-land-details"} />);
  }

  for (let i = 0; i < 1; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    propertyCards.push(<VehicleDisplayCard link={"/property-vehicle-details"} />);
  }


  return (
    <div>
        <div className="property-headline">Manage Property</div>
        <div className="properties-grid">
          {propertyCards}
        </div>
      </div>
  );
};
