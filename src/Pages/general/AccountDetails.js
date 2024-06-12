import "./AccountDetails.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../utils/userAPI";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import { countOtherUserPurchase, countPurchaseProperty, countSellProperty } from "../../utils/api";


export const MyAccountDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  if(user?.brokerID){
    
  }
  const {
    data: sellPropertyData,
    isLoading: sellPropertyLoading,
    isError: sellPropertyError,
  } = useQuery(["countSellProperty", id], () => countSellProperty(id), {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  // Fetch data for counting purchase properties
  const {
    data: purchasePropertyData,
    isLoading: purchasePropertyLoading,
    isError: purchasePropertyError,
  } = useQuery(["countPurchaseProperty", id], () => countPurchaseProperty(id), {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const {
    data: soldPropertyData,
    isLoading: soldPropertyLoading,
    isError: soldPropertyError,
  } = useQuery(
    ["countOtherUserPurchase", id],
    () => countOtherUserPurchase(id),
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
    }
  );

  if (sellPropertyLoading || purchasePropertyLoading || soldPropertyLoading)
    return <p>Loading...</p>;
  if (sellPropertyError || purchasePropertyError || soldPropertyError)
    return (
      <p>
        Error:{" "}
        {sellPropertyError?.message ||
          purchasePropertyError?.message ||
          soldPropertyError?.message}
      </p>
    );

  return (
    <div className="MyAccountDetails">
      <div className="About">
        <div className="details-column">
          <div className="first-name">
            Username: {user ? user.username : null}
          </div>
          <h4 className="username">@hdjskdn</h4>
          <div className="type-of-user">Seller/Buyer</div>

          <div className="details">
            Full Name:
            <div className="full-name">
              {user ? `${user.firstName} ${user.lastName}` : null}
            </div>
            <span className="location-desc">
              <FaLocationDot />
              Location:{" "}
            </span>
            <div className="location">{user ? user.location : null}</div>
            <span className="email-desc">
              <MdAlternateEmail />
              Email:{" "}
            </span>
            <div className="email">{user ? user.email : null}</div>
            <span className="phone-number-desc">
              <FaPhoneAlt />
              Phone Number:
            </span>
            <div className="phone-number">{user ? user.phoneNumber : null}</div>
          </div>
        </div>

        <div className="about-badges-column">
          <div className="about-section">
            <div className="about">About me:</div>
            <p className="about-desc">
              {user === null ? null : user.description}
            </p>
          </div>
          <div className="badges-section">
            <div className="property-listed-badge">
              <div className="noOf-property-listed">
                {sellPropertyData ? sellPropertyData.count : 0}
              </div>
              Property Listed
            </div>
            <div className="sold-property-badge">
              <div className="noOf-sold-propety">
                {soldPropertyData ? soldPropertyData.count : 0}
              </div>
              Sold Property
            </div>
            <div className="property-purchased-badge">
              <div className="noOf-property-purchased">
                {purchasePropertyData ? purchasePropertyData.count : 0}
              </div>
              Property Purchased
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
