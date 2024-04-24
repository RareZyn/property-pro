import { Link } from "react-router-dom";


export const MakePaymentSuccess = () => {
  return (
    <div className="MakePaymentSuccess">
      <div class="wrapper">
        <div class="container">
          <section class="step-wizard">
            <ul class="step-wizard-list">
              <li class="step-wizard-item">
                <span class="progress-count">1</span>
              </li>
              <li class="step-wizard-item">
                <span class="progress-count">2</span>
              </li>
              <li class="step-wizard-item">
                <span class="progress-count">3</span>
              </li>
              <li class="step-wizard-item current-item">
                <span class="progress-count">4</span>
              </li>
            </ul>
          </section>

          <div class="register-link">
            <p>Transaction Done</p>
          </div>

          <div class="word">
            <p>
              Transaction can be canceled anytime if there is any suspicious
              activity
            </p>
          </div>

          <form action="">
            <div class="button-container">
              <Link to="/forum-page">
              <input
                type="submit"
                value="Contact Seller"
                class="submit-btn contact-seller-btn"
              />
              </Link>

              <Link to="/homepage">
              <input type="button" value="Home" class="submit-btn home-btn" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
