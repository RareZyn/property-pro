import { useContext, useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../AppProvider";

export const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })
  const nav = useNavigate()
  const {user, setUser} = useContext(AppContext)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/users/login', formValues)
    .then(res => {
      if(res.data === 'The account is not existed'){
        alert("The account is not existed")
      }
      else if(res.data === 'The password is incorrect'){
        alert('The password is incorrect')
      }
      else{
        setUser({
          ...user,
          username: res.data.username,
          firstName: res.data.firstName,
          lastName: res.data.lastName
        })
        console.log(user.firstName)
        nav('/homepage')
      }
    })
  }

  return (
    <div className="LoginPage">
      <form className="LoginBlock" onSubmit={submitHandler}>
        <div className="login-topic">
          <h1>Login to your account</h1>
        </div>
        <div className="login-div">
          <section id="login-section">
            username
            <input 
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}/>
          </section>
          <section id="login-section">
            password
            <input 
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}/>
          </section>
          <section id="input-button">
            <button id="login-account">Login Account</button>
          </section>
          <div id="dont-have-account">
            <p>
              Do not have an account?{" "}
              <Link to="/register" id="register-word">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
