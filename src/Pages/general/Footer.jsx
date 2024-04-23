import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">

    <div className="footer-desc">
      <h1>PROPERTY PRO</h1>
      <p>Property Pro is the new development that will help you to sell 
        your property with ease and will help you sleep well without 
        thinking on these unsolve problem</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram className="instagram" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaTwitter className="twitter" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaFacebook className="facebook" />
            </a>
          </div>
          </div>

          <div className="footer-contact">
          <h3>Contact</h3>
              <li>
              <FaLocationDot className="location" />
              <span className="icon-text">825, Lingkungan Budi, 50603 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</span>
              </li>
              <li>
              <MdEmail className="gmail" />
              <span className="icon-text">propertypro@gmail.com</span>
              </li>
              <li>
              <FaPhone className="phone" />
              <span className="icon-text">60-83729483</span>
              </li>

          </div>
          
          <div className="footer-rightcontainer">
          <Link to="/myaccount-details">
            <br></br>
          <h4>About </h4><br></br></Link>

          <Link to="/register">
          <h4>Terms & Condition</h4>
          </Link>

          <Link to="/forum-page">
            <br></br>
          <h4>Help</h4>
          </Link>
          </div>
      </div>

      <br></br>
      <p>&copy; 2024 Property Pro. All Rights Reserved.</p>
      
      
    </footer>
  );
};

export default Footer;
