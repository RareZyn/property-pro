import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from 'axios';

import "./RegisterPage.css";
import { addProfile } from "../../utils/userAPI";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    location: "",
    profilePicture: '', // Use null for file input
  });
  const [profileFile, setProfileFile] = useState('')

  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value, // Handle file input change
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
          /^(?=.*[A-Z].*[A-Z])(?=.*[0-9])/,
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
      profilePicture: Yup.mixed(),
    });

    validationSchema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        addProfile(profileFile)
          .then((result) => {
            formValues.profilePicture = result;
            console.log(formValues)
            axios.post('http://localhost:5000/users/register', formValues)
            .then(res => {
              console.log(res.data)
              const error = res.data.keyPattern ? Object.keys(res.data.keyPattern)[0] : null
              if(error === 'username'){
                toast.error('Username already existed')
              }
              else if(error === 'email'){
                toast.error('Email already existed')
              }
              else if(error !== null){
                console.log(error)
              }
              else{
                // Alert user they successfull register
                // TODO: Buat toast component
                toast.info("You successfully created your account")
                navigate('/login')
                setRegistrationSuccess(true);
              }
            });
          })
      })
      .catch((validationErrors) => {
        // Form is invalid, set errors state to display error messages
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
        setRegistrationSuccess(false);
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
                type={showPassword ? "text" : "password"}
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
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </section>
            <div id="show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </div>
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
              <select
                name="location"
                value={formValues.location}
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>Select Location</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Labuan">Labuan</option>
                <option value="Putrajaya">Putrajaya</option>
                <option value="Johor">Johor</option>
                <option value="Kedah">Kedah</option>
                <option value="Kelantan">Kelantan</option>
                <option value="Melaka">Melaka</option>
                <option value="Negeri Sembilan">Negeri Sembilan</option>
                <option value="Pahang">Pahang</option>
                <option value="Perak">Perak</option>
                <option value="Perlis">Perlis</option>
                <option value="Pulau Pinang">Pulau Pinang</option>
                <option value="Sabah">Sabah</option>
                <option value="Sarawak">Sarawak</option>
                <option value="Selangor">Selangor</option>
                <option value="Terengganu">Terengganu</option>
              </select>
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
                onChange={(e) => {setProfileFile(e.target.files[0])}}
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
                <Link 
                to="/login" 
                id="login-word" 
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
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

export default RegisterPage;
