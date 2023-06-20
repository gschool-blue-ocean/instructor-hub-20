import React, { useState } from "react";
import NavBar from "./Body/MenuBar/MenuBar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const HomePage = ({ logout }) => {
  return (
    <>
      <Body logout={logout} />
      <Footer />
    </>
  );
};

export default HomePage;
