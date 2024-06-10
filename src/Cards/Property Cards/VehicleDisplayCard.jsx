import "./PropertyDisplayCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaTags, FaCarSide } from "react-icons/fa";
import { FaCalendarDays, FaGauge, FaMapLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const VehicleDisplayCard = ({ card, link }) => {
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
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div id="details">
          <div id="details-container">
            <div id="myproperty-type">
              <h2>{card.propertyType}</h2>
            </div>
            <div id="myproperty-title">
              <h4>{card.title}</h4>
            </div>
            <div id="myproperty-location">
              <FaGauge /> <strong>Model:</strong> {card.vehicle?.model}
            </div>
            <div id="myproperty-price">
              {" "}
              <FaTags /> <strong>Price:</strong> RM{card.price}
            </div>
            <div id="property-smallicon">
              <FaTags /> <strong>Condition:</strong> {card.vehicle?.condition}
            </div>
            <div id="property-smallicon">
              <FaGauge /> <strong>CC:</strong> {card.vehicle?.cc}
            </div>
            <div id="property-smallicon">
              <FaCalendarDays /> <strong>Manufactured Year:</strong>{" "}
              {card.vehicle?.ManufacturedYear}
            </div>
            <div id="property-smallicon">
              <FaCarSide /> <strong>Seats:</strong> {card.vehicle?.seats}
            </div>
            <div id="property-smallicon">
              <FaCarSide /> <strong>Mileage:</strong> {card.vehicle?.mileage}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
