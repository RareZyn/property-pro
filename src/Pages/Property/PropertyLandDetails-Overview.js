import React, { useState, useEffect } from "react";
import {
  FaLeftRight,
  FaFileCircleQuestion,
  FaLocationDot,
} from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PopupShare from "../../Cards/General Cards/PopupShare.jsx";
import "./PropertyDetails.css";
import { useQuery } from "react-query";
import { getProperty, updateLand } from "../../utils/api.js";

export const PropertyLandDetailsOverview = () => {
  const { pathname } = useLocation();
  const propertyID = pathname.split("/")[1];
  const { data, isError, isLoading } = useQuery(["Property", propertyID], () =>
    getProperty(propertyID)
  );

  const [propertyDetails, setPropertyDetails] = useState({
    property_id: propertyID,
    price: 0,
    title: "",
    description: "",
    propertyType: "land",
    land: {
      area: "",
      location: "",
      land_type: "",
      ownership_type: "",
    },
  });

  useEffect(() => {
    if (data) {
      setPropertyDetails((prevDetails) => ({
        ...prevDetails,
        property_id: propertyID,
        price: data.price || 0,
        title: data.title || "",
        description: data.description || "",
        propertyType: data.propertyType || "land",
        land: {
          area: data.land?.area || "",
          location: data.land?.location || "",
          land_type: data.land?.land_type || "",
          ownership_type: data.land?.ownership_type || "",
        },
      }));
    }
  }, [data, propertyID]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const floatFields = ["price"];

    let parsedValue = value;

   if (floatFields.includes(name)) {
      parsedValue = parseFloat(value);
    }
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      land: {
        ...prevDetails.land,
        [name]: parsedValue,
      },
    }));
  };

    const handleSubmit = async () => {
      try {
        const updatedLand = {
          ...propertyDetails.land,
          property_id: propertyDetails.property_id,
        };
        await updateLand(updatedLand);
      } catch (error) {
        console.error("Error updating land:", error);
      }
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

  return (
    <div className="PropertyDetailsContainer">
      <div className="property-image-container">
        <img id="mainproperty-image" src={data?.images[0]} />
        <div className="property-image-div">
          <div className="property-image-1row">
            <img id="property-image" src={data?.images[1]} />
            <img id="property-image" src={data?.images[2]} />
          </div>
          <div className="property-image-1row">
            <img id="property-image" src={data?.images[3]} />
            <img id="property-image" src={data?.images[4]} />
          </div>
        </div>
      </div>

      <div className="property-display-card">
        <div className="overview-first-row">
          <Link to="/image-slideshow">
            <div className="MoreThumbnailsProperty">
              <img src={data?.images[0]} />
              <img src={data?.images[1]} />
              <img src={data?.images[2]} />
            </div>
          </Link>
        </div>

        <div className="Overview-edit">
          <input
            id="input-section"
            name="price"
            type="text"
            value={propertyDetails.price}
            onChange={(e) =>
              setPropertyDetails({ ...propertyDetails, price: e.target.value })
            }
          />
        </div>
        <div className="property-fist-row">
          <div className="title-div">
            <input
              id="input-section"
              name="title"
              type="text"
              value={propertyDetails.title}
              onChange={(e) =>
                setPropertyDetails({
                  ...propertyDetails,
                  title: e.target.value,
                })
              }
            />
            <div className="share-content">
              <PopupShare />
            </div>
          </div>
          <div className="property-desc">
            <h3>Description of the product:</h3>
            <textarea
              id="input-section"
              name="description"
              value={propertyDetails.description}
              onChange={(e) =>
                setPropertyDetails({
                  ...propertyDetails,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="property-fourth-row">
            <div className="info-page-container">
              <h2>Property Information</h2>

              <div className="info-section">
                <div className="info-label">Location</div>
                <input
                  id="input-section"
                  name="location"
                  type="text"
                  value={propertyDetails.land?.location}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Property Type</div>
                <input
                  id="input-section"
                  name="land_type"
                  type="text"
                  value={propertyDetails.land?.land_type}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Land Size</div>
                <input
                  id="input-section"
                  name="area"
                  type="text"
                  value={propertyDetails.land?.area}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Land Type</div>
                <input
                  id="input-section"
                  name="ownership_type"
                  type="text"
                  value={propertyDetails.land?.ownership_type}
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
