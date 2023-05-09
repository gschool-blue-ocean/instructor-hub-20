import React, { Component } from 'react';
import '../../styles/App.css';
import NavBar from '../NavBar/NavBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';


const App = () => {
  return (
    <div id='App'>
      <NavBar></NavBar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default App;
