import "./ManageProperty.css";
import backIcon from "../../Res/image/back-icon.png";
import { PropertyDisplayCard } from "../../Cards/Property Cards/PropertyDisplayCard";
import { NavHeader } from "../Navigation/NavHeader";

export const ManageProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 4; i++) {
    propertyCards.push(
      <PropertyDisplayCard link={"/property-details-overview"} />
    );
  }

  return (
    <div>
      <div className="properties-grid">
        <h1 className="property-headline">Manage Property</h1>
        {propertyCards}
      </div>
    </div>
  );
};
