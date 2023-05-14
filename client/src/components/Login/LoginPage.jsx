import React, { useState, useEffect } from 'react';
import '../../styles/Login.css';


const LoginPage = ({ showReg, userAuth }) => {
    const [ errorLogin, setErrorLogin ] = useState('');

    function handleLogin() {
        const email = document.getElementById("email-login");
        const password = document.getElementById("password-login");
        if (!email.value || !password.value) {
            setErrorLogin('Username and password must be provided!');
            return;
        }
        let login = {};
        login.email = email.value;
        login.password = password.value;
        console.log(login);
        userAuth(true);
    }
    
    function handleReg() {
        showReg(true);
    }

    return (
        <div className='login-container'>
            <h1 className='login-header'>Sign In</h1>
            <form>
                <p>{errorLogin}</p>
                <input type="text" name="username" className='login-input' id="email-login" placeholder='Email Address'></input><br></br>
                <input type="password" name="password" className='login-input' id="password-login" placeholder='Password'></input><br></br>
            </form>
            <div className='login-button-container'>
                <button className='login-button' onClick={handleLogin}>Sign In</button>
                <button className='login-button' onClick={handleReg}>Register</button>
            </div>
            <span class = 'or-sign-in'>or sign in using a service</span>
        </div>
    );
  };
  
  export default LoginPage;