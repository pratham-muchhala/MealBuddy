import "./RegistrationForm.css";
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {

  var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var [line1, setLine1] = useState("");
    var [city, setCity] = useState("");
    var [state, setState] = useState("");
    var [zip, setZip] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/user/',
            data: {
                "name": name,
                "email": email,
                "password": password,
                "address": {
                    "line": line1,
                    "city": city,
                    "state": state,
                    "pincode": zip
                }
            }
        }).then((res)=>{
          alert("Successfully Registerd");
          window.location.href = "/login";
        })
        .catch((err)=>console.error(err));
    }


  return (
    <div className="register-form">
      <div className="register1">Register</div>
      <div className="register-now-and">
        Register now and gain access to some unique recipes!
      </div>
      <input 
        className="name" 
        type="text" 
        placeholder="Enter your full name" 
        value={name} 
        onChange={(text) => setName(text.target.value)}
      />
      <input 
        className="name" 
        type="text" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(text) => setEmail(text.target.value)}
      />
      <input 
        className="name" 
        type="text" 
        placeholder="Enter your ZipCode" 
        value={zip} 
        onChange={(text) => setZip(text.target.value)}
      />
      <input 
        className="name" 
        type="text" 
        placeholder="Enter your password" 
        value={password} 
        onChange={(text) => setPassword(text.target.value)}
      />
      <input
        className="confirm-pwd"
        type="text"
        placeholder="Confirm password"
      />
      <button className="reg-button" onClick={handleSubmit}>
        <div className="register2">
          <span className="register3">Register</span>
          <span className="span">{` `}</span>
        </div>
      </button>
      <a href="/login" className="sign-in">
        <div className="have-an-account">Have an account? Sign in</div>
      </a>
    </div>
  );
};

export default RegistrationForm;
