import { useQuery } from "react-query";
import { getAllFavorites } from "../../utils/api.js";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../util.js";
import React, { useContext, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";

export const SavedProperty = () => {
  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log("No user token");
    }
  }, [userToken]);

  const userId = user?._id;
  console.log("UserID " + userId);

  const { data, isError, isLoading } = useQuery(
    ["getAllFavorites", userId],
    () => getAllFavorites(userId),
    {
      enabled: !!userId,
      refetchOnWindowFocus: false,
    }
  );

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

  console.log(data);

  return (
    <div>
      <div className="property-headline">Saved Property</div>
      <div className="properties-grid">
        {data && data.map((property) => property && renderCard(property))}
      </div>
    </div>
  );
};
