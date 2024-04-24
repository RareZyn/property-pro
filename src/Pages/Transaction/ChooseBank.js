import "./MakePaymentPage.css";
import { Link } from "react-router-dom";

export const ChooseBank = () => {
  return (
    <div className="ChooseBank">
      <div className="wrapper">
        <div className="container">
          <section className="step-wizard">
            <ul className="step-wizard-list">
              <li className="step-wizard-item">
                <span className="progress-count">1</span>
              </li>
              <li className="step-wizard-item current-item">
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
            <p>Select Bank</p>
          </div>

          <form action="">
            <div className="flexbox">
              <div className="inputBox">
                <select name="bankName" id="bankName" className="bank-input">
                  <option value="Bank Name" selected disabled>
                    Bank Name
                  </option>
                  <option value="Bank A">Bank A</option>
                  <option value="Bank B">Bank B</option>
                  <option value="Bank C">Bank C</option>
                </select>
              </div>
            </div>
            <Link to="/make-payment-success">
            <input type="submit" value="submit" className="submit-btn" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
