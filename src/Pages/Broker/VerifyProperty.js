import React,{ useState,useRef,useEffect } from "react";
import "./VerifyProperty.css";
import PropertyRejectionCard from "./PropertyRejectionCard.js"

export const VerifyProperty = () => {
  const [isRejectClicked,setIsRejectClicked] = useState(true);
  const [rejectionCard,setRejectionCard] = useState("hide"); 
  let rejectionCardRef = useRef();

const BrokerRejectProperty = () =>{
    setIsRejectClicked(!isRejectClicked);
    if(isRejectClicked){
      setRejectionCard("visible");
    }
    else{
      setRejectionCard("hide");
    }
    console.log(rejectionCard);
  } 

  useEffect(() => {
    let handler = (e) =>{
      if(rejectionCardRef.current && 
        !rejectionCardRef.current.contains(e.target)){
      setRejectionCard("hidden");
      setIsRejectClicked(!isRejectClicked);
      }
    }
    document.addEventListener("mousedown",handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[rejectionCard])

  return (
    <div className="VerifyProperty">
      {rejectionCard === "visible" && <PropertyRejectionCard ref={rejectionCardRef}/>}
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
