import "./PropertyDisplayCard.css";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaTags,
  FaLeftRight,
  FaCity,
  FaFileCircleQuestion,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const LandDisplayCard = ({ link, card }) => {
  const navigate = useNavigate();
  if (!card) return null;
  return (
    <Link to={link}>
      <div id="prop-card">
        <div id="img-placeholder">
          <img
            srcSet={card?.images[0]}
            alt="Image"
            id="img-ph"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div id="details">
          <div id="details-container">
            <div id="myproperty-type">
              <h2>{card.propertyType}</h2>
            </div>
            <div id="myproperty-name">
              <h4>{card.title}</h4>
            </div>
            <div id="myproperty-location">
              <FaLocationDot />
              <strong>Location:</strong>
              {card.land?.location}
            </div>
            <div id="myproperty-price">
              <FaTags /> <strong>Price:</strong> RM{card.price}
            </div>
            <div id="property-smallicon">
              <FaLeftRight /> <strong>Area:</strong>
              {card.land?.area}
            </div>
            <div id="property-smallicon">
              <FaCity /> <strong>Land Type:</strong>
              {card.land?.land_type}
            </div>
            <div id="mypropertyicon-content">
              <div id="property-smallicon">
                <FaFileCircleQuestion /> <strong>Ownership Type:</strong>
                {card.land?.ownership_type}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
