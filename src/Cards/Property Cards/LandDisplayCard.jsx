import "./PropertyDisplayCard.css";
import imgPh from "../../Res/image/image-dummy-house.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShower, FaBed,faLeftRight, FaTags, FaCity } from "react-icons/fa";
import { FaFileCircleQuestion, FaLeftRight, FaLocationDot } from "react-icons/fa6";

export const LandDisplayCard = ({ thumbnailImage, link }) => {
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
                    <div id="myproperty-name"><h4>Agriculture land at Gua Musang</h4></div>
                    <div id="myproperty-location"><FaLocationDot/>  Gua Musang, Kelantan</div>
                    <div id="myproperty-price"><FaTags/>  RM 162,300,000</div>
                    <div id="mypropertyicon-content">
                        <div id="property-smallicon">
                            <FaLeftRight/> 2120 sqft
                        </div>
                        <div id="property-smallicon">
                            <FaCity/> Agriculture
                        </div>
                    </div>
                    <div id="mypropertyicon-content">
                        
                        <div id="property-smallicon">
                            <FaFileCircleQuestion /> Freehold
                        </div>
                        
                    </div>
                    {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
                </div>
        </div>
      </div>
    </Link>
  );
};
