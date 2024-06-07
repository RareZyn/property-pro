import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./PublishProperty.css";
import { addHouse, addLand, addVehicle } from "../../utils/api";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../util.js";

export const PublishProperty = () => {
  const [files, setFiles] = useState({});
  const [propertyType, setPropertyType] = useState("");
  const [landDetails, setLandDetails] = useState({});
  const [houseDetails, setHouseDetails] = useState({});
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
        console.log("User ID:" + userData?._id); // Use userData instead of user
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log("No user token");
    }
  }, [userToken]);
  const userId = user?.id;

  const submitForm = async () => {};

  // Validation schema for land property
  const landSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    size: Yup.string().required("Size is required"),
    location: Yup.string().required("Location is required"),
    landType: Yup.string().required("Land Type is required"),
    ownershipType: Yup.string().required("Ownership Type is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.string().required("Price is required"),
    ImportantDocumen: Yup.string().required("Upload File is required"),
  });

  // Validation schema for houses property
  const housesSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    area: Yup.string().required("Area is required"),
    bedrooms: Yup.string().required("Bedrooms is required"),
    houseType: Yup.string().required("House Type is required"),
    bathrooms: Yup.string().required("Bathrooms is required"),
    location: Yup.string().required("Location is required"),
    floors: Yup.string().required("Floors is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.string().required("Price is required"),
    ImportantDocumen: Yup.string().required("Upload File is required"),
  });

  // Validation schema for vehicle property
  const vehicleSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    vehicleType: Yup.string().required("Vehicle Type is required"),
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
    seats: Yup.string().required("Seats is required"),
    mileage: Yup.string().required("Mileage is required"),
    yearOfProduction: Yup.string().required("Year of Production is required"),
    cc: Yup.string().required("CC is required"),
    condition: Yup.string().required("Condition is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.string().required("Price is required"),
    ImportantDocumen: Yup.string().required("Upload File is required"),
  });

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles.length > 0) {
      const storageRef = firebase.storage().ref();
      const promises = [];

      Array.from(selectedFiles).forEach((file) => {
        const fileRef = storageRef.child(file.name);
        const uploadTask = fileRef.put(file);

        promises.push(
          uploadTask.then((snapshot) => {
            return snapshot.ref.getDownloadURL();
          })
        );
      });

      Promise.all(promises)
        .then((downloadURLs) => {
          console.log(downloadURLs);
          if (propertyType === "land") {
            landDetails.image = downloadURLs;
          } else if (propertyType === "house") {
            houseDetails.image = downloadURLs;
          } else if (propertyType === "vehicle") {
            vehicleDetails.image = downloadURLs;
          }

          // Display uploaded images in a <div>
          const imagesDiv = document.getElementById("uploaded-images");

          downloadURLs.forEach((url) => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Uploaded Image";
            img.style.width = "200px"; // Adjust width as needed
            img.style.marginRight = "10px"; // Optional: Add some margin between images
            imagesDiv.appendChild(img);
          });
        })
        .catch((error) => {
          console.error("Error uploading files:", error);
        });
    } else {
      toast("No files selected");
    }
  };

  const handlePropertyTypeChange = (event) => {
    const type = event.target.value;
    setPropertyType(type);
    setErrors({});
  };

  const handleLandChange = (event) => {
    const { name, value } = event.target;
    setLandDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    console.log({ name } + " " + { value });
  };

  const handleHouseChange = (event) => {
    const { name, value } = event.target;
    setHouseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    console.log({ name } + " " + { value });
  };

  const handleVehicleChange = (event) => {
    const { name, value } = event.target;
    setVehicleDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    console.log({ name } + " " + { value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationSchema, propertyDetails;
    if (propertyType === "land") {
      validationSchema = landSchema;
      propertyDetails = landDetails;
    } else if (propertyType === "houses") {
      validationSchema = housesSchema;
      propertyDetails = houseDetails;
    } else if (propertyType === "vehicle") {
      validationSchema = vehicleSchema;
      propertyDetails = vehicleDetails;
    }

    try {
      await validationSchema.validate(propertyDetails, { abortEarly: false });
      console.log("Form submitted with values:", propertyDetails);
      setIsSubmitted(true);
      try {
        let response;

        switch (propertyType) {
          case "Land":
            response = await addLand(landDetails);
            break;
          case "House":
            response = await addHouse(houseDetails);
            break;
          case "Vehicle":
            response = await addVehicle(vehicleDetails);
            break;
          default:
            throw new Error("Invalid property type");
        }

        console.log("Property published successfully:", response);
        navigate("/browser-property");
      } catch (error) {
        console.error("Error publishing property:", error.message);
        setErrors({ submit: error.message });
      } finally {
        setIsSubmitted(true);
      }
    } catch (validationErrors) {
      if (validationErrors.inner && Array.isArray(validationErrors.inner)) {
        const formattedErrors = validationErrors.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      } else {
        console.error(
          "Validation errors structure is not as expected:",
          validationErrors
        );
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
                      <span>Title</span>
                      <input
                        type="text"
                        name="title"
                        value={landDetails.title}
                        onChange={handleLandChange}
                        className="title-input"
                      />
                      {errors.name && (
                        <div className="error">{errors.title}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Size (area)</span>
                      <input
                        type="text"
                        name="land?.area"
                        value={landDetails.land?.area}
                        onChange={handleLandChange}
                        className="land?.area-input"
                      />
                      {errors.name && (
                        <div className="error">{errors.land?.area}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Location (State, District)</span>
                      <input
                        type="text"
                        name="location"
                        value={landDetails.location || ""}
                        onChange={handleLandChange}
                        className="location-input"
                      />
                      {errors.location && (
                        <div className="error">{errors.location}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Jenis Tanah (Land Type)</span>
                      <input
                        type="text"
                        name="land?.land_type"
                        value={landDetails.land?.land_type}
                        onChange={handleLandChange}
                        className="land?.land_type-input"
                      />
                      {errors.landType && (
                        <div className="error">{errors.land?.land_type}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Hak Milik Pegangan (Ownership Type)</span>
                      <input
                        type="text"
                        name="land?.ownership_type"
                        value={landDetails.land?.ownership_type}
                        onChange={handleLandChange}
                        className="land?.ownership_type-input"
                      />
                      {errors.ownershipType && (
                        <div className="error">
                          {errors.land?.ownership_type}
                        </div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Description</span>
                      <input
                        type="text"
                        name="description"
                        value={landDetails.description}
                        onChange={handleLandChange}
                        className="desc-input"
                      />
                      {errors.description && (
                        <div className="error">{errors.description}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Price</span>
                      <input
                        type="text"
                        name="price"
                        value={landDetails.price || ""}
                        onChange={handleLandChange}
                        className="price-input"
                      />
                      {errors.price && (
                        <div className="error">{errors.price}</div>
                      )}
                    </div>
                    <div className="broker-register-upload-file">
                      Important Document
                      <input
                        type="file"
                        name="ImportantDocumen"
                        id="ImportantDocumen"
                        accept="image/*"
                        onChange={handleFileChange}
                        data-multiple-caption="{count} files selected"
                        multiple
                      />
                      <label htmlFor="ImportantDocumen">
                        <img src={require("../../Res/image/upload.png")} />
                        <h3>
                          {files.ImportantDocumen || "Choose files to upload"}
                        </h3>
                      </label>
                      {errors.ImportantDocumen && (
                        <div className="error">{errors.ImportantDocumen}</div>
                      )}
                    </div>
                  </>
                )}

                {propertyType === "houses" && (
                  <>
                    <div className="section-input">
                      <span>House</span>
                      <input
                        type="text"
                        name="title"
                        value={houseDetails.name || ""}
                        onChange={handleHouseChange}
                        className="name-input"
                      />
                      {errors.name && (
                        <div className="error">{errors.name}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Area</span>
                      <input
                        type="text"
                        name="area"
                        value={houseDetails.area || ""}
                        onChange={handleHouseChange}
                        className="area-input"
                      />
                      {errors.area && (
                        <div className="error">{errors.area}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Bedrooms</span>
                      <input
                        type="text"
                        name="bedrooms"
                        value={houseDetails.bedrooms || ""}
                        onChange={handleHouseChange}
                        className="bedrooms-input"
                      />
                      {errors.bedrooms && (
                        <div className="error">{errors.bedrooms}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Bathrooms</span>
                      <input
                        type="text"
                        name="bathrooms"
                        value={houseDetails.bathrooms || ""}
                        onChange={handleHouseChange}
                        className="bathrooms-input"
                      />
                      {errors.bathrooms && (
                        <div className="error">{errors.bathrooms}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>House Type</span>
                      <input
                        type="text"
                        name="houseType"
                        value={houseDetails.houseType || ""}
                        onChange={handleHouseChange}
                        className="houseType-input"
                      />
                      {errors.houseType && (
                        <div className="error">{errors.houseType}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Location (State, District)</span>
                      <input
                        type="text"
                        name="location"
                        value={houseDetails.location || ""}
                        onChange={handleHouseChange}
                        className="location-input"
                      />
                      {errors.location && (
                        <div className="error">{errors.location}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Floors</span>
                      <input
                        type="text"
                        name="floors"
                        value={houseDetails.floors || ""}
                        onChange={handleHouseChange}
                        className="floors-input"
                      />
                      {errors.floors && (
                        <div className="error">{errors.floors}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Description</span>
                      <input
                        type="text"
                        name="description"
                        value={houseDetails.description || ""}
                        onChange={handleHouseChange}
                        className="desc-input"
                      />
                      {errors.description && (
                        <div className="error">{errors.description}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Price</span>
                      <input
                        type="text"
                        name="price"
                        value={houseDetails.price || ""}
                        onChange={handleHouseChange}
                        className="price-input"
                      />
                      {errors.price && (
                        <div className="error">{errors.price}</div>
                      )}
                    </div>
                    <div className="broker-register-upload-file">
                      Important Document
                      <input
                        type="file"
                        name="ImportantDocumen"
                        id="ImportantDocumen"
                        accept="image/*"
                        onChange={handleFileChange}
                        data-multiple-caption="{count} files selected"
                        multiple
                      />
                      <label htmlFor="ImportantDocumen">
                        <img src={require("../../Res/image/upload.png")} />
                        <h3>
                          {files.ImportantDocumen || "Choose files to upload"}
                        </h3>
                      </label>
                      {errors.ImportantDocumen && (
                        <div className="error">{errors.ImportantDocumen}</div>
                      )}
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
                        value={vehicleDetails.name || ""}
                        onChange={handleVehicleChange}
                        className="name-input"
                      />
                      {errors.name && (
                        <div className="error">{errors.name}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Vehicle Type</span>
                      <input
                        type="text"
                        name="vehicleType"
                        value={vehicleDetails.vehicleType || ""}
                        onChange={handleVehicleChange}
                        className="vehicleType-input"
                      />
                      {errors.vehicleType && (
                        <div className="error">{errors.vehicleType}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Brand</span>
                      <input
                        type="text"
                        name="brand"
                        value={vehicleDetails.brand || ""}
                        onChange={handleVehicleChange}
                        className="brand-input"
                      />
                      {errors.brand && (
                        <div className="error">{errors.brand}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Model</span>
                      <input
                        type="text"
                        name="model"
                        value={vehicleDetails.model || ""}
                        onChange={handleVehicleChange}
                        className="model-input"
                      />
                      {errors.model && (
                        <div className="error">{errors.model}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Seats</span>
                      <input
                        type="text"
                        name="seats"
                        value={vehicleDetails.seats || ""}
                        onChange={handleVehicleChange}
                        className="seats-input"
                      />
                      {errors.seats && (
                        <div className="error">{errors.seats}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Mileage</span>
                      <input
                        type="text"
                        name="mileage"
                        value={vehicleDetails.mileage || ""}
                        onChange={handleVehicleChange}
                        className="mileage-input"
                      />
                      {errors.mileage && (
                        <div className="error">{errors.mileage}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Year of Production</span>
                      <input
                        type="text"
                        name="yearOfProduction"
                        value={vehicleDetails.yearOfProduction || ""}
                        onChange={handleVehicleChange}
                        className="yearOfProduction-input"
                      />
                      {errors.yearOfProduction && (
                        <div className="error">{errors.yearOfProduction}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>CC</span>
                      <input
                        type="text"
                        name="cc"
                        value={vehicleDetails.cc || ""}
                        onChange={handleVehicleChange}
                        className="cc-input"
                      />
                      {errors.cc && <div className="error">{errors.cc}</div>}
                    </div>
                    <div className="section-input">
                      <span>Condition</span>
                      <input
                        type="text"
                        name="condition"
                        value={vehicleDetails.condition || ""}
                        onChange={handleVehicleChange}
                        className="condition-input"
                      />
                      {errors.condition && (
                        <div className="error">{errors.condition}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Description</span>
                      <input
                        type="text"
                        name="description"
                        value={vehicleDetails.description || ""}
                        onChange={handleVehicleChange}
                        className="desc-input"
                      />
                      {errors.description && (
                        <div className="error">{errors.description}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Price</span>
                      <input
                        type="text"
                        name="price"
                        value={vehicleDetails.price || ""}
                        onChange={handleVehicleChange}
                        className="price-input"
                      />
                      {errors.price && (
                        <div className="error">{errors.price}</div>
                      )}
                    </div>
                    <div className="broker-register-upload-file">
                      Important Document
                      <input
                        type="file"
                        name="ImportantDocument"
                        id="ImportantDocument"
                        accept="image/*"
                        onChange={handleFileChange}
                        data-multiple-caption="{count} files selected"
                        multiple
                      />
                      <label htmlFor="ImportantDocument">
                        <img src={require("../../Res/image/upload.png")} />
                        <h3>
                          {files.ImportantDocumen || "Choose files to upload"}
                        </h3>
                      </label>
                      {errors.ImportantDocument && (
                        <div className="error">{errors.ImportantDocumen}</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          <div id="uploaded-images"></div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
