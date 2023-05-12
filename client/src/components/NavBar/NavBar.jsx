import React, { useContext } from "react";
import "../../styles/NavBar.css";
import GalvanizeLogo from "../../styles/svgs/galvanize.svg";
import GalvanizeTextLogo from "../../styles/svgs/galvanize-text-logo.svg";
import CohortContext from "../Context/CohortContext";

const NavBar = () => {

  const { cohort, setCohort } = useContext(CohortContext);
  const [cohorts, setCohorts] = useState([]);
  // const [bodyDisplay, setBodyDisplay] = useContext(CohortContext);

  const onProjectsHandle = () => {
    setBodyDisplay('project');
  };

  const onDashboardHandle = () => {
    setBodyDisplay('body');
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

      |<button onClick={onDashboardHandle}>Dashboard</button>|
      <button onClick={onProjectsHandle}>Projects</button>|
      <Dropdown />


      <button onClick={() => setBodyDisplay("body")}>Dashboard</button>
      <button onClick={() => setBodyDisplay("project")}>Projects</button>
      <button>Select Cohort Dropdown</button>
    </div>
  );
};

export default NavBar;