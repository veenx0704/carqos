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

      
    {/*Popular Searches */}
      <div className={styles["popular-search"]}>
        Popular Searches
      </div >
      

      <div className={styles["popular-search-details"]}>

      

        {/*This is the 1st option */}
        <div className={styles["popular-search-1"]}>
          <div className={styles["popular-search-car-name"]}>
          Silverado 2500 HD
          </div>

          <div className={styles["popular-search-make-year"]}>
            <div className={styles["popular-search-make"]}>
            Chevrolet
            </div>
            <div className={styles["popular-search-year"]}>
            2024
            </div>
            </div>

            <div className={styles["popular-search-issue-list"]}>
            <span className={styles.underlined}>Brake Pad</span>
            <span className={styles.underlined}>Battery</span>
            <span className={styles.underlined}>Transmission</span>
           
            </div>

        </div>

        {/*This is the 2nd option */}
        <div className={styles["popular-search-2"]}>
            <div className={styles["popular-search-car-name"]}>
              Silverado EV
            </div>
            <div className={styles["popular-search-make-year"]}>
            <div className={styles["popular-search-make"]}>
            Chevrolet
            </div>
            <div className={styles["popular-search-year"]}>
            2024
            </div>
            </div>

            <div className={styles["popular-search-issue-list"]}>
            <span className={styles.underlined}>Sway Bar</span> 
            <span className={styles.underlined}>Exhaust System</span>
            <span className={styles.underlined}>Suspension</span>
            </div>
          
        </div>

        {/*This is the 3rd option */}
        <div className={styles["popular-search-3"]}>
            <div className={styles["popular-search-car-name"]}>
            Camry SE
            </div>

            <div className={styles["popular-search-make-year"]}>
            <div className={styles["popular-search-make"]}>
            Toyota
            </div>
            <div className={styles["popular-search-year"]}>
            2024
            </div>
            </div>

            <div className={styles["popular-search-issue-list"]}>
            <span className={styles.underlined}>Oil Change</span>
            <span className={styles.underlined}>Timing Belt</span>
            <span className={styles.underlined}>Air Condition</span>
            </div>
          
        </div>

        {/*This is the 4th option */}
        <div className={styles["popular-search-4"]}>
            <div className={styles["popular-search-car-name"]}>
              Equinox
            </div>
            <div className={styles["popular-search-make-year"]}>
            <div className={styles["popular-search-make"]}>
            Chevrolet
            </div>
            <div className={styles["popular-search-year"]}>
            2024
            </div>
            </div>

            <div className={styles["popular-search-issue-list"]}>
            <span className={styles.underlined}>Brake Pad</span>
            <span className={styles.underlined}>Battery</span>
            <span className={styles.underlined}>Transmission</span>
            </div>
          
        </div>


        {/* This is the 5th option*/}
        <div className={styles["popular-search-5"]}>
            <div className={styles["popular-search-car-name"]}>
            Trailblazer
            </div>

            <div className={styles["popular-search-make-year"]}>
            <div className={styles["popular-search-make"]}>
            Chevrolet
            </div>
            <div className={styles["popular-search-year"]}>
            2024
            </div>
            </div>

            <div className={styles["popular-search-issue-list"]}>
            <span className={styles.underlined}>Sway Bar</span>
            <span className={styles.underlined}>Exhaust System</span>
            <span className={styles.underlined}>Suspension</span>
            </div>
          
        </div>

        {/*This is the 6th option */}
        <div className={styles["popular-search-6"]}>
            <div className={styles["popular-search-car-name"]}>
            Corolla
            </div>

            <div className={styles["popular-search-make-year"]}>
            <div className={styles["popular-search-make"]}>
              Toyota

            </div>
            <div className={styles["popular-search-year"]}>
            2024
            </div>
            </div>

            <div className={styles["popular-search-issue-list"]}>
            <span className={styles.underlined}>Oil Change </span>
            <span className={styles.underlined}>Timing Belt </span>
            <span className={styles.underlined}>Air Condition</span>
            </div>
          
        </div>
        

      </div>
      
      {/*Additional Search Feature */}

      <div className={styles.rightSquare}>
        <div className={styles.selectCarText}>Select Car: </div>
        <div className={styles.carDetailsRow2}>
            <div className={styles.selectCarYear}>2009</div>
            <div className={styles.selectCarMake}>Toyota</div>
            <div className={styles.selectCarModel}>Camry</div>
            <div className={styles.selectCarEngineSizeAndTrim}>2.4 LE</div>

        </div>
        <div className={styles.repairmentsForText}>What repair do you need a quote for? </div>
        < div className={styles.repairmentRow}>
            <div className={styles.repairmentForDescription}>AC Filter, Only cold when driving </div>
            <button className={styles.repairmentSearchButton}>Search</button>
        </div>




    </div>


    <div className={styles["advertisement-area"]}>

    <div className={styles["advertisement-1"]}>
      Advertisement
    </div>

    </div>


      

      
    </div>
    
  );
};

export default Homepage;