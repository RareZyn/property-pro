import style from "./BrowserProperty.module.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import SearchBar from "../../Cards/General Cards/SearchBar";
import { useProperties } from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

export const BrowserProperty = () => {
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
          link={`/property-Vehicle-Details/${property.property_id}`}
        />
      );
    case "House":
      return (
        <HouseDisplayCard
          key={property.property_id}
          card={property}
          link={`/property-House-Details/${property.property_id}`}
        />
      );
    case "Land":
      return (
        <LandDisplayCard
          key={property.property_id}
          card={property}
          link={`/property-Land-Details/${property.property_id}`}
        />
      );
    default:
      return null;
  }
};

  return (
    <div>
      <header id={style["header-container"]}>
        <SearchBar id={style["browse-search"]} hint="Browse Property..." />
      </header>
      <div className="property-browse-div">
        <h1 className="property-headline">Unverified Property</h1>
        <div className="properties-grid">
          {data && data.map((property) => property && renderCard(property))}
        </div>
        <h1 className="property-headline">Verified Property</h1>
        <div className="properties-grid"></div>
      </div>
    </div>
  );
};
