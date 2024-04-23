import { Link } from "react-router-dom";
import "./MakePaymentPage.css";

export const MakePaymentPage = () => {
  return (
    <div className="MakePaymentPage">
      <div className="wrapper">
        <form id="paymentForm">
          <section className="step-wizard">
            <ul className="step-wizard-list">
              <li className="step-wizard-item current-item">
                <span className="progress-count">1</span>
              </li>
              <li className="step-wizard-item">
                <span className="progress-count">2</span>
              </li>
              <li className="step-wizard-item">
                <span className="progress-count">3</span>
              </li>
              <li className="step-wizard-item">
                <span className="progress-count">4</span>
              </li>
            </ul>
          </section>

          <div className="register-link">
            <p>Select Payment Method</p>
          </div>

          <div className="button-container">
            <Link to="/choose-bank">
              <input
                type="button"
                value="Online Banking"
                className="submit-btn vertical-button"
              />
            </Link>
            <Link to="/make-payment-debit-online">
              <input
                type="button"
                value="Card"
                className="submit-btn vertical-button"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
