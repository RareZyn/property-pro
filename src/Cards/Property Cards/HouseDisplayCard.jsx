import "./PropertyDisplayCard.css";
import imgPh from "../../Res/image/image-dummy-house.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaTags, FaLayerGroup } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";

export const HouseDisplayCard = ({ thumbnailImage, link }) => {
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
                    <div id="myproperty-name"><h4>2 Storey House in Petaling Jaya</h4></div>
                    <div id="myproperty-location"><FaLocationDot/>  Petaling Jaya, Selangor</div>
                    <div id="myproperty-price"><FaTags/>  RM 162,300,000</div>
                    <div id="mypropertyicon-content">
                        <div id="property-smallicon">
                            <FaHouse /> 2120 sqft
          </div>
                        <div id="property-smallicon">
                            <FaBed/> 2 
                        </div>
                    </div>
                    <div id="mypropertyicon-content">
                        
                        <div id="property-smallicon">
                            <FaLayerGroup /> 2 storey
                        </div>
                        <div id="property-smallicon">
                            <FaShower/> 2 
                        </div>
                    </div>
                    {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
                </div>
        </div>
      </div>
    </Link>
  );
};
