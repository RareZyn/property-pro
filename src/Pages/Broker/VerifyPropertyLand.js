import React, { useState, useRef, useEffect, useContext } from "react";
import "./VerifyProperty.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getProperty, verifyProperty } from "../../utils/api.js";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../utils/userAPI";

export const VerifyPropertyLand = () => {
  const [supportingPdf1, setSupportingPdf1] = useState();
  const [supportingPdf2, setSupportingPdf2] = useState();
  const [supportingPdf3, setSupportingPdf3] = useState();
  const [supportingPdf1Message, setSupportingPdf1Message] = useState("");
  const [supportingPdf2Message, setSupportingPdf2Message] = useState("");
  const [supportingPdf3Message, setSupportingPdf3Message] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const propertyID = pathname.split("/")[2];
  const [activeButton, setActiveButton] = useState({
    pdf1: null,
    pdf2: null,
    pdf3: null,
  });
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

  const handleAcceptClick = (pdf) => {
    setActiveButton((prev) => ({
      ...prev,
      [pdf]: prev[pdf] === "accept" ? null : "accept",
    }));

    switch (pdf) {
      case "pdf1":
        setSupportingPdf1((prev) => !prev);
        break;
      case "pdf2":
        setSupportingPdf2((prev) => !prev);
        break;
      case "pdf3":
        setSupportingPdf3((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleRejectClick = (pdf) => {
    setActiveButton((prev) => ({
      ...prev,
      [pdf]: prev[pdf] === "reject" ? null : "reject",
    }));

    switch (pdf) {
      case "pdf1":
        setSupportingPdf1(false);
        break;
      case "pdf2":
        setSupportingPdf2(false);
        break;
      case "pdf3":
        setSupportingPdf3(false);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      await verifyProperty(propertyID, getVerificationResults(), user.id);
      navigate("/verify-property-homepage");
    } catch (error) {
      console.error(error.message);
    }
  };

  // Helper function to get verification results
  const getVerificationResults = () => [
    {
      message: supportingPdf1Message,
      status: supportingPdf1,
    },
    {
      message: supportingPdf2Message,
      status: supportingPdf2,
    },
    {
      message: supportingPdf3Message,
      status: supportingPdf3,
    },
  ];
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
          <img src={data?.images[0]} />
          <img src={data?.images[1]} />
          <img src={data?.images[2]} />
        </div>

        <div className="land-title-price">
          <h1 className="land-title">{data?.title}</h1>
          <div className="land-price">RM {data?.price}</div>
        </div>

        <div className="seller-details-div">
          <h3>Uploaded by</h3>
          <div className="seller-username">{data?.seller.firstName}</div>
        </div>

        <div className="land-details">
          <h1>Land Details</h1>

          <div className="land-desc-div">
            <h3>Property Description:</h3>
            <p className="land-desc">{data?.description}</p>
          </div>

          <div className="land-property-info">
            <div className="info-page-container">
              <h2>Property Information</h2>

              <div className="info-section">
                <div className="info-label">Location</div>
                <div className="info-value" id="land-location">
                  {data?.land.location}
                </div>
              </div>
              <div className="info-section">
                <div className="info-label">Property Type</div>
                <div className="info-value" id="land-property-type">
                  {data?.land.land_type}
                </div>
              </div>
              <div className="info-section">
                <div className="info-label">Land Size</div>
                <div className="info-value" id="land-size">
                  {data?.land.area} sqft
                </div>
              </div>
              <div className="info-section">
                <div className="info-label">Land Type</div>
                <div className="info-value" id="land-type">
                  {data?.land.ownership_type}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="SupportingDocumentCard">
          <h2>Supporting document</h2>
          <div className="supporting-doc-grid">
            <div className={`SupportingDocument ${activeButton.pdf1}`}>
              <img
                src={require("../../Res/image/broker-icons/codicon_file-pdf.png")}
              />
              <div className="verify-reject-doc">
                <button
                  className={`RejectButton ${
                    activeButton.pdf1 === "reject" ? "active" : ""
                  }`}
                  onClick={() => handleRejectClick("pdf1")}
                >
                  Reject
                </button>
                <button
                  className={`AcceptButton ${
                    activeButton.pdf1 === "accept" ? "active" : ""
                  }`}
                  onClick={() => handleAcceptClick("pdf1")}
                >
                  Verify
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
              <div id="changeMessage">
                <input
                  type="text"
                  onChange={(event) =>
                    setSupportingPdf1Message(event.target.value)
                  }
                  id="reason1"
                />
              </div>
            </div>

            <div className={`SupportingDocument ${activeButton.pdf2}`}>
              <img
                src={require("../../Res/image/broker-icons/codicon_file-pdf.png")}
              />
              <div className="verify-reject-doc">
                <button
                  className={`RejectButton ${
                    activeButton.pdf2 === "reject" ? "active" : ""
                  }`}
                  onClick={() => handleRejectClick("pdf2")}
                >
                  Reject
                </button>
                <button
                  className={`AcceptButton ${
                    activeButton.pdf2 === "accept" ? "active" : ""
                  }`}
                  onClick={() => handleAcceptClick("pdf2")}
                >
                  Verify
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
              <div id="changeMessage">
                <input
                  type="text"
                  onChange={(event) =>
                    setSupportingPdf2Message(event.target.value)
                  }
                  id="reason2"
                />
              </div>
            </div>

            <div className={`SupportingDocument ${activeButton.pdf3}`}>
              <img
                src={require("../../Res/image/broker-icons/codicon_file-pdf.png")}
              />
              <div className="verify-reject-doc">
                <button
                  className={`RejectButton ${
                    activeButton.pdf3 === "reject" ? "active" : ""
                  }`}
                  onClick={() => handleRejectClick("pdf3")}
                >
                  Reject
                </button>
                <button
                  className={`AcceptButton ${
                    activeButton.pdf3 === "accept" ? "active" : ""
                  }`}
                  onClick={() => handleAcceptClick("pdf3")}
                >
                  Verify
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
              <div id="changeMessage">
                <input
                  type="text"
                  onChange={(event) =>
                    setSupportingPdf3Message(event.target.value)
                  }
                  id="reason3"
                />
              </div>
            </div>
          </div>
        </div>
        <button id="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
