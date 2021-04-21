import React from "react";
import "../css/Header.css";
import { NavLink, HashRouter } from "react-router-dom";

const HeaderDash = function () {

  return (
    <HashRouter>
      <div className="header">
        <h1 className="title">SmartEduApp!</h1>

        <div id="line-menu">
          <NavLink to="/Dashboard" id="header-selected">Dashboard</NavLink>

          <NavLink to="/Notification" id="header-menu">Notification</NavLink>

          <NavLink to="/ActivityStudent/addNewClass" id="header-menu">Activity</NavLink>

          <NavLink to="/" id="header-menu">Logout</NavLink>

          <NavLink to="/Profile/Profile" id="header-menu">

            <img src="/assets/profile.png" id="header-icon-dash" alt=" " /></NavLink>
        </div>
      </div>
    </HashRouter>
  );
}
export default HeaderDash;