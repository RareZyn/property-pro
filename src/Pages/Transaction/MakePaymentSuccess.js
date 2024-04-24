import React, { useState, useEffect } from "react";
import "./MakePaymentPage.css";
import { Link } from "react-router-dom";

export const MakePaymentSuccess = () => {
  const [showPaymentGateway, setShowPaymentGateway] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Hide payment gateway after 5 seconds
    const timer = setTimeout(() => {
      setShowPaymentGateway(false);
      setShowSuccess(true);
    }, 5000);

    // Clean up timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="MakePaymentSuccess">
      <div className="wrapper">
        <div className="container">
          <section className="step-wizard">
            {/* Your step wizard markup */}
          </section>

          {showPaymentGateway && (
            <div className="payment-gateway">
              <div className="register-link">
                <p>Payment Gateway - Bank API</p>
              </div>
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="word">
                <p>
                  <small>Redirecting to Payment page.</small>
                </p>
              </div>
            </div>
          )}

          {showSuccess && (
            <div className="register-link">
              <p>Transaction Done</p>
            </div>
          )}

          {showSuccess && (
            <div className="word">
              <p>
                Transaction can be canceled anytime if there is any suspicious
                activity
              </p>
            </div>
          )}

          {/* Your form markup */}
          <form action="">
            <div className="button-container">
              <input
                type="submit"
                value="Contact Seller"
                className="submit-btn contact-seller-btn"
              />
              <Link to="/homepage" id="home-button">
                <input
                  type="button"
                  value="Home"
                  className="submit-btn home-btn"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
