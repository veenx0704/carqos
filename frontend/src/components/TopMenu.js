import React from "react";
import "./TopMenu.css";



const TopMenu = () =>{

    return (
        <div className="Main-Menu-bar">
          
          <div className="Company-Logo">
            <h1>Company Logo</h1>            
          </div>
          <div className="Homepage-link">
            <h5>Home</h5>
            <h5>Submit Quotes</h5>
            <h5>Select Car</h5>
          </div>
          
        </div>
      );
    };
    
    export default TopMenu;