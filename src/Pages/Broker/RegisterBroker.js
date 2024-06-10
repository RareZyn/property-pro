import "./RegisterBroker.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { toast } from "react-toastify";
import { addBroker } from "../../utils/api";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../utils/userAPI";

export const RegisterBroker = () => {
  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const [brokerDetails, setBrokerDetails] = useState({
    fullName: "",
    brokerLicense: "",
    password: "",
    brokerIC: "",
    fileIC: "",
    fileBrokerLicense: "",
    userID: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
        setBrokerDetails((prevDetails) => ({
          ...prevDetails,
          userID: userData?._id,
        }));
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    }
  }, [userToken]);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [brokerRegistrationSuccess, setBrokerRegistrationSuccess] =
    useState(false);
  const [uploadedFileIC, setUploadedFileIC] = useState("");
  const [uploadedFileBrokerLicense, setUploadedFileBrokerLicense] =
    useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrokerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    const { name } = event.target; // fileIC or fileBrokerLicense

    if (selectedFile) {
      try {
        const storageRef = firebase
          .storage()
          .ref("uploaded_image/broker")
          .child(`/${brokerDetails.fullName}`);
        const fileRef = storageRef.child(selectedFile.name);

        const snapshot = await fileRef.put(selectedFile);
        const downloadURL = await snapshot.ref.getDownloadURL();

        console.log(downloadURL);
        setBrokerDetails((prevDetails) => ({
          ...prevDetails,
          [name]: downloadURL,
        }));

        if (name === "fileIC") {
          setUploadedFileIC(downloadURL);
        } else if (name === "fileBrokerLicense") {
          setUploadedFileBrokerLicense(downloadURL);
        }
      } catch (error) {
        console.error("Upload failed", error);
        toast.error("File upload failed. Please try again.");
      }
    } else {
      console.log("No File Selected");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationSchema = yup.object().shape({
      fullName: yup
        .string()
        .matches(/^[A-z\s]+$/, "Full Name must only contain letters")
        .required("Full Name is required"),
      password: yup
        .string()
        .min(8, "Password must at least be 8 characters")
        .matches(
          /^(?=(?:.*[A-Z]){2})(?=.*[0-9]).*$/,
          "Password must contain at least 2 capital letters and 1 number"
        )
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      brokerIC: yup.string().required("IC document is required"),
      brokerLicense: yup
        .string()
        .required("Real Estate Negotiator License is required"),
    });

    validationSchema
      .validate({ ...brokerDetails, confirmPassword }, { abortEarly: false })
      .then(() => {
        // Exclude confirmPassword before sending brokerDetails to the backend
        const { confirmPassword, ...detailsToSend } = brokerDetails;

        addBroker(detailsToSend)
          .then((data) => {
            console.log(data);
            toast.success("You successfully registered as Broker");
            setBrokerRegistrationSuccess(true);
            navigate("/verify-property-homepage");
          })
          .catch((error) => {
            console.error(error);
            toast.success("You already registered as Broker please use login");
            setBrokerRegistrationSuccess(false);
          });
      })
      .catch((validationErrors) => {
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      });
  };

  return (
    <div className="RegisterBroker">
      <div className="RegisterBrokerCard">
        <form onSubmit={handleSubmit}>
          <h1>Broker Registration</h1>
          <h3 className="h3-heading">In broker we trust</h3>

          <div className="inputs">
            <div className="input-details">
              Full Name as in IC
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={brokerDetails.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <div className="error">{errors.fullName}</div>
              )}
            </div>

            <div className="input-details">
              Broker License
              <input
                type="text"
                placeholder="Broker License"
                name="brokerLicense"
                value={brokerDetails.brokerLicense}
                onChange={handleChange}
              />
              {errors.brokerLicense && (
                <div className="error">{errors.brokerLicense}</div>
              )}
            </div>

            <div className="input-details">
              Identification card
              <input
                type="text"
                placeholder="Identification card"
                name="brokerIC"
                value={brokerDetails.brokerIC}
                onChange={handleChange}
              />
              {errors.brokerIC && (
                <div className="error">{errors.brokerIC}</div>
              )}
            </div>

            <div className="input-details">
              Password
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={brokerDetails.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>

            <div className="input-details">
              Confirm Password
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>

            <div className="show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </div>

            <div className="broker-register-upload-file">
              Identification Card (IC)
              <input
                type="file"
                name="fileIC"
                id="brokerIC"
                accept="image/*"
                onChange={handleFileUpload}
              />
              <label htmlFor="brokerIC">
                <img src={require("../../Res/image/upload.png")} alt="" />
                <h3>
                  {uploadedFileIC ? "File uploaded" : "Choose files to upload"}
                </h3>
              </label>
              {errors.fileIC && <div className="error">{errors.fileIC}</div>}
            </div>
            <div className="show-file-ic">
              {uploadedFileIC && <img src={uploadedFileIC} alt="IC" />}
            </div>

            <div className="broker-register-upload-file">
              Real Estate Negotiator License
              <input
                type="file"
                name="fileBrokerLicense"
                id="brokerLicense"
                accept="image/*"
                onChange={handleFileUpload}
              />
              <label htmlFor="brokerLicense">
                <img src={require("../../Res/image/upload.png")} alt="" />
                <h3>
                  {uploadedFileBrokerLicense
                    ? "File uploaded"
                    : "Choose files to upload"}
                </h3>
              </label>
              {errors.fileBrokerLicense && (
                <div className="error">{errors.fileBrokerLicense}</div>
              )}
            </div>

            <div className="show-file-license">
              {uploadedFileBrokerLicense && (
                <img src={uploadedFileBrokerLicense} alt="Broker License" />
              )}
            </div>

            <button type="submit" className="broker-create-account">
              Create Account
            </button>

            {brokerRegistrationSuccess && (
              <p className="success-message">Registration successful!</p>
            )} 

            <div className="broker-register-to-login">
              Already have an account?
              <Link to="/login-broker" className="login">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
