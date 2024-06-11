import style from "./BrowserProperty.module.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import SearchBar from "../../Cards/General Cards/SearchBar";
import { PuffLoader } from "react-spinners";
import { unverifiedPropery, verifiedPropery } from "../../utils/api";
import { useQuery } from "react-query";

export const BrowserProperty = () => {
  const {
    data: unverifiedData,
    isError: unverifiedError,
    isLoading: unverifiedLoading,
  } = useQuery(["unverifiedProperty"], () => unverifiedPropery(), {
    refetchOnWindowFocus: false,
  });

  const {
    data: verifiedData,
    isError: verifiedError,
    isLoading: verifiedLoading,
  } = useQuery(["verifiedProperty"], () => verifiedPropery(), {
    refetchOnWindowFocus: false,
  });

  if (unverifiedError || verifiedError) {
    return <span>Error while fetching the data</span>;
  }
  if (unverifiedLoading || verifiedLoading) {
    return (
      <div className="loaderContainer">
        <PuffLoader />
      </div>
    );
  }

  const renderCard = (unverifiedData) => {
    if (!unverifiedData || !unverifiedData.propertyType) {
      return null;
    }

    switch (unverifiedData.propertyType) {
      case "Vehicle":
        return (
          <VehicleDisplayCard
            key={unverifiedData.property_id}
            card={unverifiedData}
            link={`/property-Vehicle-Details/${unverifiedData.property_id}`}
          />
        );
      case "House":
        return (
          <HouseDisplayCard
            key={unverifiedData.property_id}
            card={unverifiedData}
            link={`/property-House-Details/${unverifiedData.property_id}`}
          />
        );
      case "Land":
        return (
          <LandDisplayCard
            key={unverifiedData.property_id}
            card={unverifiedData}
            link={`/property-Land-Details/${unverifiedData.property_id}`}
          />
        );
      default:
        return null;
    }
  };

  const verifiedCard = (verifiedData) => {
    if (!verifiedData || !verifiedData.propertyType) {
      return null;
    }

    switch (verifiedData.propertyType) {
      case "Vehicle":
        return (
          <VehicleDisplayCard
            key={verifiedData.property_id}
            card={verifiedData}
            link={`/property-Vehicle-Details/${verifiedData.property_id}`}
          />
        );
      case "House":
        return (
          <HouseDisplayCard
            key={verifiedData.property_id}
            card={verifiedData}
            link={`/property-House-Details/${verifiedData.property_id}`}
          />
        );
      case "Land":
        return (
          <LandDisplayCard
            key={verifiedData.property_id}
            card={verifiedData}
            link={`/property-Land-Details/${verifiedData.property_id}`}
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
        <h1 className="property-headline">Verified Property</h1>
        <div className="properties-grid">
          {verifiedData &&
            verifiedData.map(
              (verifiedData) => verifiedData && verifiedCard(verifiedData)
            )}
        </div>

        <h1 className="property-headline">Unverified Property</h1>
        <div className="properties-grid">
          {unverifiedData &&
            unverifiedData.map(
              (unverifiedData) => unverifiedData && renderCard(unverifiedData)
            )}
        </div>
      </div>
    </div>
  );
};


////property-Vehicle-Details