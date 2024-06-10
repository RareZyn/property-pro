//import { Link } from "react-router-dom";
import "../Property/GeneralProperty.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import { useProperties } from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

export const VerifyPropertyHome = () => {
const { data, isError, isLoading } = useProperties();

if (isError) {
  return <span>Error while fetching the data</span>;
}
if (isLoading) {
  return (
    <div className="loaderContainer">
      <PuffLoader />
    </div>
  );
}
const renderCard = (property) => {
  if (!property || !property.propertyType) {
    return null;
  }

  switch (property.propertyType) {
    case "Vehicle":
      return (
        <VehicleDisplayCard
          key={property.property_id}
          card={property}
          link={`/verify-property-vehicle/${property.property_id}`}
        />
      );
    case "House":
      return (
        <HouseDisplayCard
          key={property.property_id}
          card={property}
          link={`/verify-property-house/${property.property_id}`}
        />
      );
    case "Land":
      return (
        <LandDisplayCard
          key={property.property_id}
          card={property}
          link={`/verify-property-land/${property.property_id}`}
        />
      );
    default:
      return null;
  }
};
  return (
    <div className="VerifyPropertyHome">
      <div className="property-browse-div">
        <div className="property-headline">New Published Property</div>
        <div className="properties-grid">
          {data && data.map((property) => property && renderCard(property))}
        </div>
      </div>
    </div>
  );
};
