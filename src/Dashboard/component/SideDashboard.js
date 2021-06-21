import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

class SideForDash extends Component {
    render() {
        return (
            <div className="sidebar">

                <div className="sidebarminiprofile">
                    <div id="side-MiniProf">
                        <div id="notif">notif</div>
                        <Link to="/Profile/Profile"><img src="assets/profile.png" id="sideActMiniProfile" alt=" " /><br />
                            <div id="sideActMiniName">
                                Emir Kharisma
                        <div id="sideActMiniStatus">
                                    online
                        </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div id="sideDash-white">
                    <Link to="/Dashboard" id="Sidebar-MenuSelected">
                        <div>
                            <img src="assets/Dashboard Icon2.jpg" alt="dashboard-icon" id="SidebarIcon" />
                            Dashboard
                        </div>
                    </Link>
                </div>

                <div id="sideDash-none">
                    <Link to="Activity" id="Sidebar-Menu">
                        <div>
                            <img src="assets/Activity Icon.png" alt="dashboard-icon" id="SidebarIcon" />
                               Activity
                        </div>
                    </Link>
                </div>

                <div id="sideDash-none">
                    <div id="Sidebar-Menu">
                        <img src="assets/Help Icon.png" alt="dashboard-icon" id="SidebarIcon" />
                               Help
                    </div>
                </div>

                <div id="sideDash-none">
                    <Link to="/" id="Sidebar-MenuLogout">
                        <div>
                            <img src="assets/Logout Icon.png" alt="dashboard-icon" id="SidebarIcon" />
                                Logout
                        </div>
                    </Link>
                </div>

            </div>
        );
    }
}
export default SideForDash;