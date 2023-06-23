import React, { useState, useEffect } from "react";
import "../Login.css";

const RegisterPage = ({ showReg }) => {
  const [errorText, setErrorText] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleRegister() {
    try {
      const name = document.getElementById("name-register");
      const password = document.getElementById("password-register");
      const pwd = document.getElementById("password-verify");
      const email = document.getElementById("email-register");
      const testedEmail = isValidEmail(email.value);
      if (!name.value || !password.value || !pwd.value || !email.value) {
        setErrorText("Please fill out all fields before submitting");
        return;
      } else if (password.value !== pwd.value) {
        setErrorText("Passwords must match");
        return;
      } else if (!testedEmail) {
        setErrorText("Invalid email");
        return;
      }
      let registerVals = {};
      registerVals.name = name.value;
      registerVals.password = password.value;
      registerVals.email = email.value;
      registerVals.admin = true;
      const response = await fetch(
        "https://https://blueoceanapi-ucyq.onrender.com//register",
        {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerVals),
        }
      );
      const register = await response.json();
      // console.log(register);
      if (response.status === 409) {
        setErrorText("Email already exists.");
        return;
      } else if (response.status === 500) {
        setErrorText("Internal Error");
        return;
      } else if (response.status === 201) {
        alert("Account successfully registered!");
        showReg(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancel() {
    showReg(false);
  }

  return (
    <div id="register-root">
      <div className="login-container">
        <div className="login-image-container">
          <img
            className="login-image"
            id="logo"
            src="https://dotcom-files.s3.us-west-2.amazonaws.com/galvanize_logo_full-color_light-background.png"
            alt="logo"
          />
        </div>
        <h2 className="login-sign-in-text">Register</h2>

        <div className="register-form-container">
          <form>
            <h3 className="error-text">{errorText}</h3>
            <input
              type="text"
              name="nameReg"
              className="login-input"
              id="name-register"
              placeholder="First and Last Name"
            ></input>
            <br></br>
            <input
              type="email"
              name="emailReg"
              className="login-input"
              id="email-register"
              placeholder="Email address"
            ></input>
            <br></br>
            <input
              type="password"
              name="passwordReg"
              className="login-input"
              id="password-register"
              placeholder="Set Password"
            ></input>
            <br></br>
            <input
              type="password"
              name="passwordVerify"
              className="login-input"
              id="password-verify"
              placeholder="Verify Password"
            ></input>
            <br></br>
          </form>
        </div>
        <div className="login-button-container">
          <button className="login-button" onClick={handleRegister}>
            Register
          </button>
          <button className="login-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
