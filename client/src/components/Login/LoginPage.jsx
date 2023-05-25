import React, { useState, useEffect } from 'react';
import { useSignIn } from 'react-auth-kit';
import '../../styles/Login.css';

const LoginPage = ({ showReg, userAuth }) => {
  const [errorLogin, setErrorLogin] = useState('');
  const signIn = useSignIn();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleLogin() {
    try {
      const email = document.getElementById('email-login');
      const password = document.getElementById('password-login');
      const testedEmail = isValidEmail(email.value);
      if (!email.value || !password.value) {
        setErrorLogin('Username and password must be provided.');
        return;
      } else if (!testedEmail) {
        setErrorLogin('Invalid email');
        return;
      }
      let login = {};
      login.email = email.value;
      login.password = password.value;
      // console.log(login);
      const response = await fetch('https://blueocean-instructorhub.onrender.com/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });
      const loggedIn = await response.json();
      // console.log(loggedIn);
      // console.log(response);
      if (response.status === 404) {
        setErrorLogin('User email not found.');
        return;
      } else if (response.status === 409) {
        setErrorLogin('Incorrect password, please try again.');
        return;
      } else if (response.status === 200 && loggedIn.token) {
        signIn({
          token: loggedIn.token,
          expiresIn: 7200,
          tokenType: 'Bearer',
          authState: { email: loggedIn.user.email },
        });
        setErrorLogin('Login successful!');
        userAuth(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleReg() {
    showReg(true);
  }

  return (
    <div id='login-root'>
      <div className='login-container'>
        <div className='login-image-container'>
          <img
            className='login-image'
            id='logo'
            src='https://dotcom-files.s3.us-west-2.amazonaws.com/galvanize_logo_full-color_light-background.png'
            alt='logo'
          />
        </div>
        <h2 className='login-sign-in-text'>Sign In</h2>
        <div>
          <form className='sign-in-form'>
            <h3 className='error-text'>{errorLogin}</h3>
            <input
              type='email'
              name='username'
              className='login-input'
              id='email-login'
              placeholder='Email Address'
            ></input>
            <br></br>
            <input
              type='password'
              name='password'
              className='login-input'
              id='password-login'
              placeholder='Password'
            ></input>
            <br></br>
          </form>
        </div>
        <div className='login-button-container'>
          <button
            className='login-button'
            onClick={handleLogin}
          >
            Sign In
          </button>
          <button
            className='login-button'
            onClick={handleReg}
          >
            Register
          </button>
          <span className='forgetYourPW'>Forgot your password?</span>
          <br></br>
          <span className='or-sign-in-text'>or sign in using a service</span>
          <div className='login-github-container'>
            <a
              className='login-github-link'
              href='https://github.com'
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
