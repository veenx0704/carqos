import React from "react";
import "./Homepage.css";
import TopMenu from "./TopMenu"; 
import { Link } from "react-router-dom";

const Homepage = () =>{

return (
    <div className="homepage">
      <h1>Welcome to Carqos</h1>
      <div className="menu">
        <TopMenu/>
      </div>
      
    </div>
  );
};

export default Homepage;