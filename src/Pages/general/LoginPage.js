import { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'

export const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try{
      const res = await axios.post('http://localhost:5000/users/login', formValues, {withCredentials:true});
      if(res.data === 'The account does not exist'){
        alert("The account is not existed");
      }
      else if(res.data === 'The password is incorrect'){
        alert('The password is incorrect');
      }
      else{
        // Poll for the cookie existence
        const pollForCookie = (intervalId) => {
          const token = Cookies.get('token');
          if (token) {
            clearInterval(intervalId); // Stop polling once the cookie is found
            window.scrollTo(0, 0);
            nav('/homepage');
          }
        };

        const intervalId = setInterval(() => pollForCookie(intervalId), 100);

        // Optional: Timeout to stop polling after a certain period
        setTimeout(() => {
          clearInterval(intervalId);
          if (!Cookies.get('token')) {
            alert('Failed to log in. Please try again.');
          }
        }, 5000); // Stop polling after 5 seconds
      }
    } catch(err){
      console.error('Login error', err);
      alert('An error occur during login');
    } finally{
      setLoading(false)
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Render a loading state while checking authentication
  }

  return (
    <div className="LoginPage">
      <form className="LoginBlock" onSubmit={submitHandler}>
        <div className="login-topic">
          <h1>Login to your account</h1>
        </div>
        <div className="login-div">
          <section id="login-section">
            Username
            <input 
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}/>
          </section>
          <section id="login-section">
            Password
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValues.password}
              onChange={handleChange}/>
          </section>
          <div id="show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </div>
          <section id="input-button">
            <button id="login-account">Login Account</button>
          </section>
          <div id="dont-have-account">
            <p>
              Do not have an account?{" "}
              <Link 
                to="/register" 
                id="register-word" 
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
