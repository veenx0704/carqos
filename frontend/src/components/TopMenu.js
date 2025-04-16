import React from "react";
import "./TopMenu.module.css";
import styles from "./TopMenu.module.css";



const TopMenu = () =>{

    return (
        <div className={styles["Main-Menu-bar"]}>
          
          <div className={styles["Company-Logo"]}>
            <h1>Company Logo</h1>            
          </div>
          <div className={styles["Homepage-link"]}>
            <h5>Home</h5>
            <h5>Submit Quotes</h5>
            <h5>Select Car</h5>
          </div>
          
        </div>
      );
    };
    
    export default TopMenu;