import "./PropertyDisplayCard.css";
import imgPh from "../../../Res/image/IMG PH.png"
import { useState } from "react";
import { useEffect } from "react";

export const PropertyDisplayCard = ({color, thumbnailImage}) => {
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
        <div id="prop-card" className="box-shadow" style={{backgroundColor: color}}>
            <div id="details">
                <div id="img-placeholder">
                   <img src={thumbnail} alt="Image" srcset="" id="img-ph"/>
                </div>
                <h4>Item name</h4>
                <span>RM XX.XXxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
        </div>
    )
}

