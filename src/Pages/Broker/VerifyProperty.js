import { useState } from "react";
import "./VerifyProperty.css";
import { PropertyRejectionCard } from "./PropertyRejectionCard.js"

export const VerifyProperty = () => {
  const [isRejectClicked,setIsRejectClicked] = useState(true);
  const [rejectionCard,setRejectionCard] = useState("hide"); 

  const BrokerRejectProperty = () =>{
    setIsRejectClicked(!isRejectClicked);
    if(isRejectClicked){
      setRejectionCard("visible");
    }
    else{
      setRejectionCard("hide");
    }
  } 

  return (
    <div className="VerifyProperty">
      {rejectionCard === "visible" && <PropertyRejectionCard />}
      <img src={require("../../Res/image/image icon.png")} className="ThumbnailImage"/>
      <div className="PropertyDetailsCard">
        <img src={require("../../Res/image/image icon.png")}/>
        <img src={require("../../Res/image/image icon.png")}/>
        <img src={require("../../Res/image/image icon.png")}/>
        <h1>Item Title</h1>
        <p>
          Bla bla bla bla bla
        </p>
        <button>Price RMXX.XX</button>
        <div className="SupportingDocuments"></div>
        <div className="ProgressBar"></div>
        <div className='RejectVerify'>
          <h3 onClick={BrokerRejectProperty}>Reject</h3>
          <h3>Verify</h3>
        </div>
      </div>
    </div>
  );
};
