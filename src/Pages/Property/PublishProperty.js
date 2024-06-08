import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./PublishProperty.css";
import { addHouse, addLand, addVehicle } from "../../utils/api";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../utils/userAPI";

export const PublishProperty = () => {
  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const [files, setFiles] = useState({});
  const [propertyType, setPropertyType] = useState("");
  const [landDetails, setLandDetails] = useState({
    title: "",
    sellerID: "",
    description: "",
    propertyType: "Land",
    price: 0,
    images: [],
    area: "",
    location: "",
    land_type: "",
    ownership_type: "",
  });

  const [houseDetails, setHouseDetails] = useState({
    title: "",
    sellerID: "",
    description: "",
    propertyType: "House",
    price: 0,
    images: [],
    size: "",
    location: "",
    rooms: "",
    bathrooms: "",
  });

  const [vehicleDetails, setVehicleDetails] = useState({
    title: "",
    sellerID: "",
    description: "",
    propertyType: "Vehicle",
    price: 0,
    images: [],
    vehicleType: "",
    brand: "",
    model: "",
    seats: 0,
    mileage: 0,
    ManufacturedYear: 0,
    cc: 0,
    condition: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
        console.log("User ID: " + userData?._id);

        // Update landDetails state with sellerID after fetching user data
        setLandDetails((prevDetails) => ({
          ...prevDetails,
          sellerID: userData?._id,
        }));
        setHouseDetails((prevDetails) => ({
          ...prevDetails,
          sellerID: userData?._id,
        }));
        setVehicleDetails((prevDetails) => ({
          ...prevDetails,
          sellerID: userData?._id,
        }));
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

const uploadedImagesRef = useRef([]);

const handleFileChange = async (event) => {
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

    try {
      const downloadURLs = await Promise.all(promises);
      console.log(downloadURLs);

      // Store the URLs in the ref
      uploadedImagesRef.current = [
        ...uploadedImagesRef.current,
        ...downloadURLs,
      ];

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
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  } else {
    toast("No files selected");
  }
};
  //CHANGE PROPERTY FORM
  const handlePropertyTypeChange = (event) => {
    const type = event.target.value;
    setPropertyType(type);
    setErrors({});
  };

  //CHANGE HERE///

  const handleLandChange = (event) => {
    const { name, value } = event.target;
    // Convert value to number if necessary
    const parsedValue = name === "price" ? parseFloat(value) : value;
    setLandDetails({ ...landDetails, [name]: parsedValue });
  };

  const handleHouseChange = (event) => {
    const { name, value } = event.target;

    // Define fields that need to be parsed as integers
    const integerFields = ["size", "rooms", "bathrooms"];

    // Define fields that need to be parsed as floats
    const floatFields = ["price"];

    let parsedValue = value;

    if (integerFields.includes(name)) {
      parsedValue = parseInt(value, 10);
    } else if (floatFields.includes(name)) {
      parsedValue = parseFloat(value);
    }

    setHouseDetails((prevDetails) => ({ ...prevDetails, [name]: parsedValue }));
  };
  const handleVehicleChange = (event) => {
    const { name, value } = event.target;

    // Define fields that need to be parsed as integers
    const integerFields = ["seats", "mileage", "ManufacturedYear", "cc"];

    // Define fields that need to be parsed as floats
    const floatFields = ["price"];

    let parsedValue = value;

    if (integerFields.includes(name)) {
      parsedValue = parseInt(value, 10);
    } else if (floatFields.includes(name)) {
      parsedValue = parseFloat(value);
    }

    setVehicleDetails((prevDetails) => ({
      ...prevDetails,
      [name]: parsedValue,
    }));
  };

  //SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      // Ensure the state is updated with uploaded image URLs
      switch (propertyType) {
        case "land":
          setLandDetails((prevDetails) => ({
            ...prevDetails,
            images: uploadedImagesRef.current,
          }));
          response = await addLand({
            ...landDetails,
            images: uploadedImagesRef.current,
          });
          break;
        case "houses":
          setHouseDetails((prevDetails) => ({
            ...prevDetails,
            images: uploadedImagesRef.current,
          }));
          response = await addHouse({
            ...houseDetails,
            images: uploadedImagesRef.current,
          });
          break;
        case "vehicle":
          setVehicleDetails((prevDetails) => ({
            ...prevDetails,
            images: uploadedImagesRef.current,
          }));
          response = await addVehicle({
            ...vehicleDetails,
            images: uploadedImagesRef.current,
          });
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
                        name="area"
                        value={landDetails.area}
                        onChange={handleLandChange}
                        className="area-input"
                      />
                      {errors.name && (
                        <div className="error">{errors.area}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Location (State, District)</span>
                      <input
                        type="text"
                        name="location"
                        value={landDetails.location}
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
                        name="land_type"
                        value={landDetails.land_type}
                        onChange={handleLandChange}
                        className="land_type-input"
                      />
                      {errors.landType && (
                        <div className="error">{errors.land_type}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Hak Milik Pegangan (Ownership Type)</span>
                      <input
                        type="text"
                        name="ownership_type"
                        value={landDetails.ownership_type}
                        onChange={handleLandChange}
                        className="ownership_type-input"
                      />
                      {errors.ownershipType && (
                        <div className="error">{errors.ownership_type}</div>
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
                        value={landDetails.price}
                        onChange={handleLandChange}
                        className="price-input"
                      />
                      {errors.price && (
                        <div className="error">{errors.price}</div>
                      )}
                    </div>
                    <div className="broker-register-upload-file">
                      Upload at least 5 image
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
                        <img
                          src={require("../../Res/image/upload.png")}
                          style={{ width: "50px", height: "50px" }}
                        />
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
                        value={houseDetails.title}
                        onChange={handleHouseChange}
                        className="title-input"
                      />
                      {errors.title && (
                        <div className="error">{errors.title}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Rooms</span>
                      <input
                        type="text"
                        name="rooms"
                        value={houseDetails.rooms || ""}
                        onChange={handleHouseChange}
                        className="rooms-input"
                      />
                      {errors.rooms && (
                        <div className="error">{errors.rooms}</div>
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
                      <span>Size</span>
                      <input
                        type="text"
                        name="size"
                        value={houseDetails.size || ""}
                        onChange={handleHouseChange}
                        className="size-input"
                      />
                      {errors.size && (
                        <div className="error">{errors.size}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Description</span>
                      <input
                        type="text"
                        name="description"
                        value={houseDetails.description}
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
                        value={houseDetails.price}
                        onChange={handleHouseChange}
                        className="price-input"
                      />
                      {errors.price && (
                        <div className="error">{errors.price}</div>
                      )}
                    </div>
                    <div className="broker-register-upload-file">
                      Upload at least 5 image
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
                        <img
                          src={require("../../Res/image/upload.png")}
                          style={{ width: "50px", height: "50px" }}
                        />

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
                      <span>Title</span>
                      <input
                        type="text"
                        name="title"
                        value={vehicleDetails.title}
                        onChange={handleVehicleChange}
                        className="title-input"
                      />
                      {errors.title && (
                        <div className="error">{errors.title}</div>
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
                        value={vehicleDetails.seats}
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
                        value={vehicleDetails.mileage}
                        onChange={handleVehicleChange}
                        className="mileage-input"
                      />
                      {errors.mileage && (
                        <div className="error">{errors.mileage}</div>
                      )}
                    </div>
                    <div className="section-input">
                      <span>Manufactured Year</span>
                      <input
                        type="text"
                        name="ManufacturedYear"
                        value={vehicleDetails.ManufacturedYear}
                        onChange={handleVehicleChange}
                        className="ManufacturedYear-input"
                      />
                      {errors.ManufacturedYear && (
                        <div className="error">{errors.ManufacturedYear}</div>
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
                      <span>Condition (New/Used)</span>
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
                      Upload at least 5 image
                      <input
                        type="file"
                        name="ImportantDocument"
                        id="ImportantDocument"
                        accept="image/*"
                        onChange={handleFileChange} // Use handleImageFilesChange here
                        data-multiple-caption="{count} files selected"
                        multiple
                      />
                      <label htmlFor="ImportantDocument">
                        <img
                          src={require("../../Res/image/upload.png")}
                          alt="Upload"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <h3>
                          {files.ImportantDocument
                            ? files.ImportantDocument.name
                            : "Choose files to upload"}
                        </h3>
                      </label>
                      {errors.ImportantDocument && (
                        <div className="error">{errors.ImportantDocument}</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          <div id="uploaded-images"></div>
          <div id="submit-div">
            <button type="submit" id="submit-button">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
