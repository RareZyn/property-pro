import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileCard from "../../Cards/General Cards/FileCard";

import "./PublishProperty.css";

export const PublishProperty = () => {
  const [files, setFiles] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [propertyDetails, setPropertyDetails] = useState({});

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newFiles = Array.from(fileList).map((file) => ({
      filename: file.name.split(".")[0],
      filetype: file.name.split(".")[1],
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handlePropertyTypeChange = (event) => {
    const type = event.target.value;
    setPropertyType(type);
    // Reset property details when property type changes
    setPropertyDetails({});
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  return (
    <div className="PublishProperty">
      <div className="publish-section">
        <h1 id="selling-property">Selling Property</h1>
        <div className="cart-box">
          <img src={require("../../Res/image/cart-icon.png")} alt="Cart" />
        </div>

        <div className="input-div">
          <div className="section-input">
            <span>Choose Property Type</span>
            <select
              value={propertyType}
              onChange={handlePropertyTypeChange}
              className="property-type-input"
            >
              <option value="">Select Property Type</option>
              <option value="land">Land</option>
              <option value="houses">Houses</option>
              <option value="vehicle">Vehicle</option>
            </select>
          </div>
          {propertyType && (
            <div className="property-details">
              {/* Render property-specific fields based on property type */}
              {propertyType === "land" && (
                <>
                  <div className="section-input">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={propertyDetails.name || ""}
                      onChange={handleInputChange}
                      className="name-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Luas (Size)</span>
                    <input
                      type="text"
                      name="size"
                      value={propertyDetails.size || ""}
                      onChange={handleInputChange}
                      className="size-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Location (State, District)</span>
                    <input
                      type="text"
                      name="location"
                      value={propertyDetails.location || ""}
                      onChange={handleInputChange}
                      className="location-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Jenis Tanah (Land Type)</span>
                    <input
                      type="text"
                      name="landType"
                      value={propertyDetails.landType || ""}
                      onChange={handleInputChange}
                      className="landType-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Hak Milik Pegangan (Ownership Type)</span>
                    <input
                      type="text"
                      name="ownershipType"
                      value={propertyDetails.ownershipType || ""}
                      onChange={handleInputChange}
                      className="ownershipType-input"
                    />
                  </div>
                </>
              )}
              {propertyType === "houses" && (
                <>
                  <div className="section-input">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={propertyDetails.name || ""}
                      onChange={handleInputChange}
                      className="name-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Keluasan (Area)</span>
                    <input
                      type="text"
                      name="area"
                      value={propertyDetails.area || ""}
                      onChange={handleInputChange}
                      className="area-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Bilik Tidur (Bedrooms)</span>
                    <input
                      type="text"
                      name="bedrooms"
                      value={propertyDetails.bedrooms || ""}
                      onChange={handleInputChange}
                      className="bedrooms-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Jenis Rumah (House Type)</span>
                    <input
                      type="text"
                      name="houseType"
                      value={propertyDetails.houseType || ""}
                      onChange={handleInputChange}
                      className="houseType-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Bilik Mandi (Bathrooms)</span>
                    <input
                      type="text"
                      name="bathrooms"
                      value={propertyDetails.bathrooms || ""}
                      onChange={handleInputChange}
                      className="bathrooms-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Lokasi (Location)</span>
                    <input
                      type="text"
                      name="location"
                      value={propertyDetails.location || ""}
                      onChange={handleInputChange}
                      className="location-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Tingkat (Floors)</span>
                    <input
                      type="text"
                      name="floors"
                      value={propertyDetails.floors || ""}
                      onChange={handleInputChange}
                      className="floors-input"
                    />
                  </div>
                </>
              )}
              {propertyType === "vehicle" && (
                <>
                  <div className="section-input">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={propertyDetails.name || ""}
                      onChange={handleInputChange}
                      className="name-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Jenis Kenderaan (Vehicle Type)</span>
                    <input
                      type="text"
                      name="vehicleType"
                      value={propertyDetails.vehicleType || ""}
                      onChange={handleInputChange}
                      className="vehicleType-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Brand</span>
                    <input
                      type="text"
                      name="brand"
                      value={propertyDetails.brand || ""}
                      onChange={handleInputChange}
                      className="brand-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Model</span>
                    <input
                      type="text"
                      name="model"
                      value={propertyDetails.model || ""}
                      onChange={handleInputChange}
                      className="model-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Seats</span>
                    <input
                      type="text"
                      name="seats"
                      value={propertyDetails.seats || ""}
                      onChange={handleInputChange}
                      className="seats-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Mileage</span>
                    <input
                      type="text"
                      name="mileage"
                      value={propertyDetails.mileage || ""}
                      onChange={handleInputChange}
                      className="mileage-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Tahun Pengeluaran (Year of Production)</span>
                    <input
                      type="text"
                      name="yearOfProduction"
                      value={propertyDetails.yearOfProduction || ""}
                      onChange={handleInputChange}
                      className="yearOfProduction-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>CC</span>
                    <input
                      type="text"
                      name="cc"
                      value={propertyDetails.cc || ""}
                      onChange={handleInputChange}
                      className="cc-input"
                    />
                  </div>
                  <div className="section-input">
                    <span>Used/New</span>
                    <input
                      type="text"
                      name="condition"
                      value={propertyDetails.condition || ""}
                      onChange={handleInputChange}
                      className="condition-input"
                    />
                  </div>
                </>
              )}
              <div className="section-input">
                <span>Description</span>
                <input
                  type="text"
                  name="description"
                  value={propertyDetails.description || ""}
                  onChange={handleInputChange}
                  className="desc-input"
                />
              </div>
              <div className="section-input">
                <span>Price</span>
                <input
                  type="text"
                  name="price"
                  value={propertyDetails.price || ""}
                  onChange={handleInputChange}
                  className="price-input"
                />
              </div>
            </div>
          )}
        </div>

        {/* Render image input only if property type is selected */}
        {propertyType && (
          <div className="add-img-files-div">
            <input
              type="file"
              id="myFile"
              name="filename"
              className="input-file"
              onChange={handleFileChange}
            />
            <label htmlFor="myFile" className="custom-file-upload" id="addFile">
              <img
                src={require("../../Res/image/upload.png")}
                alt="Upload"
              />
              <h2>Add images from files</h2>
              <h4>or drag and drop</h4>
            </label>
          </div>
        )}

        <div className="files-grid">
          {/* Render file cards here */}
          {files.map((file, index) => (
            <FileCard
              key={index}
              className="file-card"
              filename={file.filename}
              filetype={file.filetype}
            />
          ))}
        </div>

        {/* Render the "Publish" button only if property type is selected */}
        {propertyType && (
          <div className="publish-div">
            <Link to="/manage-property">
              <button className="publish-btn">Publish</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublishProperty;
