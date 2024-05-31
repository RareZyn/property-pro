import React from 'react';
import Popup from 'reactjs-popup';
import shareIcon from "../../Res/image/share-2.png";
import { FaInstagram,FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";
import "./PopupShare.css";

 
export default function PopupShare() {
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
              <h3>Share</h3>

             <div className="shareSecondRow">

              <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shareSecondRow-icon"
              >
                  <FaWhatsapp className="whatsapp" />
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
                            </div>
                        
                            <div>
                                <button id='close-button' onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};