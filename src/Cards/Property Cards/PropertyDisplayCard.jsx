import "./PropertyDisplayCard.css";
import imgPh from "../../Res/image/image-dummy-house.png"
import { useState } from "react";
import { useEffect } from "react";

export const PropertyDisplayCard = ({thumbnailImage}) => {
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
    
    return(
        <div id="prop-card">
        <div id="img-placeholder">
           <img src={thumbnail} alt="Image" srcset="" id="img-ph"/>
        </div>
            <div id="details">
                <span>Item name</span>
                <span style={{fontWeight:"bold"}}>RM XX.XX</span>
            </div>
        </div>
    )
}

