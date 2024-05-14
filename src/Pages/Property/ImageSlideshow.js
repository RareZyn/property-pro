import React from 'react';
import SlideshowGallery from './imageslide';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const ImageSlideshow = () => {
    return (
        <div className='ImageSlideshow'>
        <Link to="/property-details">
            {" "}
            <button id="imgbutton"> <IoIosArrowBack /></button>
          </Link>
         <SlideshowGallery />   
    </div>
        
    );
};
