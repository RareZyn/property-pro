import "./MakePaymentPage.css";

export const MakePaymentPage = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      var bankName = document.getElementById("bankName").value;
      // Perform any necessary actions with the selected bank name
      console.log("Selected bank:", bankName);
      // Redirect to the next page (Page 2)
      window.location.href = "paymentgateway.html"; // Replace with the actual URL
    });
  });
  return (
    <div className="MakePaymentPage">
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
            <p>Select Bank</p>
          </div>

          <form action="">
            <div class="flexbox">
              <div class="inputBox">
                <select name="bankName" id="bankName" class="bank-input">
                  <option value="Bank Name" selected disabled>
                    Bank Name
                  </option>
                  <option value="Bank A">Bank A</option>
                  <option value="Bank B">Bank B</option>
                  <option value="Bank C">Bank C</option>
                </select>
              </div>
            </div>
            <input type="submit" value="submit" class="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};
