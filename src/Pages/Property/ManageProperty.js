// components/ManageProperty.js
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import VehicleComponentCard from "../../Cards/Property Cards/VehicleComponentCard";
import HouseComponentCard from "../../Cards/Property Cards/HouseComponentCard";
import LandComponentCard from "../../Cards/Property Cards/LandComponentCard";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../util.js";
import { getPropertySeller } from "../../utils/api";
import "./ManageProperty.css";


export const ManageProperty = () => {
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

  const sellerId = user?._id;
  console.log("UserID: " + sellerId);

  const { data, isError, isLoading } = useQuery(
    ["getAllFavorites", sellerId],
    () => getPropertySeller(sellerId),
    {
      enabled: !!sellerId,
      refetchOnWindowFocus: false,
    }
  );

  const renderCard = (property) => {
    if (!property || !property.propertyType) {
      return null;
    }

    switch (property.propertyType) {
      case "Vehicle":
        return (
          <VehicleComponentCard
            key={property.property_id}
            card={property}
            link={`/${property.property_id}/property-vehicledetails-overview`}
          />
        );
      case "House":
        return (
          <HouseComponentCard
            key={property.property_id}
            card={property}
            link={`/${property.property_id}/property-housedetails-overview`}
          />
        );
      case "Land":
        return (
          <LandComponentCard
            key={property.property_id}
            card={property}
            link={`/${property.property_id}/property-landdetails-overview`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="manage-property-container">
      <div className="property-headline">Manage Property</div>
      <div className="manageproperty-div">
        {isError && <span>Error while fetching the data</span>}
        {isLoading ? (
          <div className="loadContainer">
            <PuffLoader />
          </div>
        ) : (
          data && data.map((property) => property && renderCard(property))
        )}
      </div>
      <div className="manageproperty-add">
        <Link to="/Publish-Property">
          <button>
            <IoAddCircleOutline className="add-icon" />
            <span>Add More Property</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
