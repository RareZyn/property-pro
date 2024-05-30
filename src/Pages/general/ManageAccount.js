import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "./ManageAccount.css";
import { AppContext } from "../../AppProvider";

export const ManageAccount = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext)
  const [formValues, setFormValues] = useState({
    name: user.username,
    description: user.description,
    phoneNumber: user.phoneNumber,
    address: user.location,
    profilePicture: user.profilePic,
  });

  const [errors, setErrors] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Phone Number must contain only numbers")
        .required("Phone Number is required"),
      address: Yup.string().required("Address is required"),
      profilePicture: Yup.mixed(),
    });

    validationSchema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        // const formData = new FormData();
        // Object.keys(formValues).forEach((key) => {
        //   formData.append(key, formValues[key]);
        // });

        console.log(formValues)

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
              Address
              <input
                type="text"
                name="address"
                value={formValues.address}
                onChange={handleChange}
              />
              {errors.address && <div className="error">{errors.address}</div>}
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

            <Link to="/myaccount">
            <button type="submit" id="save-profile">
              Save
            </button>
            
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAccount;
