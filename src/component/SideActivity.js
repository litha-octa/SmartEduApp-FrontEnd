import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SideBar.css";
import { getUser } from "../redux/ActionCreators/login";



function SideActivity(props){
        return (
          <div className="sidebar">
            <div className="sidebarminiprofile">
              <div id="side-MiniProf">
                <div id="notif">
                  <img src="assets/sideNotifIcon.png" />
                </div>
                <Link to="/Profile/Profile">
                  <img src="assets/profile.png" id="sideProfile" alt=" " />
                  <br />
                  <div id="sideName">
                    {props.getUserReducer.isFulfilled
                      ? props.getUserReducer.currentUser.name
                      : null}
                    <div id="sideStatus">online</div>
                  </div>
                </Link>
              </div>
            </div>
            <div id="sideDash-none">
              <Link to="/Dashboard" id="SideMenu">
                <div>
                  <img
                    src="assets/Dashboard Icon.png"
                    alt="dashboard-icon"
                    id="SideIcon"
                  />
                  Dashboard
                </div>
              </Link>
            </div>

            <div id="sideDash-white">
              <Link to="/Activity" id="SideSelected">
                <div>
                  <img
                    src="assets/Activity Icon2.png"
                    alt="dashboard-icon"
                    id="SideIcon"
                  />
                  Activity
                </div>
              </Link>
            </div>

            <div id="sideDash-none">
              <div id="SideMenu">
                <img
                  src="assets/Help Icon.png"
                  alt="dashboard-icon"
                  id="SideIcon"
                />
                Help
              </div>
            </div>

            <div id="sideDash-none">
              <Link to="/" id="SideMenuLogout">
                <div>
                  <img
                    src="assets/Logout Icon.png"
                    alt="dashboard-icon"
                    id="SideIcon"
                  />
                  Logout
                </div>
              </Link>
            </div>
          </div>
        );
    }

const mapStateToProps = (state) => {
  const { getUserReducer } = state;
  return {
    getUserReducer,
  };
};

const ConnectedSideActivity = connect(mapStateToProps)(SideActivity)
export default ConnectedSideActivity;
//export default SideActivity;