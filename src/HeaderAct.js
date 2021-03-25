import React, { Component } from "react";
import "./css/HeaderAct.css";
import {  NavLink , HashRouter} from "react-router-dom";

const HeaderAct = function(){

    return (
    	<HashRouter>
            <div className="headerAct">
                <h1 className="title">SmartEduApp!</h1>
   
                    <div id="line-menu">

                    <NavLink to="/Dashboard" id="header-menu">Dashboard</NavLink>

                    <NavLink to="/Notification" id="header-menu">Notification</NavLink>

                    <NavLink to="/Activity" id="header-selected">Activity</NavLink>

                    <NavLink to="/" id="header-menu">Logout</NavLink>

                    <NavLink to="./Profile"><img src="/assets/profile.png" id="header-icon" alt=" "/></NavLink>
                    </div>
            
            </div>
        </HashRouter>
);
} 
export default HeaderAct;