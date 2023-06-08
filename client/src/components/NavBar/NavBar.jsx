import React, { useContext } from "react";
import "../../styles/NavBar.css";
import GalvanizeLogo from "../../styles/svgs/galvanize.svg";
import GalvanizeTextLogo from "../../styles/svgs/galvanize-text-logo.svg";
import CohortContext from "../Context/CohortContext";
import Dropdown from "./Dropdown";
import { useSignOut } from "react-auth-kit";

const NavBar = ({ logout }) => {
  const { setBodyDisplay } = useContext(CohortContext);
  const signOut = useSignOut();

  const handleLogout = () => {
    signOut();
    logout();
  };

  return (
    <div id="navbar">
      <img id="galvanize-logo" src={GalvanizeLogo} alt="galvanize logo" />
      <img
        id="galvanize-text-logo"
        src={GalvanizeTextLogo}
        alt="galvanize text logo"
      />

      <p id="navbar-title" data-testid="title">
        Instructor Hub
      </p>

      <button onClick={() => setBodyDisplay("body")}>Dashboard</button>
      <button onClick={() => setBodyDisplay("project")}>Projects</button>
      <button onClick={handleLogout}>Sign out</button>

      <Dropdown />
    </div>
  );
};

export default NavBar;
