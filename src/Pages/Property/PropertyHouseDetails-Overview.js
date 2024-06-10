import React, { useState, useEffect } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaBed, FaShower, FaLayerGroup, FaImages } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PopupShare from "../../Cards/General Cards/PopupShare.jsx";
import "./PropertyDetails.css";
import { useQuery } from "react-query";
import { getProperty, updateHouse } from "../../utils/api.js";
import PopupShareProperty from "../../Cards/General Cards/PopupShareProperty.jsx";

export const PropertyHouseDetailsOverview = () => {
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
    propertyType: "house",
    house: {
      size: "",
      location: "",
      rooms: 0,
      bathrooms: 0,
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
        propertyType: data.propertyType || "house",
        house: {
          size: data.house?.size || "",
          location: data.house?.location || "",
          rooms: data.house?.rooms || "",
          bathrooms: data.house?.bathrooms || "",
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
      house: {
        ...prevDetails.house,
        [name]: parsedValue,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const updatedHouse = {
        ...propertyDetails.house,
        property_id: propertyDetails.property_id,
      };
      await updateHouse(updatedHouse);
    } catch (error) {
      console.error("Error updating vehicle:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="PropertyDetailsContainer">
      <div className="property-image-container">
        <img id="mainproperty-image" src={data?.images[0]} alt="Property" />
        <div className="property-image-div">
          <div className="property-image-1row">
            <img id="property-image" src={data?.images[1]} alt="Property" />
            <img id="property-image" src={data?.images[2]} alt="Property" />
          </div>
          <div className="property-image-1row">
            <img id="property-image" src={data?.images[3]} alt="Property" />
            <img id="property-image" src={data?.images[4]} alt="Property" />
          </div>
        </div>
      </div>

      <div className="property-display-card">
        <div className="overview-first-row">
          <Link to="/image-slideshow">
            <div className="MoreThumbnailsProperty">
              <img src={data?.images[0]} alt="Property" />
              <img src={data?.images[1]} alt="Property" />
              <img src={data?.images[2]} alt="Property" />
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
              <PopupShareProperty />
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
                  value={propertyDetails.house?.location}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Area Size</div>
                <input
                  id="input-section"
                  name="size"
                  type="text"
                  value={propertyDetails.house?.size}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Number of bedrooms</div>
                <input
                  id="input-section"
                  name="size"
                  type="text"
                  value={propertyDetails.house?.size}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Number of bathrooms</div>
                <input
                  id="input-section"
                  name="bathrooms"
                  type="text"
                  value={propertyDetails.house?.bathrooms}
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
