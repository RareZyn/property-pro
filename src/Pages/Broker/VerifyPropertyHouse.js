import React,{ useState,useRef,useEffect } from "react";
import "./VerifyProperty.css";
import PropertyRejectionCard from "./PropertyRejectionCard.js";
import DocumentRejectionCard from "./DocumentRejectionCard.js";
//import { forwardRef } from "react";

export const VerifyPropertyHouse = () => {
  const [isRejectClicked,setIsRejectClicked] = useState(false);
  const [rejectionCard,setRejectionCard] = useState("hidden");
  //const [isVerifyDocumentClicked,setIsVerifyDocumentClicked] = useState(true); 
  const [supportingZip,setSupportingZip] = useState("");
  const [supportingPdf,setSupportingPdf] = useState("");
  const [supportingMedia,setSupportingMedia] = useState("");
  const [documentRejectionPoup,setDocumentRejectionPopup] = useState("DocumentRejection-hidden");
  let cancelRejectionCardRef = useRef();
  let verifyZip = useRef();
  let verifyPdf = useRef();
  let verifyMedia = useRef();
  let rejectZipRef = useRef();
  let rejectPdfRef = useRef();
  let rejectMediaRef = useRef();
  let cancelDocumentRejectionRef = useRef();

const BrokerRejectProperty = () =>{
  const newRejectClickedState = !isRejectClicked;
  setIsRejectClicked(!isRejectClicked);
  setRejectionCard(newRejectClickedState ? "visible" : "hidden");
  console.log(newRejectClickedState ? "visible" : "hidden");
} 

  useEffect(() => {
    let handler = (e) =>{
      if(cancelRejectionCardRef.current && cancelRejectionCardRef.current.contains(e.target)){
        if(rejectionCard==="visible"){
          setRejectionCard("hidden");
          //console.log(rejectionCard);
          setIsRejectClicked(false);
        }
      }

      if(verifyZip.current && verifyZip.current.contains(e.target)){
        if(supportingZip==="Verified"){
          setSupportingZip("");
        } 
        else{
          setSupportingZip("Verified");
        }
      }
      else if(verifyPdf.current && verifyPdf.current.contains(e.target)){
        if(supportingPdf==="Verified"){
          setSupportingPdf("");
        } 
        else{
          setSupportingPdf("Verified");
        }
      }
      else if(verifyMedia.current && verifyMedia.current.contains(e.target)){
        if(supportingMedia==="Verified"){
          setSupportingMedia("");
        } 
        else{
          setSupportingMedia("Verified");
        }
      }

      if(rejectZipRef.current && rejectZipRef.current.contains(e.target)){
        if(documentRejectionPoup==="DocumentRejection-hidden"){
          setDocumentRejectionPopup("DocumentRejection");
        }
      }
      else if(rejectPdfRef.current && rejectPdfRef.current.contains(e.target)){
        if(documentRejectionPoup==="DocumentRejection-hidden"){
          setDocumentRejectionPopup("DocumentRejection");
        }
      }
      else if(rejectMediaRef.current && rejectMediaRef.current.contains(e.target)){
        if(documentRejectionPoup==="DocumentRejection-hidden"){
          setDocumentRejectionPopup("DocumentRejection");
        }
      }

      if(cancelDocumentRejectionRef.current && cancelDocumentRejectionRef.current.contains(e.target)){
        if(documentRejectionPoup==="DocumentRejection"){
          setDocumentRejectionPopup("DocumentRejection-hidden");
        }
      }
    };

    document.addEventListener("mousedown",handler);
    
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[rejectionCard,supportingZip,supportingPdf,supportingMedia,documentRejectionPoup]);

  return (
    <div className="VerifyProperty">

      <div className="property-image-container">
        <img
          id="mainproperty-image"
          src={require("../../Res/image/house.jpeg")}
        />
        <div className="property-image-div">
          <div className="property-image-1row">
            <img
              id="property-image"
              src={require("../../Res/image/house.jpeg")}
            />
            <img
              id="property-image"
              src={require("../../Res/image/image-dummy-house.png")}
            />
          </div>
          <div className="property-image-1row">
            <img
              id="property-image"
              src={require("../../Res/image/image-dummy-house.png")}
            />
            <img
              id="property-image"
              src={require("../../Res/image/image-dummy-house.png")}
            />
          </div>
        </div>
      </div>

      <div className="PropertyDetailsCard">
        <div className="MoreThumbnails">
          <img src={require("../../Res/image/house.jpeg")}/>
          <img src={require("../../Res/image/image-dummy-house.png")}/>
          <img src={require("../../Res/image/house.jpeg")}/>
        </div>

        <PropertyRejectionCard className={rejectionCard} ref={cancelRejectionCardRef}></PropertyRejectionCard>

        <div className="house-title-price">
          <h1 className="house-title">Item Title</h1>
          <div className="house-price">RMXX.XX</div>
        </div>

        <div className="seller-details-div">
          <h3>Uploaded by</h3>
          <div className="seller-username">@aeiouu</div>
        </div>

        <div className="house-details">
          <h1>House Details</h1>

          <div className="house-desc-div">
              <h3>Property Description:</h3>
              <p className="house-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>

          <div className="house-property-info">
              <div className="info-page-container">
                <h2>Property Information</h2>

              <div className="info-section">
                  <div className="info-label">Location</div>
                  <div className="info-value" id="house-location">Petaling Jaya, Selangor</div>
                </div>
                <div className="info-section">
                  <div className="info-label">Property Type</div>
                  <div className="info-value" id="house-property-type">Rumah Teres 2 Tingkat Dijual</div>
                </div>
                <div className="info-section">
                  <div className="info-label">Floor size</div>
                  <div className="info-value" id="house-floor-size">2120 sqft</div>
                </div>
                <div className="info-section">
                  <div className="info-label">Number of bedroom</div>
                  <div className="info-value" id="house-bedrooms">4 bedrooms</div>
                </div>
                <div className="info-section">
                  <div className="info-label">Number of bathrooms</div>
                  <div className="info-value" id="house-bathrooms">3 bathrooms </div>
                </div>
                <div className="info-section">
                  <div className="info-label">Furnished</div>
                  <div className="info-value" id="house-furnished">Unfurnished</div>
                </div>
                <div className="info-section">
                  <div className="info-label">Floors</div>
                  <div className="info-value" id="house-floors">2 Storey</div>
                </div>
              </div>
          </div>
        </div>

        <div className="SupportingDocumentCard">
          <h2>Supporting document</h2>
          <div className="supporting-doc-grid">
            <div className={supportingZip}>
              <img src={require("../../Res/image/broker-icons/codicon_file-zip.png")}/>
              <div className="verify-reject-doc">
                  <button className="SupportingDocumentButton" ref={rejectZipRef}>Reject</button>
                  <button className="SupportingDocumentButton" ref={verifyZip}>{supportingZip==="Verified"? "Unverify" : "Verify"}</button>
              </div>
              <div className="view-doc">
                <h3>filename.zip</h3>
                <button className="SupportingDocumentButton">View</button>
              </div>
            </div>

            <div className={supportingPdf}>
              <img src={require("../../Res/image/broker-icons/codicon_file-pdf.png")}/>
              <div className="verify-reject-doc">
                <button className="SupportingDocumentButton" ref={rejectPdfRef}>Reject</button>
                <button className="SupportingDocumentButton"ref={verifyPdf}>{supportingPdf==="Verified"? "Unverify" : "Verify"}</button>
              </div>
              <div className="view-doc">
                <h3>filename.pdf</h3>
                <button className="SupportingDocumentButton">View</button>
              </div>
            </div>

            <div className={supportingMedia}>
              <img src={require("../../Res/image/broker-icons/codicon_file-media.png")}/>
              <div className="verify-reject-doc">
                <button className="SupportingDocumentButton" ref={rejectMediaRef}>Reject</button>
                <button className="SupportingDocumentButton" ref={verifyMedia}>{supportingMedia==="Verified"? "Unverify" : "Verify"}</button>
              </div>
              <div className="view-doc">
                <h3>filename.png</h3>
                <button className="SupportingDocumentButton">View</button>
              </div>
            </div>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress">
            <div className="progress-1"></div>
            <div className="progress-2"></div>
            <div className="progress-3"></div>
          </div>
        </div>
        
        <div class="progress-text">
            <div>Upload<br/>property</div>
            <div>Document<br/>verification</div>
            <div>Broker<br/>verification</div>
            <div>Property<br/>verified</div>
        </div>

        <DocumentRejectionCard className={documentRejectionPoup} ref={cancelDocumentRejectionRef}></DocumentRejectionCard>
        <div className='RejectVerify'>
          <h3 onClick={BrokerRejectProperty}>Reject</h3>
          <h3>Verify</h3>
        </div>
      </div>
    </div>
  );
};