import React, { useState, useEffect } from 'react';
import './imageslide.css';
import HouseImage from '../../Res/image/house.jpeg';

const images = [
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" }
  ];
  
  const thumbnails = [
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" },
    { src: HouseImage, alt: "House Image" }
  ];
  
  const SlideshowGallery = () => {
    const [imageIndex, setImageIndex] = useState(1);
  
    const ImageSlides = (n) => {
      let index = n;
      if (n > images.length) {
        index = 1;
      }
      if (n < 1) {
        index = images.length;
      }
      setImageIndex(index);
    };
  
    const plusSlides = (n) => {
      ImageSlides(imageIndex + n);
    };
  
    const currentSlide = (n) => {
      ImageSlides(n);
    };
  
    return (
      <div>
        <div className="Slide-container">
          {images.map((image, index) => (
            <div key={index} className={`mySlides ${index + 1 === imageIndex ? 'active' : ''}`}>
              <div className="numbertext">{index + 1} / {images.length}</div>
              <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
            </div>
          ))}
          <a className="prevImg" onClick={() => plusSlides(-1)}>❮</a>
          <a className="nextImg" onClick={() => plusSlides(1)}>❯</a>
          <div className="caption-container">
            <p id="caption">{images[imageIndex - 1].alt}</p>
          </div>
          <div className="row">
            {thumbnails.map((thumbnail, index) => (
              <div key={index} className="column">
                <img
                  className={`demo cursor ${index + 1 === imageIndex ? 'active' : ''}`}
                  src={thumbnail.src}
                  style={{ width: '100%' }}
                  onClick={() => currentSlide(index + 1)}
                  alt={thumbnail.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SlideshowGallery;