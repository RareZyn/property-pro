import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "./ManageAccount.css";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";

export const ManageAccount = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    firstname: "",
    lastname:"",
    description: "",
    phoneNumber: "",
    location: "",
    profilePicture: "",
  });

  const[user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) throw new Error('No token found');
        const userCookie = jwtDecode(token).userData;
        const res = await axios.get(`http://localhost:5000/users/get/${userCookie._id}`, { withCredentials: true });
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    getUser()
  }, []);

  useEffect(() => {
    if(user){
      setFormValues(prevFormValues => ({
        ...prevFormValues,
        name: user.username,
        ...user
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
      name: name === 'firstname' ? `${value} ${formValues.lastname}` : name === 'lastname' ? `${formValues.firstname} ${value}` : formValues.fullname,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      firstname: Yup.string().required("Your first name is required"),
      lastname: Yup.string().required("Your last name is required"),
      description: Yup.string().required("Description is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Phone Number must contain only numbers")
        .required("Phone Number is required"),
      location: Yup.string().required("Location is required"),
      profilePicture: Yup.mixed(),
    });

    validationSchema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        axios.put(`http://localhost:5000/users/update/${user._id}`, formValues)
          .then(res => {
            console.log(res.data);
            alert("Profile updated successfully");
            setUpdateSuccess(true);
            navigate("/myaccount");
          })
          .catch(error => {
            console.error("There was an error updating the profile!", error);
          });
      })
      .catch((validationErrors) => {
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
        setUpdateSuccess(false);
      });
  };

  return (
    <div className="ManageAccount">
      <div className="ManageAccountCard">
        <form onSubmit={handleSubmit}>
          <div className="InputDetails">
            <h3>EDIT YOUR PROFILE</h3>
            <img
              id="user-image"
              src={require("../../Res/image/user profile.png")}
              alt="User Profile"
            />
            <section id="input-section">
              First Name
              <input
                type="text"
                name="firstname"
                value={formValues.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <div className="error">{errors.firstname}</div>}
            </section>
            <section id="input-section">
              Last Name
              <input
                type="text"
                name="lastname"
                value={formValues.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <div className="error">{errors.lastname}</div>}
            </section>
            <section id="input-section">
              Name (As in IC)
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </section>

            <section id="input-section">
              Description
              <input
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleChange}
              />
              {errors.description && (
                <div className="error">{errors.description}</div>
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
                onChange={handleChange}
                />
                {errors.profilePicture && (
                <div className="error">{errors.profilePicture}</div>
                )}
                </section>

                <button type="submit" id="save-profile">
                Save
                </button>
                </div>
                </form>
                </div>
                </div>
                );
                };

                export default ManageAccount;
