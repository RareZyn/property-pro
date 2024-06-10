import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./PropertyDetails.css";
import { useQuery } from "react-query";
import { getProperty, updateVehicle } from "../../utils/api.js";
import PopupShareProperty from "../../Cards/General Cards/PopupShareProperty.jsx";


export const PropertyVehicleDetailsOverview = () => {
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
    propertyType: "vehicle",
    vehicle: {
      vehicleType: "",
      brand: "",
      model: "",
      seats: 0,
      mileage: 0,
      ManufacturedYear: 0,
      cc: 0,
      condition: "",
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
        propertyType: data.propertyType || "vehicle",
        vehicle: {
          vehicleType: data.vehicle?.vehicleType || "",
          brand: data.vehicle?.brand || "",
          model: data.vehicle?.model || "",
          seats: data.vehicle?.seats || 0, // Ensure it's a string or null, not undefined
          mileage: data.vehicle?.mileage || 0,
          ManufacturedYear: data.vehicle?.ManufacturedYear || 0,
          cc: data.vehicle?.cc || 0,
          condition: data.vehicle?.condition || "",
        },
      }));
    }
  }, [data, propertyID]);

const handleChange = (event) => {
  const { name, value } = event.target;
  const integerFields = ["seats", "mileage", "ManufacturedYear", "cc"];
  const floatFields = ["price"];

  let parsedValue = value;

  if (integerFields.includes(name)) {
    parsedValue = parseInt(value, 10) || 0; // Set to 0 if parsing fails or value is empty
  } else if (floatFields.includes(name)) {
    parsedValue = parseFloat(value);
  }
  setPropertyDetails((prevDetails) => ({
    ...prevDetails,
    vehicle: {
      ...prevDetails.vehicle,
      [name]: parsedValue,
    },
  }));
};

  const handleSubmit = async () => {
    try {
      const updatedVehicle = {
        ...propertyDetails.vehicle,
        property_id: propertyDetails.property_id,
      };
      await updateVehicle(updatedVehicle);
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
          <div className="price-input">
            <div className="info-label">Price</div>
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
        </div>

        <div className="property-fist-row">
          <div className="title-share">
            <div className="title-input">
              <div className="info-label">Title</div>
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
              </div>
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
                <div className="info-label">Vehicle Brand</div>
                <input
                  id="input-section"
                  name="brand"
                  type="text"
                  value={propertyDetails.vehicle.brand}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Vehicle Type (Sedan/MPV...)</div>
                <input
                  id="input-section"
                  name="vehicleType"
                  type="text"
                  value={propertyDetails.vehicle.vehicleType}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Model</div>
                <input
                  id="input-section"
                  name="model"
                  type="text"
                  value={propertyDetails.vehicle.model}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Number of seats</div>
                <input
                  id="input-section"
                  name="seats"
                  type="text"
                  value={propertyDetails.vehicle.seats}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Mileage</div>
                <input
                  id="input-section"
                  name="mileage"
                  type="text"
                  value={propertyDetails.vehicle.mileage}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Year of Production</div>
                <input
                  id="input-section"
                  name="ManufacturedYear"
                  type="text"
                  value={propertyDetails.vehicle.ManufacturedYear}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">CC</div>
                <input
                  id="input-section"
                  name="cc"
                  type="text"
                  value={propertyDetails.vehicle.cc}
                  onChange={handleChange}
                />
              </div>
              <div className="info-section">
                <div className="info-label">Usage</div>
                <input
                  id="input-section"
                  name="condition"
                  type="text"
                  value={propertyDetails.vehicle.condition}
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
