import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import "./RegisterPage.css";

export const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    location: "",
    profilePicture: "",
  });

  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.[A-Z].[A-Z])(?=.*[0-9])/,
          "Password must have at least 2 capital letters and 1 number"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Phone Number must contain only numbers")
        .required("Phone Number is required"),
      location: Yup.string().required("Location is required"),
      profilePicture: Yup.string().required("Profile Picture is required"),
    });

    validationSchema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        // Form is valid, you can handle form submission here
        console.log("Form submitted with values:", formValues);
        setRegistrationSuccess(true);
      })
      .catch((validationErrors) => {
        // Form is invalid, set errors state to display error messages
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      });
  };

  return (
    <div className="RegisterPage">
      <div className="RegisterBlock">
        <form onSubmit={handleSubmit}>
          <div className="register-topic">
            <h1>Create New Account</h1>
          </div>
          <div className="inputDiv">
            <section id="input-section">
              First Name
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </section>
            <section id="input-section">
              Last Name
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <div className="error">{errors.lastName}</div>
              )}
            </section>
            <section id="input-section">
              Username
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </section>
            <section id="input-section">
              Email
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </section>
            <section id="input-section">
              Password
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </section>
            <section id="input-section">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </section>
            <section id="input-section">
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <div className="error">{errors.phoneNumber}</div>
              )}
            </section>
            <section id="input-section">
              Location
              <input
                type="text"
                name="location"
                value={formValues.location}
                onChange={handleChange}
              />
              {errors.location && (
                <div className="error">{errors.location}</div>
              )}
            </section>
            <section id="input-section">
              Profile Picture
              <input
                type="file"
                name="profilePicture"
                accept="image/*"
                onChange={handleChange}
              />
              {errors.profilePicture && (
                <div className="error">{errors.profilePicture}</div>
              )}
            </section>
            <button type="submit" id="create-account">
              Create Account
            </button>
            {registrationSuccess && (
              <p className="success-message">Registration successful!</p>
            )}
            <div id="have-account">
              <p>
                Already have an account?{" "}
                <Link to="/login" id="login-word">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
