import React, { useState, useEffect } from 'react';
import '../../styles/Login.css';


const RegisterPage = ({ showReg }) => {
    const [ errorText, setErrorText ] = useState('');

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    async function handleRegister() {
        try{
            const name = document.getElementById("name-register")
            const password = document.getElementById("password-register");
            const pwd = document.getElementById("password-verify");
            const email = document.getElementById("email-register");
            const testedEmail = isValidEmail(email.value);
            if (!name.value || !password.value || !pwd.value || !email.value) {
                setErrorText('Please fill out all fields before submitting');
                return;
            } else if (password.value !== pwd.value) {
                setErrorText('Passwords must match');
                return;
            } else if (!testedEmail) {
                setErrorText('Invalid email');
                return;
            }
            let registerVals = {};
            registerVals.name = name.value;
            registerVals.password = password.value;
            registerVals.email = email.value;
            registerVals.admin = true;
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerVals),
            })
            const register = response.json();
            // console.log(register);
            if (response.status === 409) {
                setErrorText('Email already exists.')
                return;
            } else if (response.status === 500) {
                setErrorText('Internal Error');
                return;
            } else if (response.status === 201) {
                alert('Account successfully registered!');
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
        <div className='login-container'>
            <h1 className='register-header'>Register now for access to Galvanize's Instructor Hub</h1>
            <form>
                <h3 className='error-text'>{errorText}</h3>
                <label for="nameReg">First and Last Name:</label><br></br>
                <input type="text" name="nameReg" className='login-input' id="name-register"></input><br></br>
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