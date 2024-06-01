import "./PropertyDisplayCard.css";
import imgPh from "../../Res/image/image-dummy-house.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaTags, FaCarSide } from "react-icons/fa";
import { FaCalendarDays, FaGauge, FaMapLocationDot } from "react-icons/fa6";

export const VehicleDisplayCard = ({ thumbnailImage, link }) => {
  const [thumbnail, setThumbnail] = useState(imgPh);
  useEffect(() => {
    if (thumbnailImage) {
      const img = new Image();
      img.src = thumbnailImage;

      img.onload = () => {
        setThumbnail(thumbnailImage);
      };
    }
  }, [thumbnailImage]);

  return (
    <Link to={link}>
      <div id="prop-card">
        <div id="img-placeholder">
          <img src={thumbnail} alt="Image" srcset="" id="img-ph" />
        </div>
        <div id="details">
        <div id="details-container">
                    <div id="myproperty-name"><h4>Vehicle</h4></div>
                    <div id="myproperty-location"><FaMapLocationDot/>  Gua Musang, Kelantan</div>
                    <div id="myproperty-price"><FaTags/>  RM 162,300,000</div>
                    <div id="mypropertyicon-content">
                        <div id="property-smallicon">
                            <FaTags/> New
                        </div>
                        <div id="property-smallicon">
                            <FaGauge/> 200cc
                        </div>
                    </div>
                    <div id="mypropertyicon-content">
                        
                        <div id="property-smallicon">
                            <FaCalendarDays /> 2023
                        </div>
                        <div id="property-smallicon">
                            <FaCarSide/> 4 seat
                        </div>
                    </div>
                    {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
                </div>
        </div>
      </div>
    </Link>
  );
};
