import React, { Component } from "react";
import "./css/HeaderDash.css";
import { NavLink} from "react-router-dom";

const HeaderDash = function(){

    return (
    	<HashRouter>
        <div className="headerDash">
          <h1 className="title">SmartEduApp!</h1>
   
            <div id="line-menu">
            <NavLink to="/Dashboard" id="header-selected">Dashboard</NavLink>

            <NavLink to="/Notification" id="header-menu">Notification</NavLink>

            <NavLink to="/Activity" id="header-menu">Activity</NavLink>

            <NavLink to="/" id="header-menu">Logout</NavLink>

            <NavLink to="/Profile" id="header-menu">

            <img src="/assets/profile.png" id="header-icon" alt=" "/></NavLink>
            </div>
        </div>
</HashRouter>
);
} 
export default HeaderDash;