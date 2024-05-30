import React from 'react';
import Popup from 'reactjs-popup';
import "./PopupShare.css";

 
export default function PopupShare() {
    return (
        <div>
            <Popup trigger=
                {<button id='ShareBtn'> Share </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to GFG!!!zshbhdbshfbhdbfhbdhj
                            </div>
                        
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};