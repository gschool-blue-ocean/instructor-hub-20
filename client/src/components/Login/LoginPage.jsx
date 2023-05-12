import React, { useState, useEffect, useContext } from 'react';
import '../../styles/Login.css';


const LoginPage = ({ showReg, userAuth }) => {

    function handleLogin() {
        const username = document.getElementById("username-login");
        const password = document.getElementById("password-login");
        let login = {};
        login.username = username.value;
        login.password = password.value;
        console.log(login);
        userAuth(true);
    }
    
    function handleReg() {
        showReg(true);
    }

    return (
        <div>
            <form>
                <label for="username">User Name:</label><br></br>
                <input type="text" name="username" className='login-input' id="username-login"></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="password" name="password" className='login-input' id="password-login"></input><br></br>
            </form>
            <div>
                <button onClick={handleLogin}>Log In</button>
                <button onClick={handleReg}>Register</button>
            </div>
        </div>
    );
  };
  
  export default LoginPage;