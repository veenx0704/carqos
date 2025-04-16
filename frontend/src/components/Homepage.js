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
      <div className={styles["popular-search"]}>
        Popular searches
      </div >
      <div className={styles["popular-search-details"]}>
        <div className={styles["popular-search-1"]}>
          <div className={styles["popular-search-img1"]}>

          </div>

        </div>
        <div className={styles["popular-search-2"]}>
        <div className={styles["popular-search-img2"]}>
            
            </div>
            <div className={styles["popular-search-car-name"]}>

            </div>
          
        </div>
        <div className={styles["popular-search-3"]}>
        <div className={styles["popular-search-img3"]}>
            
            </div>
          
        </div>

      </div>
      

      
    </div>
  );
};

export default Homepage;