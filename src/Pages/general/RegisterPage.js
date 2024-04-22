import "./RegisterPage.css";

export const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <div class="wrapper">
        <form action="">
          <h1>Create New Account</h1>

          <div class="input-box">
            <input type="text" placeholder="Username" required />
            <i class="bx bxs-user"></i>
          </div>

          <div class="input-box">
            <input type="email" placeholder="Email" required />
            <i class="bx bxs-envelope"></i>
          </div>

          <div class="input-box">
            <input type="password" placeholder="Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <div class="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <button class="btn">Create Account</button>

          <div class="register-link">
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
