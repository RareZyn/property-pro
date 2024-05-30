import React from 'react';
import Popup from 'reactjs-popup';

 
export default function PopupShare() {
    return (
        <div>
            <Popup trigger=
                {<button> Click to open modal </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to GFG!!!
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