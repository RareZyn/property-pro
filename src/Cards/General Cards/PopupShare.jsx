import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import shareIcon from "../../Res/image/share-2.png";
import {FaCircleXmark,FaCopy } from "react-icons/fa6";
import { FaInstagram,FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";
import "./PopupShare.css";
import SuccesToastify from "../../Cards/ToastifyCards/SuccesToastify";



export default function PopupShare() {

    const inputRef = useRef(null);

    const handleCopy = () => {
      const copyText = inputRef.current;
  
      // Select the text field
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
  
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
  
      // Alert the copied text
      alert("Copied the text: " + copyText.value);
    };
   

    return (
        <div>
            <Popup trigger=
                {<button id='ShareBtn'> <img src={shareIcon} alt="Shares" />
                <span>Share</span> </button>} 
                modal nested>
                {
                    close => (
                 <div className='sharecontent'>
                 <div className='content'>
                 <div className='shareFirstRow'>
              <h3>Share</h3>
              <div>
                <button id='close-button' onClick=
                    {() => close()}>
                    <FaCircleXmark></FaCircleXmark>
                </button>
                </div>
                </div>

             <div className="shareSecondRow">

              <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shareSecondRow-icon"
              >
                  <FaWhatsapp className="whatsapp"/>
              </a>
              <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shareSecondRow-icon"
              >
                  <FaInstagram className="instagram" />
              </a>
              <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shareSecondRow-icon"
              >
                  <FaTwitter className="twitter" />
              </a>
              <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shareSecondRow-icon"
              >
                  <FaFacebook className="facebook" />
              </a>
          </div>

          <div className="link-div">
                <div className="link-box">
                <input type="text" value="http://property-housedetails-overview" ref={inputRef} id="myInput" readOnly />
            </div>
          <div className='copy-icon'>
                <button onClick={handleCopy}><FaCopy></FaCopy></button>
            </div>
          </div>

          <SuccesToastify></SuccesToastify>
        </div>
        </div>
             )
             }
            </Popup>
        </div>
    )
};