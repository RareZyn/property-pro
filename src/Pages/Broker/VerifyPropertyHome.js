//import { Link } from "react-router-dom";
import "../Property/GeneralProperty.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import { PuffLoader } from "react-spinners";
import { useQuery } from "react-query";
import { unverifiedPropery, verifiedPropery } from "../../utils/api";

export const VerifyPropertyHome = () => {
  // const { data, isError, isLoading } = useProperties();

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
            link={`/verify-property-vehicle/${unverifiedData.property_id}`}
          />
        );
      case "House":
        return (
          <HouseDisplayCard
            key={unverifiedData.property_id}
            card={unverifiedData}
            link={`/verify-property-house/${unverifiedData.property_id}`}
          />
        );
      case "Land":
        return (
          <LandDisplayCard
            key={unverifiedData.property_id}
            card={unverifiedData}
            link={`/verify-property-land/${unverifiedData.property_id}`}
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
            link={`/verify-property-vehicle/${verifiedData.property_id}`}
          />
        );
      case "House":
        return (
          <HouseDisplayCard
            key={verifiedData.property_id}
            card={verifiedData}
            link={`/verify-property-house/${verifiedData.property_id}`}
          />
        );
      case "Land":
        return (
          <LandDisplayCard
            key={verifiedData.property_id}
            card={verifiedData}
            link={`/verify-property-land/${verifiedData.property_id}`}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="VerifyPropertyHome">
      <div className="property-browse-div">
        <div className="property-headline">Unverified Property</div>
        <div className="properties-grid">
          {unverifiedData &&
            unverifiedData.map(
              (unverifiedData) => unverifiedData && renderCard(unverifiedData)
            )}
        </div>

        <div className="property-headline">Verified Property</div>
        <div className="properties-grid">
          {verifiedData &&
            verifiedData.map(
              (verifiedData) => verifiedData && verifiedCard(verifiedData)
            )}
        </div>
      </div>
    </div>
  );
};
