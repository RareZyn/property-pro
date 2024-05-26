import "./PropertyDisplayCard.css";
import imgPh from "../../Res/image/image-dummy-house.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const PropertyDisplayCard = ({ thumbnailImage, link }) => {
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
          <span style={{ fontWeight: "bold" }}>RM XX.XX</span>
          <div className="noOf-bedroom-bathroom"> 
            <span>Bedroom</span>
            <span>Bathroom</span>
          </div>
          <span>Item name</span>
          <span>Location</span>
        </div>
      </div>
    </Link>
  );
};
