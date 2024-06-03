import "./PropertyDisplayCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaTags, FaCarSide } from "react-icons/fa";
import { FaCalendarDays, FaGauge, FaMapLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const VehicleDisplayCard = ({ card, link }) => {
  const navigate = useNavigate();
  return (
    <Link to={link}>
      <div id="prop-card" onClick={() => navigate("/property-Vehicle-Details")}>
        <div id="img-placeholder">
          <img src={card.image} alt="Image" srcset="" id="img-ph" />
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
              <FaGauge />
              Model:{card.vehicle?.model}
            </div>
            <div id="myproperty-price">
              <FaTags /> {card.price}
            </div>
            <div id="mypropertyicon-content">
              <div id="property-smallicon">
                <FaTags />
                Condition:{card.vehicle?.condition}
              </div>
              <div id="property-smallicon">
                <FaGauge />
                CC:{card.vehicle?.cc}
              </div>
            </div>
            <div id="mypropertyicon-content">
              <div id="property-smallicon">
                <FaCalendarDays />
                Manufactured Year:{card.vehicle?.ManufacturedYear}
              </div>
              <div id="property-smallicon">
                <FaCarSide />
                Seats: {card.vehicle?.seats}
              </div>
              <div id="property-smallicon">
                <FaCarSide />
                Seats: {card.vehicle?.mileage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
