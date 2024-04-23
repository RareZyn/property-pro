import React,{ useState,useRef,useEffect } from "react";
import "./VerifyProperty.css";
import PropertyRejectionCard from "./PropertyRejectionCard.js"
import { number } from "yup";

export const VerifyProperty = () => {
  const [isRejectClicked,setIsRejectClicked] = useState(true);
  const [rejectionCard,setRejectionCard] = useState("hide");
  const [isVerifyDocumentClicked,setIsVerifyDocumentClicked] = useState(true); 
  const [supportingZip,setSupportingZip] = useState("");
  const [supportingPdf,setSupportingPdf] = useState("");
  const [supportingMedia,setSupportingMedia] = useState("");
  let rejectionCardRef = useRef();
  let verifyZip = useRef();
  let verifyPdf = useRef();
  let verifyMedia = useRef();

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
      if(rejectionCardRef.current && !rejectionCardRef.current.contains(e.target)){
        setRejectionCard("hidden");
        setIsRejectClicked(!isRejectClicked);
      } 
      else if(verifyZip.current && verifyZip.current.contains(e.target)){
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
    }

    document.addEventListener("mousedown",handler);
    
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[rejectionCard,supportingZip,supportingPdf,supportingMedia])

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
            <li className={supportingZip}>
              <img src={require("../../Res/image/broker-icons/codicon_file-zip.png")}/>
              <div className="VerifyRejectDocumnet">
                <a>
                  <button className="SupportingDocumentButton" ref={verifyZip}>{supportingZip==="Verified"? "Unverify" : "Verify"}</button>
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

            <li className={supportingPdf}>
              <img src={require("../../Res/image/broker-icons/codicon_file-pdf.png")}/>
              <div className="VerifyRejectDocumnet">
                <a>
                <button className="SupportingDocumentButton"ref={verifyPdf}>{supportingPdf==="Verified"? "Unverify" : "Verify"}</button>
                </a>
                <a href="/">
                <button className="SupportingDocumentButton">Reject</button>
                </a>
              </div>
              <div>
                <h3>filename.pdf</h3>
                <button className="SupportingDocumentButton">View</button>
              </div>
            </li>

            <li className={supportingMedia}>
              <img src={require("../../Res/image/broker-icons/codicon_file-media.png")}/>
              <div className="VerifyRejectDocumnet">
                <a>
                <button className="SupportingDocumentButton" ref={verifyMedia}>{supportingMedia==="Verified"? "Unverify" : "Verify"}</button>
                </a>
                <a href="/">
                <button className="SupportingDocumentButton">Reject</button>
                </a>
              </div>
              <div>
                <h3>filename.png</h3>
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
