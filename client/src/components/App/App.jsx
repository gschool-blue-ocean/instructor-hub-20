import React, { Component, useState } from 'react';
import Login from '../Login/Login';
import '../../styles/App.css';
import NavBar from '../NavBar/NavBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import { CohortProvider } from '../Context/CohortContext.jsx';



const App = () => {
  const [ userAuth, setUserAuth ] = useState(true);

  return (
    <div id='App'>
      {!userAuth ? <Login /> :
      <CohortProvider>
        <NavBar></NavBar>
        <Body></Body>
        <Footer></Footer>
      </CohortProvider>}
    </div>
  );
};

export default App;
