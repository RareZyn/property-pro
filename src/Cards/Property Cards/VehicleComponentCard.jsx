import "./ItemComponentCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaCarSide, FaTags } from "react-icons/fa";
import { FaCalendarDays, FaGauge } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { useProperties } from "../../hooks/useProperties";

function VehicleComponentCard({ card, link }) {
  const { data, isError, isLoading } = useProperties();
  return (
    <Link to={link}>
      <div id="item-card">
        <section id="img-container">
          <img srcSet={card?.images[0]} alt="image property" />
        </section>
        <div id="details-container">
          <div id="myproperty-name">
            <strong>{card.title}</strong>
          </div>
          <div id="myproperty-type">
            <FaCar />
            <strong> {card.propertyType}</strong>
          </div>
          <div id="myproperty-price">
            <FaTags /> RM{card.price}
          </div>
          <div id="property-smallicon">
            <FaTags /> <strong>Condition: </strong>
            {card.vehicle.condition}
          </div>
          <div id="property-smallicon">
            <FaGauge /> {card.vehicle.cc}cc
          </div>
          <div id="property-smallicon">
            <FaCalendarDays /> <strong>ManufacturedYear: </strong>
            {card.vehicle.ManufacturedYear}
          </div>
          <div id="property-smallicon">
            <FaCarSide /> Seats: {card.vehicle.seats} seat
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VehicleComponentCard;
