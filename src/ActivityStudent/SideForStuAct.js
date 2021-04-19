import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideForStuAct.css";
import App from "../Modal/App";

class SideForStuAct extends Component {
    render() {
        return (
            <div className="sideAct">

                <div id="sideAct-Prof">
                    <div id="notif"><App /></div>
                    <img src="assets/profile.png" id="sideActMiniProfile" alt=" " /><br />
                    <div id="sideActMiniName">
                        Emir Kharisma
                    <div id="sideActMiniStatus">
                            online
                    </div>
                    </div>
                </div>

                <div id="sideAct-Dash">
                    <Link to="/Dashboard" id="SideAct-Menu">
                        <div>
                            <img src="assets/Dashboard Icon.png" alt="dashboard-icon" id="SideActIcon" />
                            Dashboard
                    </div>
                    </Link>
                </div>

                <div id="sideAct-Act">
                    <Link to="/ActivityStudent/Dashboard" id="SideAct-MenuSelected">
                        <div>
                            <img src="assets/Activity Icon2.png" alt="dashboard-icon" id="SideActIcon" />
                               Activity
                        </div>
                    </Link>
                </div>

                <div id="sideAct-Help">
                    <div id="SideAct-Menu">
                        <img src="assets/Help Icon.png" alt="dashboard-icon" id="SideActIcon" />
                               Help
           </div>
                </div>
                <div id="sideAct-Logout">
                    <Link to="/">
                        <div id="SideAct-MenuLogout">
                            <img src="assets/Logout Icon.png" alt="dashboard-icon" id="SideActIcon" />
                                Logout
                </div>
                    </Link>
                </div>
            </div>
        );
    }
}
export default SideForStuAct;