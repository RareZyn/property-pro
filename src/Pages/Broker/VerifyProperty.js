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
        <div className="MoreThumbnails">
          <img src={require("../../Res/image/image icon.png")}/>
          <img src={require("../../Res/image/image icon.png")}/>
          <img src={require("../../Res/image/image icon.png")}/>
        </div>
        <h1>Item Title</h1>
        <p>
          Bla bla bla bla bla
        </p>
        <button>Price RMXX.XX</button>
        <div className="SupportingDocumentCard">
          <h2>Supporting document</h2>
          <ul>
            <li>
              <img src={require("../../Res/image/broker-icons/codicon_file-zip.png")}/>
              <div className="VerifyRejectDocumnet">
                <a href="/">
                  <button className="SupportingDocumentButton">Verify</button>
                </a>
                <a href="/">
                <button className="SupportingDocumentButton">Reject</button>
                </a>
              </div>
              <div>
                <h3>filename.zip</h3>
                <button className="SupportingDocumentButton">View</button>
              </div>
            </li>

            <li>
              <img src={require("../../Res/image/broker-icons/codicon_file-zip.png")}/>
              <div className="VerifyRejectDocumnet">
                <a href="/">
                  <button className="SupportingDocumentButton">Verify</button>
                </a>
                <a href="/">
                <button className="SupportingDocumentButton">Reject</button>
                </a>
              </div>
              <div>
                <h3>filename.zip</h3>
                <button className="SupportingDocumentButton">View</button>
              </div>
            </li>

            <li>
              <img src={require("../../Res/image/broker-icons/codicon_file-zip.png")}/>
              <div className="VerifyRejectDocumnet">
                <a href="/">
                  <button className="SupportingDocumentButton">Verify</button>
                </a>
                <a href="/">
                <button className="SupportingDocumentButton">Reject</button>
                </a>
              </div>
              <div>
                <h3>filename.zip</h3>
                <button className="SupportingDocumentButton">View</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="ProgressBar">
          <p>A section</p>
          <p>B section</p>
          <p>C section</p>
        </div>
        <div className="ProgressBarLabel">
          <p>Upload property</p>
          <p>Document verification</p>
          <p>null</p>
          <p>Broker verification</p>
          <p>Property verified</p>
        </div>
        <div className='RejectVerify'>
          <h3 onClick={BrokerRejectProperty}>Reject</h3>
          <h3>Verify</h3>
        </div>
      </div>
    </div>
  );
};
