import "./AccountTransaction.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../utils/userAPI.js";
import { useQuery } from "react-query";
import { getPropertyBought } from "../../utils/api.js";
import VehicleComponentCard from "../../Cards/Property Cards/VehicleComponentCard";
import HouseComponentCard from "../../Cards/Property Cards/HouseComponentCard";
import LandComponentCard from "../../Cards/Property Cards/LandComponentCard";
import { PuffLoader } from "react-spinners";


export const MyAccountTransaction = () => {
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
 console.log(userId);

  const { data, isError, isLoading } = useQuery(
    ["getPropertyBought", userId],
    () => getPropertyBought(userId),
    {
      enabled: !!userId,
      refetchOnWindowFocus: false,
    }
  );

  console.log(data);

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
    <div className="ViewAccountProperty">
      <div className="acc-grid-container">
        {isError && <span>Error while fetching the data</span>}
        {isLoading ? (
          <div className="loadContainer">
            <PuffLoader />
          </div>
        ) : (
          data && data.map((property) => property && renderCard(property))
        )}
      </div>
    </div>
  );
};


