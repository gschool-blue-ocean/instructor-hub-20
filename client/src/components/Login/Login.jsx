import React, { useState, useEffect } from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import LoginPage from './LoginPage/LoginPage.jsx';
import RegisterPage from './RegisterPage/RegisterPage.jsx';
import './Login.css';


const Login = ({ userAuth }) => {
  const [ showReg, setShowReg ] = useState(false);
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated()) {
    userAuth(true);
  }
    
    return (
      <div>
        {showReg ? <RegisterPage showReg={setShowReg} /> : <LoginPage showReg={setShowReg} userAuth={userAuth} />}
      </div>
    );
  };
  
  export default Login;