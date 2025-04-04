import React from "react";
import "./Homepage.module.css";
import TopMenu from "./TopMenu"; 
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () =>{

return (
    <div className={styles["homepage"]}>
    
      <div className={styles["menu"]}>
        <TopMenu/>
      </div>
      
    </div>
  );
};

export default Homepage;