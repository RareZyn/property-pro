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
import { getUser } from "../../utils/userAPI.js";
import { getPropertySeller } from "../../utils/api.js";
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

  const { data, isError, isLoading } = useQuery(
    ["getPropertySeller", sellerId],
    () => getPropertySeller(sellerId),
    {
      enabled: !!sellerId,
      refetchOnWindowFocus: false,
    }
  );

  console.log(data);

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

  const renderCard = (data) => {
    if (!data || !data.propertyType) {
      return null;
    }

    switch (data.propertyType) {
      case "Vehicle":
        return (
          <VehicleComponentCard
            key={data.property_id}
            card={data}
            link={`/${data.property_id}/property-vehicledetails-overview`}
          />
        );
      case "House":
        return (
          <HouseComponentCard
            key={data.property_id}
            card={data}
            link={`/${data.property_id}/property-housedetails-overview`}
          />
        );
      case "Land":
        return (
          <LandComponentCard
            key={data.property_id}
            card={data}
            link={`/${data.property_id}/property-landdetails-overview`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="manage-property-container">
      <div className="property-headline">Manage Property</div>
      <div className="manageproperty-add">
        <Link to="/Publish-Property">
          <button id="button-add">
            <IoAddCircleOutline className="add-icon" />
            <span>Add More Property</span>
          </button>
        </Link>
      </div>
      <div className="manageproperty-add">
        <Link to="/broker-list">
          <button id="button-add">
            <IoAddCircleOutline className="add-icon" />
            <span>Find a broker</span>
          </button>
        </Link>
      </div>
      <div className="manageproperty-div">
        {data && data.map((data) => data && renderCard(data))}
      </div>
    </div>
  );
};
