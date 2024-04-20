import "./MakePaymentPage.css";

export const MakePaymentDebit = () => {
  <div className="MakePaymentDebit">
    <div class="wrapper">
      <div class="container">
        <section class="step-wizard">
          <ul class="step-wizard-list">
            <li class="step-wizard-item">
              <span class="progress-count">1</span>
            </li>
            <li class="step-wizard-item current-item">
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
          <p>Card Details</p>
        </div>

        <form id="myForm">
          <div class="inputBox">
            <span>card number</span>
            <input type="text" maxlength="16" class="card-number-input" />
          </div>
          <div class="inputBox">
            <span>card holder</span>
            <input type="text" class="card-holder-input" />
          </div>
          <div class="flexbox">
            <div class="inputBox">
              <span>expiration mm</span>
              <select name="" id="" class="month-input">
                <option value="month" selected disabled>
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="inputBox">
              <span>expiration yy</span>
              <select name="" id="" class="year-input">
                <option value="year" selected disabled>
                  year
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div class="inputBox">
              <span>cvv</span>
              <input type="text" maxlength="4" class="cvv-input" />
            </div>
          </div>
          <input type="submit" value="submit" class="submit-btn" />
        </form>
      </div>
    </div>
  </div>;
};
