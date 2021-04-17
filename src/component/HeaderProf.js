import React from "react";
import "../css/HeaderProf.css";
import { NavLink, HashRouter} from "react-router-dom";

const HeaderProf = function(){

    return (
    	<HashRouter>
        <div className="header">
          <h1 className="title">SmartEduApp!</h1>
   
            <div id="line-menu">

            <NavLink to="/Dashboard" id="header-menu">Dashboard</NavLink>

            <NavLink to="/Notification" id="header-menu">Notification</NavLink>

            <NavLink to="/Activity" id="header-menu">Activity</NavLink>

            <NavLink to="/" id="header-menu">Logout</NavLink>

            <img src="/assets/profile.png" id="header-icon" alt=" "/>
            </div>
            
        </div>
</HashRouter>
);
} 
export default HeaderProf;