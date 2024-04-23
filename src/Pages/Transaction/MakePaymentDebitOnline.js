import "./MakePaymentDebitOnline.css";
export const MakePaymentDebitOnline = () => {
  return (
    <div className="MakePaymentDebitOnline">
      <div className="wrapper">
        <form id="card-form">
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
          <div className="register-card">
            <div className="header-register">
              <h3>Register Card</h3>
            </div>
            <div className="register-form">
              <section id="card-input">
                Card Number
                <input type="number" />
              </section>
              <section id="card-input">
                Expiry Date
                <input type="month" />
              </section>
              <section id="card-input">
                CVV
                <input type="number" />
              </section>
              <section id="card-input">
                Name on card
                <input type="text" />
              </section>
            </div>
            <input type="submit" text="submit" id="card-submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
