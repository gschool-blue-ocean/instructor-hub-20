import React, {useState} from 'react'
import NavBar from './NavBar/NavBar';
import Body from './Body/Body';
import Footer from './Footer/Footer';

const HomePage = ({logout}) => {

  return (
    <>
    <NavBar logout={logout}/>
    <Body />
    <Footer />
    </>
  )
}

export default HomePage