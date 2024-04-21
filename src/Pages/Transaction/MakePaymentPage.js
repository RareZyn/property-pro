import "./MakePaymentPage.css";

export const MakePaymentPage = () => {
  const onlineBankingBtn = document.getElementById("onlineBankingBtn");
  const debitCardBtn = document.getElementById("debitCardBtn");
  const creditCardBtn = document.getElementById("creditCardBtn");
  return (
    <div className="MakePaymentPage">
      <div class="wrapper">
        <form id="paymentForm">
          <section class="step-wizard">
            <ul class="step-wizard-list">
              <li class="step-wizard-item current-item">
                <span class="progress-count">1</span>
              </li>
              <li class="step-wizard-item">
                <span class="progress-count">2</span>
              </li>
              <li class="step-wizard-item">
                <span class="progress-count">3</span>
              </li>
              <li class="step-wizard-item">
                <span class="progress-count">4</span>
              </li>
            </ul>
          </section>

          <div class="register-link">
            <p>Select Payment Method</p>
          </div>

          <div class="button-container">
            <input
              type="button"
              value="Online Banking"
              class="submit-btn vertical-button"
              id="onlineBankingBtn"
            />
            <input
              type="button"
              value="Debit Card"
              class="submit-btn vertical-button"
              id="debitCardBtn"
            />
            <input
              type="button"
              value="Credit Card"
              class="submit-btn vertical-button"
              id="creditCardBtn"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
