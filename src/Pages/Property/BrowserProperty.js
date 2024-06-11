import React, { useState } from "react";
import style from "./BrowserProperty.module.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import SearchBar from "../../Cards/General Cards/SearchBar";
import { PuffLoader } from "react-spinners";
import { unverifiedPropery, verifiedPropery } from "../../utils/api";
import { useQuery } from "react-query";

export const BrowserProperty = () => {
  const [searchResults, setSearchResults] = useState(null);

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

  const handleSearchResults = (results) => {
    if (results && results.length > 0) {
      const verifiedSearchResults = results.filter(
        (result) => result.isVerified
      );
      const unverifiedSearchResults = results.filter(
        (result) => !result.isVerified
      );
      setSearchResults({
        verified:
          verifiedSearchResults.length > 0 ? verifiedSearchResults : null,
        unverified:
          unverifiedSearchResults.length > 0 ? unverifiedSearchResults : null,
      });
    } else {
      setSearchResults(null);
    }
  };

  const filteredVerifiedData =
    searchResults && searchResults.verified !== null
      ? searchResults.verified
      : verifiedData;
  const filteredUnverifiedData =
    searchResults && searchResults.unverified !== null
      ? searchResults.unverified
      : unverifiedData;

  return (
    <div>
      <header id={style["header-container"]}>
        <SearchBar
          id={style["browse-search"]}
          hint="Browse Property..."
          setSearchResults={handleSearchResults}
        />
      </header>
      <div className="property-browse-div">
        {filteredVerifiedData && (
          <div>
            <h1 className="property-headline">Verified Property</h1>
            <div className="properties-grid">
              {filteredVerifiedData.map(
                (property) => property && renderCard(property)
              )}
            </div>
          </div>
        )}

        {filteredUnverifiedData && (
          <div>
            <h1 className="property-headline">Unverified Property</h1>
            <div className="properties-grid">
              {filteredUnverifiedData.map(
                (property) => property && renderCard(property)
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
