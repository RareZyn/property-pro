import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSchema } from "./validationSchema.js";
import UploadCard from "../../Cards/General Cards/UploadCard";
import "./PublishProperty.css";

export const PublishProperty = () => {
  const [propertyType, setPropertyType] = useState("");
  const [propertyDetails, setPropertyDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();


  const handlePropertyTypeChange = (event) => {
    const type = event.target.value;
    setPropertyType(type);
    // Reset property details when property type changes
    setPropertyDetails({});
    setErrors({});
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationSchema = getSchema(propertyType);

    try {
      await validationSchema.validate(propertyDetails, { abortEarly: false });
      console.log("Form submitted with values:", propertyDetails);
      setIsSubmitted(true);
      // Redirect to property details page after successful form submission
      navigate("/property-details"); 
    } catch (validationErrors) {
      if (validationErrors.inner && Array.isArray(validationErrors.inner)) {
        const formattedErrors = validationErrors.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      } else {
        console.error("Validation errors structure is not as expected:", validationErrors);
        setErrors({ form: "Validation failed, please check your inputs." });
      }
    }
  };

  return (
    <div className="PublishProperty">
      <div className="publish-section">
        <h1 id="selling-property">Selling Property</h1>
        <div className="cart-box">
          <img src={require("../../Res/image/cart-icon.png")} alt="Cart" />
        </div>

        <form onSubmit={handleSubmit}>
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
                        value={propertyDetails.title || ""}
                        onChange={handleInputChange}
                        className="name-input"
                      />
                      {errors.name && <div className="error">{errors.title}</div>}
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
                      {errors.size && <div className="error">{errors.size}</div>}
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
                      {errors.location && <div className="error">{errors.location}</div>}
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
                      {errors.landType && <div className="error">{errors.landType}</div>}
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
                      {errors.ownershipType && <div className="error">{errors.ownershipType}</div>}
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
                      {errors.name && <div className="error">{errors.name}</div>}
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
                      {errors.area && <div className="error">{errors.area}</div>}
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
                      {errors.bedrooms && <div className="error">{errors.bedrooms}</div>}
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
                      {errors.houseType && <div className="error">{errors.houseType}</div>}
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
                      {errors.bathrooms && <div className="error">{errors.bathrooms}</div>}
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
                      {errors.location && <div className="error">{errors.location}</div>}
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
                      {errors.floors && <div className="error">{errors.floors}</div>}
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
                      {errors.name && <div className="error">{errors.name}</div>}
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
                      {errors.vehicleType && <div className="error">{errors.vehicleType}</div>}
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
                      {errors.brand && <div className="error">{errors.brand}</div>}
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
                      {errors.model && <div className="error">{errors.model}</div>}
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
                      {errors.seats && <div className="error">{errors.seats}</div>}
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
                      {errors.mileage && <div className="error">{errors.mileage}</div>}
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
                      {errors.yearOfProduction && <div className="error">{errors.yearOfProduction}</div>}
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
                      {errors.cc && <div className="error">{errors.cc}</div>}
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
                      {errors.condition && <div className="error">{errors.condition}</div>}
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
                  {errors.description && <div className="error">{errors.description}</div>}
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
                  {errors.price && <div className="error">{errors.price}</div>}
                </div>
              </div>
            )}
          </div>

          {propertyType && (<div >
            <UploadCard></UploadCard>
            {errors.images && <div className="error">{errors.images}</div>}</div>
          )}


          {propertyType && (
            <div className="publish-div">
              <button type="submit" className="publish-btn">Publish</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PublishProperty;
