import style from "./SavedProperty.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import "./GeneralProperty.css";


export const SavedProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 5; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    propertyCards.push(<HouseDisplayCard link={"/property-details"} />);
  }

  return (
    <div>
        <div className="property-headline">Saved Property</div>
        <div className="properties-grid">
          {propertyCards}
        </div>
      </div>
  );
};

