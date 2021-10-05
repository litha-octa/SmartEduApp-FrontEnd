import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { connect } from "react-redux";
// import { getUserReducer } from "../redux/Reducers/login";
import { getUser } from "../redux/ActionCreators/login";

function SideForDash(props){
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
                    {/* {localStorage.name} */}
                    {props.getUserReducer.isFulfilled
                      ? props.getUserReducer.currentUser.name
                      : null}
                    <div id="sideStatus">online</div>
                  </div>
                </Link>
              </div>
            </div>

            <div id="sideDash-white">
              <Link to="/Dashboard" id="SideSelected">
                <div>
                  <img
                    src="assets/Dashboard Icon2.jpg"
                    alt="dashboard-icon"
                    id="SideIcon"
                  />
                  Dashboard
                </div>
              </Link>
            </div>

            <div id="sideDash-none">
              <Link to="Activity" id="SideMenu">
                <div>
                  <img
                    src="assets/Activity Icon.png"
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

const ConnectedSideForDash = connect(
  mapStateToProps,
)(SideForDash);
export default ConnectedSideForDash;