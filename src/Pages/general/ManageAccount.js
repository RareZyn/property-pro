import "./ManageAccount.css";
import { MyAccountHeader } from './MyAccountHeader';
import React, { useState } from 'react';

export const ManageAccount = () => {
  
    const [name, setName] = useState('');
    const [profiledesc, setProfileDesc] = useState('');
    const [phonenumber, setPhoneNum] = useState('');
    const [address, setAddress] = useState('');
    
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleProfileDescChange = (event) => {
      setProfileDesc(event.target.value);
    };
  
    const handlePhoneNumChange = (event) => {
      setPhoneNum(event.target.value);
    };

    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };
  
    return (
      <div className="ManageAccount">
         <MyAccountHeader
            name="Username" 
            bio="new user in this website"
            currentPage="Property"
      />
          <div className="ManageAccountCard">

            <div className="InputDetails">
            <h3>EDIT YOUR PROFILE</h3>
            <img
            id="user-image"
            src={require("../../Res/image/user profile.png")}
          />
              <h7>Name (As in IC)</h7>
              <div className="Input">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              
            </div>
            <ManageAccountInputItem
              inputTitle="Description"
              inputHint=""
              value={profiledesc}
              onChange={handleProfileDescChange}
            />
            <ManageAccountInputItem
              inputTitle="Phone Number"
              inputHint=""
              value={phonenumber}
              onChange={handlePhoneNumChange}
            />
            <ManageAccountInputItem
              inputTitle="Address"
              inputHint=""
              value={address}
              onChange={handleAddressChange}
            />
            <button>
              <a href="/myaccount-header">SAVE</a>
            </button>
            </div>
          </div>
       
      
    );
  };
  
  function ManageAccountInputItem({ inputTitle, inputHint, value, onChange }) {
    return (
      <div className="InputDetails">
        
        <h7>{inputTitle}</h7>
        <div className="Input">
          <input
            type={inputTitle === 'Password' ? 'password' : 'text'}
            placeholder={inputHint === '' ? `Enter your ${inputTitle}` : inputHint}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    
    );
  }
