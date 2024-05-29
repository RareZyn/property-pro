import "./RegisterBroker.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import {axios} from 'axios';

//import SearchBar from "../../Cards/General Cards/SearchBar";

export const RegisterBroker = () => {
  const navigate = useNavigate();
  const [brokerFormValues, setBrokerFormValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    brokerIC: null,
    brokerLicense: null,
  });

  const [fileNames, setFileNames] = useState({});
  const [errors, setErrors] = useState({});
  const [brokerRegistrationSuccess, setBrokerRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      let selectedFileName = '';
      if (files.length > 1) {
        selectedFileName = `${files.length} files selected`;
      } else {
        selectedFileName = files[0].name;
      }
      setFileNames({
          ...fileNames,
          [name]: selectedFileName,
      });
    }

    setBrokerFormValues({
      ...brokerFormValues,
      [name] : files ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationSchema = yup.object().shape({
        fullName: yup.string().matches(/^[A-z\s]+$/, "Full Name must only contain letters").required("Full Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: yup.string().matches(/^[0-9]+$/, "Phone Number must contain only numbers").required("Phone Number is required"),
        password: yup.string().min(8, "Password must at least be 8 characters")
        .matches(/^(?=(?:.*[A-Z]){2})(?=.*[0-9]).*$/, "Password must contain at least 2 capital letters and 1 number")
        .required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
        brokerIC: yup.string().required("IC document is required"),
        brokerLicense: yup.string().required("Real Estate Negotiator License is required")
    });

    validationSchema.validate(brokerFormValues,  { abortEarly: false })
    .then(() => {
      console.log(brokerFormValues);
      navigate("/verify-property-homepage");
      setBrokerRegistrationSuccess(true);
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
          <h1>Broker Registeration</h1>
          <h3 className="h3-heading">In broker we trust</h3>

          <div className="inputs">
            <div className="input-details">
              Full Name as in IC
              <input type="text" 
              placeholder="Full Name"
              name="fullName"
              value={brokerFormValues.fullName}
              onChange={handleChange}
              />
              {errors.fullName && (
                <div className="error">{errors.fullName}</div>
              )}
            </div>

            <div className="input-details">
              Email
              <input type="email" 
              placeholder="broker@gmail.com"
              name="email"
              value={brokerFormValues.email}
              onChange={handleChange}
              />
              {errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>

            <div className="input-details">
              Phone Number
              <input type="text" 
              placeholder="012-3456789"
              name="phoneNumber"
              value={brokerFormValues.phoneNumber}
              onChange={handleChange}
              />
              {errors.phoneNumber && (
                <div className="error">{errors.phoneNumber}</div>
              )}
            </div>

            <div className="input-details">
              Password
              <input type="password" 
              name="password"
              value={brokerFormValues.password}
              onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>

            <div className="input-details">
              Confirm Password
              <input type="password" 
              name="confirmPassword"
              value={brokerFormValues.confirmPassword}
              onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>

            <div className="broker-register-upload-file">
              Identification Card (IC)
              <input type="file" 
              name="brokerIC"
              id="brokerIC"
              accept="image/*"
              onChange={handleChange}
              data-multiple-caption="{count} files selected"
              multiple
              />
              <label for="brokerIC">
                <img src={require("../../Res/image/upload.png")} />
                <h3>{fileNames.brokerIC || 'Choose files to upload'}</h3>
              </label>
              {errors.brokerIC && (
                <div className="error">{errors.brokerIC}</div>
              )}
            </div>

            <div className="broker-register-upload-file">
              Real Estate Negotiator License
              <input type="file" 
              name="brokerLicense"
              id="brokerLicense"
              accept="image/*"
              onChange={handleChange}
              data-multiple-caption="{count} files selected"
              multiple
              />
              <label for="brokerLicense">
                <img src={require("../../Res/image/upload.png")} />
                <h3>{fileNames.brokerLicense || 'Choose files to upload'}</h3>
              </label>
              {errors.brokerLicense && (
                <div className="error">{errors.brokerLicense}</div>
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
              <Link to="./login-broker" className="login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function RegisterBrokerInputItem({ inputTitle, inputHint }) {
  return (
    <div className="InputDetails">
      <h7>{inputTitle}</h7>
      <div className="Input">
        {inputHint === "" ? "Enter your " + inputTitle : { inputHint }}
      </div>
    </div>
  );
}
