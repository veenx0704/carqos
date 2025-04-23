import React from "react";
import "./TopMenu.module.css";
import person from "../Assets/Account_person.svg";
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
          <div className={styles["Menu-search-bar"]}>
            Search
          </div>
          <div className={styles["Account-profile"]}>
            <div className={styles["Account-person-icon"]}>
              <img src={person} alt="PersonIcon" className={styles["Account-person"]}>
              </img>
            </div>
            <div className={styles["Sign-Login"]}>
              Sign Up / Log In
            </div>
          </div>
          
        </div>
      );
    };
    
    export default TopMenu;