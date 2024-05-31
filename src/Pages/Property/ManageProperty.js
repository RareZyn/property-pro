import style from "./ManageProperty.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import "./GeneralProperty.css";


export const ManageProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 2; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    propertyCards.push(<HouseDisplayCard link={"/property-housedetails-overview"} />);
  }

  for (let i = 0; i < 2; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    propertyCards.push(<LandDisplayCard link={"/property-details-overview"} />);
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
