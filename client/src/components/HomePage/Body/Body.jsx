import React from "react";
import SideMenu from "./SideMenu/SideMenu";
import Dashboard from "./Dashboard/Dashboard";
import NavBar from "./MenuBar/MenuBar";
import styles from "./Body.module.css";
const Body = ({ logout }) => {
  return (
    <div className={styles["body"]}>
      <div className={styles["content"]}>
        <SideMenu logout={logout} />
        <NavBar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Body;
