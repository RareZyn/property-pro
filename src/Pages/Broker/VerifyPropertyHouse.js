import React, { useState, useRef, useEffect, useContext } from "react";
import "./VerifyProperty.css";
import PropertyRejectionCard from "./PropertyRejectionCard.js";
import DocumentRejectionCard from "./DocumentRejectionCard.js";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getProperty } from "../../utils/api.js";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../utils/userAPI";

export const VerifyPropertyHouse = () => {
  const [isRejectClicked, setIsRejectClicked] = useState(false);
  const [rejectionCard, setRejectionCard] = useState("hidden");
  const [supportingPdf1, setSupportingPdf1] = useState("");
  const [supportingPdf2, setSupportingPdf2] = useState("");
  const [supportingPdf3, setSupportingPdf3] = useState("");
  const [documentRejectionPopup, setDocumentRejectionPopup] = useState(
    "DocumentRejection-hidden"
  );
  const { pathname } = useLocation(); //complete path of our page
  const propertyID = pathname.split("/")[2];

  const { data, isError, isLoading } = useQuery(["Property", propertyID], () =>
    getProperty(propertyID)
  );

  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log("No user token");
    }
  }, [userToken]);

  const userId = user?._id;

  console.log(data);

  let cancelRejectionCardRef = useRef();
  let verifyPdf1 = useRef();
  let verifyPdf2 = useRef();
  let verifyPdf3 = useRef();
  let rejectPdf1Ref = useRef();
  let rejectPdf2Ref = useRef();
  let rejectPdf3Ref = useRef();
  let cancelDocumentRejectionRef = useRef();

  const BrokerRejectProperty = () => {
    const newRejectClickedState = !isRejectClicked;
    setIsRejectClicked(!isRejectClicked);
    setRejectionCard(newRejectClickedState ? "visible" : "hidden");
  };

 useEffect(() => {
   let handler = (e) => {
     if (
       cancelRejectionCardRef.current &&
       cancelRejectionCardRef.current.contains(e.target)
     ) {
       if (rejectionCard === "visible") {
         setRejectionCard("hidden");
         setIsRejectClicked(false);
       }
     }

     if (verifyPdf1.current && verifyPdf1.current.contains(e.target)) {
       if (supportingPdf1 === "Verified") {
         setSupportingPdf1("");
       } else {
         setSupportingPdf1("Verified");
       }
     } else if (verifyPdf2.current && verifyPdf2.current.contains(e.target)) {
       if (supportingPdf2 === "Verified") {
         setSupportingPdf2("");
       } else {
         setSupportingPdf2("Verified");
       }
     } else if (verifyPdf3.current && verifyPdf3.current.contains(e.target)) {
       if (supportingPdf3 === "Verified") {
         setSupportingPdf3("");
       } else {
         setSupportingPdf3("Verified");
       }
     }

     if (rejectPdf1Ref.current && rejectPdf1Ref.current.contains(e.target)) {
       if (documentRejectionPopup === "DocumentRejection-hidden") {
         setDocumentRejectionPopup("DocumentRejection");
       }
     } else if (
       rejectPdf2Ref.current &&
       rejectPdf2Ref.current.contains(e.target)
     ) {
       if (documentRejectionPopup === "DocumentRejection-hidden") {
         setDocumentRejectionPopup("DocumentRejection");
       }
     } else if (
       rejectPdf3Ref.current &&
       rejectPdf3Ref.current.contains(e.target)
     ) {
       if (documentRejectionPopup === "DocumentRejection-hidden") {
         setDocumentRejectionPopup("DocumentRejection");
       }
     }

     if (
       cancelDocumentRejectionRef.current &&
       cancelDocumentRejectionRef.current.contains(e.target)
     ) {
       if (documentRejectionPopup === "DocumentRejection") {
         setDocumentRejectionPopup("DocumentRejection-hidden");
       }
     }
   };

   document.addEventListener("mousedown", handler);

   return () => {
     document.removeEventListener("mousedown", handler);
   };
 }, [
   rejectionCard,
   supportingPdf1,
   supportingPdf2,
   supportingPdf3,
   documentRejectionPopup,
 ]);
  return (
    <div className="VerifyProperty">
      <div className="property-image-container">
        <img id="mainproperty-image" src={data?.images[0]} />
        <div className="property-image-div">
          <div className="property-image-1row">
            <img id="property-image" src={data?.images[1]} />
            <img id="property-image" src={data?.images[2]} />
          </div>
          <div className="property-image-1row">
            <img id="property-image" src={data?.images[3]} />
            <img id="property-image" src={data?.images[4]} />
          </div>
        </div>
      </div>

      <div className="PropertyDetailsCard">
        <div className="MoreThumbnails">
          <img src={data?.images[1]} />
          <img src={data?.images[2]} />
          <img src={data?.images[3]} />
        </div>

        <PropertyRejectionCard
          className={rejectionCard}
          ref={cancelRejectionCardRef}
        ></PropertyRejectionCard>

        <div className="house-title-price">
          <h1 className="house-title">{data?.title}</h1>
          <div className="house-price">RM {data?.price}</div>
        </div>

        <div className="seller-details-div">
          <h3>Uploaded by</h3>
          <div className="seller-username">{data?.seller.firstName}</div>
        </div>

        <div className="house-details">
          <h1>House Details</h1>

          <div className="house-desc-div">
            <h3>Property Description:</h3>
            <p className="house-desc">{data?.description}</p>
          </div>

          <div className="house-property-info">
            <div className="info-page-container">
              <h2>Property Information</h2>

              <div className="info-section">
                <div className="info-label">Location</div>
                <div className="info-value" id="house-location">
                  {data?.house.location}
                </div>
              </div>
              <div className="info-section">
                <div className="info-label">Floor size</div>
                <div className="info-value" id="house-floor-size">
                  {data?.house.size} sqft
                </div>
              </div>
              <div className="info-section">
                <div className="info-label">Number of bedroom</div>
                <div className="info-value" id="house-bedrooms">
                  {data?.house.rooms}
                </div>
              </div>
              <div className="info-section">
                <div className="info-label">Number of bathrooms</div>
                <div className="info-value" id="house-bathrooms">
                  {data?.house.bathrooms}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="SupportingDocumentCard">
          <h2>Supporting document</h2>
          <div className="supporting-doc-grid">
            <div className={supportingPdf1}>
              <img
                src={require("../../Res/image/broker-icons/codicon_file-pdf.png")}
              />
              <div className="verify-reject-doc">
                <button
                  className="SupportingDocumentButton"
                  ref={rejectPdf1Ref}
                >
                  Reject
                </button>
                <button className="SupportingDocumentButton" ref={verifyPdf1}>
                  {supportingPdf1 === "Verified" ? "Unverify" : "Verify"}
                </button>
              </div>
              <div className="view-doc">
                <h3>House Detail 1</h3>
                <button className="SupportingDocumentButton">
                  <a href={data?.file[0]} target="_blank">
                    View
                  </a>
                </button>
              </div>
            </div>

            <div className={supportingPdf2}>
              <img
                src={require("../../Res/image/broker-icons/codicon_file-pdf.png")}
              />
              <div className="verify-reject-doc">
                <button
                  className="SupportingDocumentButton"
                  ref={rejectPdf2Ref}
                >
                  Reject
                </button>
                <button className="SupportingDocumentButton" ref={verifyPdf2}>
                  {supportingPdf2 === "Verified" ? "Unverify" : "Verify"}
                </button>
              </div>
              <div className="view-doc">
                <h3>House Detail 2</h3>
                <button className="SupportingDocumentButton">
                  <a href={data?.file[1]} target="_blank">
                    View
                  </a>
                </button>
              </div>
            </div>

            <div className={supportingPdf3}>
              <img
                src={require("../../Res/image/broker-icons/codicon_file-pdf.png")}
              />
              <div className="verify-reject-doc">
                <button
                  className="SupportingDocumentButton"
                  ref={rejectPdf3Ref}
                >
                  Reject
                </button>
                <button className="SupportingDocumentButton" ref={verifyPdf3}>
                  {supportingPdf3 === "Verified" ? "Unverify" : "Verify"}
                </button>
              </div>
              <div className="view-doc">
                <h3>House Detail 3</h3>
                <button className="SupportingDocumentButton">
                  <a href={data?.file[2]} target="_blank">
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <DocumentRejectionCard
          className={documentRejectionPopup}
          ref={cancelDocumentRejectionRef}
        ></DocumentRejectionCard>
        <div className="RejectVerify">
          <h3 onClick={BrokerRejectProperty}>Reject</h3>
          <h3>Verify</h3>
        </div>
      </div>
    </div>
  );
};
