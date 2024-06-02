import "./AccountManager.css";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { getUserById } from "../../util";

export const ManageAccount = () => {
  const nav = useNavigate();
  const [errors, setErrors] = useState({});
  const {id} = useParams();
  const[user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUser()
  }, []);
  const [formValues, setFormValues] = useState({
    firstName: user ? user.firstName : null,
    lastName: user ? user.lastName : null,
    description: user ? user.description : null,
    phoneNumber: user ? user.phoneNumber : null,
    location: user ? user.location : null,
    profilePicture: "",
  });

  useEffect(() => {
    if(user){
      setFormValues(prevFormValues => ({
        ...prevFormValues,
        ...user
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("Your first name is required"),
      lastName: Yup.string().required("Your last name is required"),
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
            // window.location.reload();
            nav(`/view-account/${user._id}/about`);
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
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="error">{errors.firstName}</div>}
            </section>
            <section id="input-section">
              Last Name
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="error">{errors.lastName}</div>}
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
