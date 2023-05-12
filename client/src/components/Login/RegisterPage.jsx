import React, { useState, useEffect, useContext } from 'react';
import '../../styles/Login.css';


const RegisterPage = ({ showReg }) => {

    function handleRegister() {
        showReg(false);
    }

    function handleCancel() {
        showReg(false);
    }
    
    return (
        <div>
            <form>
                <label for="usernameReg">User Name:</label><br></br>
                <input type="text" name="usernameReg" className='login-input' id="username-register"></input><br></br>
                <label for="emailReg">Email Address:</label><br></br>
                <input type="email" name="emailReg" className='login-input' id="email-register"></input><br></br>
                <label for="passwordReg">Password:</label><br></br>
                <input type="password" name="passwordReg" className='login-input' id="password-register"></input><br></br>
                <label for="passwordVerify">Verify Password:</label><br></br>
                <input type="password" name="passwordVerify" className='login-input' id="password-verify"></input><br></br>
            </form>
            <div>
                <button onClick={handleRegister}>Register Now!</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
  };
  
  export default RegisterPage;