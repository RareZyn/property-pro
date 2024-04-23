import "./SavedProperty.css";
import { PropertyDisplayCard } from "../../Cards/Property Cards/PropertyDisplayCard";
import backIcon from "../../Res/image/back-icon.png";

export const SavedProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 8; i++) {
    propertyCards.push(<PropertyDisplayCard link={"/property-details"} />);
  }

  return (
    <div className="SavedProperty">
      <div className="properties-grid">
        <h1 className="property-headline">Saved Property</h1>
        {propertyCards}
      </div>
    </div>
  );
};
