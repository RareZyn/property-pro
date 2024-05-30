import style from "./ManageProperty.css";
import { PropertyDisplayCard } from "../../Cards/Property Cards/PropertyDisplayCard";
import "./GeneralProperty.css";


export const ManageProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 5; i++) {
    color = i - 6 * parseInt(i / 6);
    console.log(color);
    propertyCards.push(<PropertyDisplayCard link={"/property-details"} />);
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
