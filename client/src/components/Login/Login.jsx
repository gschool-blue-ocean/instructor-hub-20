import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import '../../styles/Login.css';


const Login = ({ userAuth }) => {
  const [ showReg, setShowReg ] = useState(false)
    
    return (
      <div>
        {showReg ? <RegisterPage showReg={setShowReg} /> : <LoginPage showReg={setShowReg} userAuth={userAuth} />}
      </div>
    );
  };
  
  export default Login;