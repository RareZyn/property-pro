import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileCard from "../../Cards/General Cards/FileCard";
import * as Yup from "yup";
import "./PublishProperty.css";

export const PublishProperty = () => {
  const [files, setFiles] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [propertyDetails, setPropertyDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    size: Yup.string().when("propertyType", {
      is: "land",
      then: Yup.string().required("Size is required"),
    }),
    location: Yup.string().required("Location is required"),
    landType: Yup.string().when("propertyType", {
      is: "land",
      then: Yup.string().required("Land Type is required"),
    }),
    ownershipType: Yup.string().when("propertyType", {
      is: "land",
      then: Yup.string().required("Ownership Type is required"),
    }),
    area: Yup.string().when("propertyType", {
      is: "houses",
      then: Yup.string().required("Area is required"),
    }),
    bedrooms: Yup.string().when("propertyType", {
      is: "houses",
      then: Yup.string().required("Bedrooms are required"),
    }),
    houseType: Yup.string().when("propertyType", {
      is: "houses",
      then: Yup.string().required("House Type is required"),
    }),
    bathrooms: Yup.string().when("propertyType", {
      is: "houses",
      then: Yup.string().required("Bathrooms are required"),
    }),
    floors: Yup.string().when("propertyType", {
      is: "houses",
      then: Yup.string().required("Floors are required"),
    }),
    vehicleType: Yup.string().when("propertyType", {
      is: "vehicle",
      then: Yup.string().required("Vehicle Type is required"),
    }),
    brand: Yup.string().when("propertyType", {
      is: "vehicle",
      then: Yup.string().required("Brand is required"),
    }),
    model: Yup.string().when("propertyType", {
      is: "vehicle",
      then: Yup.string().required("Model is required"),
    }),
    seats: Yup.string().when("propertyType", {
      is: "vehicle",
      then: Yup.string().required("Seats are required"),
    }),
    mileage: Yup.string().when("propertyType", {
      is: "vehicle",
      then: Yup.string().required("Mileage is required"),
    }),
    yearOfProduction: Yup.string().when("propertyType", {
      is: "vehicle",
      then: Yup.string().required("Year of Production is required"),
    }),
    cc: Yup.string().when("propertyType", {
      is: "vehicle",
      then: Yup.string().required("CC is required"),
    }),
    condition: Yup.string().when("propertyType", {
      is: "vehicle",
      then: Yup.string().required("Condition is required"),
    }),
    description: Yup.string().required("Description is required"),
    price: Yup.string()
      .matches(/^[0-9]+$/, "Price must contain only numbers")
      .required("Price is required"),
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(propertyDetails, { abortEarly: false });
      console.log("Form submitted with values:", propertyDetails);
      setIsSubmitted(true);
      // Handle form submission, e.g., send data to server
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
                        value={propertyDetails.name || ""}
                        onChange={handleInputChange}
                        className="name-input"
                      />
                      {errors.name && <div className="error">{errors.name}</div>}
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
            {files.map((file, index) => (
              <FileCard
                key={index}
                className="file-card"
                filename={file.filename}
                filetype={file.filetype}
              />
            ))}
          </div>
          {propertyType && (
          <div className="publish-div">
            {isSubmitted ? (
              <Link to="/property-details">
                <button type="button" className="publish-btn">Publish</button>
              </Link>
            ) : (
              <button type="submit" className="publish-btn">Publish</button>
            )}
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default PublishProperty;
