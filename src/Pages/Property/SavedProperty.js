import style from "./SavedProperty.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import "./GeneralProperty.css";


export const SavedProperty = () => {
  const HousepropertyCards = [];
  const LandpropertyCards = [];
  const VehiclepropertyCards = [];
  let color = 0;

  for (let i = 0; i < 2; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    HousepropertyCards.push(<HouseDisplayCard link={"/property-house-details"} />);
  }
  for (let i = 0; i < 2; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    LandpropertyCards.push(<LandDisplayCard link={"/property-land-details"} />);
  }
  for (let i = 0; i < 1; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    VehiclepropertyCards.push(<VehicleDisplayCard link={"/property-vehicle-details"} />);
  }

  return (
    <div>
        <div className="property-headline">Saved Property</div>
        <div className="properties-grid">
          {HousepropertyCards}
          {LandpropertyCards}
          {VehiclepropertyCards}
        </div>
      </div>
  );
};

