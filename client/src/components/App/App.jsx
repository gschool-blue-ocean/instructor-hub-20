import React, { useState, Component } from 'react';
import '../../styles/App.css';
import NavBar from '../NavBar/NavBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Login from '../Login/Login.jsx';
import { CohortProvider } from '../Context/CohortContext.jsx';



const App = () => {
  const [ userAuth, setUserAuth ] = useState(false);

  return (
    <div id='App'>
      {!userAuth ? <Login userAuth={setUserAuth} /> :
      <CohortProvider>
        <NavBar></NavBar>
        <Body></Body>
        <Footer></Footer>
      </CohortProvider>
      }
    </div>
  );
};

export default App;
