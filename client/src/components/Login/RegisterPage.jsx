import React, { useState, useEffect } from 'react';
import '../../styles/Login.css';


const RegisterPage = ({ showReg }) => {
    const [ errorText, setErrorText ] = useState('');

    function handleRegister() {
        const password = document.getElementById("password-register");
        const pwd = document.getElementById("password-verify");
        const email = document.getElementById("email-register")
        if (password.value !== pwd.value) {
            setErrorText('Passwords must match!');
            return;
        }
        let registerVals = {};
        registerVals.password = password.value;
        registerVals.email = email.value;
        registerVals.admin = true;
        showReg(false);
    }

    function handleCancel() {
        showReg(false);
    }
    
    return (
        <div className='login-container'>
            <h1 className='register-header'>Register now for access to Galvanize's Instructor Hub</h1>
            <form>
                <p>{errorText}</p>
                <label for="emailReg">Email Address:</label><br></br>
                <input type="email" name="emailReg" className='login-input' id="email-register"></input><br></br>
                <label for="passwordReg">Password:</label><br></br>
                <input type="password" name="passwordReg" className='login-input' id="password-register"></input><br></br>
                <label for="passwordVerify">Verify Password:</label><br></br>
                <input type="password" name="passwordVerify" className='login-input' id="password-verify"></input><br></br>
            </form>
            <div className='login-button-container'>
                <button  onClick={handleRegister}>Register</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
  };
  
  export default RegisterPage;