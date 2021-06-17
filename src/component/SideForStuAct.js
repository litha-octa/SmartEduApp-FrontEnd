import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";
import App from "../Modal/App";

class SideForStuAct extends Component {
    render() {
        return (
           <div className="sidebar">

                <div className="sidebarminiprofile">
                <div id="side-MiniProf">
                    <div id="notif"><App /></div>
                        <Link to ="/Profile/Profile">
                            <img src="assets/profile.png" id="sideActMiniProfile" alt=" " /><br />
                            <div id="sideActMiniName">
                                Emir Kharisma
                            <div id="sideActMiniStatus">
                                    online
                            </div>
                            </div>
                        </Link>
                </div>
                </div>

                <div id="sideDash-none">
                    <Link to="/Dashboard" id="Sidebar-Menu">
                        <div>
                            <img src="assets/Dashboard Icon.png" alt="dashboard-icon" id="SidebarIcon" />
                            Dashboard
                        </div>
                    </Link>
                </div>

                <div id="sideDash-white">
                    <Link to="/addNewClass" id="Sidebar-MenuSelected">
                        <div>
                            <img src="assets/Activity Icon2.png" alt="dashboard-icon" id="SidebarIcon" />
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
                    <Link to ="/" id="Sidebar-MenuLogout">
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
export default SideForStuAct;