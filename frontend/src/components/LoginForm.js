import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/user/login/", {
      "email": email,
      "password": password
    })
      .then(res => {
        console.log(res.data);
        console.log("sccuesss")
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/searchrecipe";
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <form className="right">
      <div className="mealbuddy4">MealBuddy</div>
      <div className="click-on-sign">
        Click on sign in to plan your perfect meal
      </div>
      <input
        className="email-input"
        type="text"
        placeholder="Enter your email"
        value={email} 
        onChange={(text) => setEmail(text.target.value)}
      />
      <input
        className="password-input"
        type="password"
        placeholder="Enter your password"
        value={password} 
        onChange={(text) => setPassword(text.target.value)}
      />
      <button className="signin-button" onClick={handleSubmit}>
        <div className="sign-in1">Sign in</div>
      </button>
      <div className="signup-message">
        <div className="dont-have-an">Don’t have an account?</div>
        <div className="signup-parent">
          <a href="/register" className="signup">SignUp</a>
          <div className="group-child" />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
