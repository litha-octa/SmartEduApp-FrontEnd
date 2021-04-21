import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/SidebarProf.css";
import App from "../Modal/App";

class SideForDash extends Component {
    render() {
        return (
            <div className="sidebarProf">

                <div id="side-MiniProf">
                    <div id="notif"><App /></div>
                    <Link to ="/Profile/Profile"><img src="assets/profile.png" id="sideActMiniProfile" alt=" " /><br />
                        <div id="sideActMiniName2">
                            Emir Kharisma
                        <div id="sideActMiniStatus2">
                                online
                        </div>
                        </div>
                    </Link>
                </div>
                
                

                 <div className="sidebarProf2">
                <div id="sideDash-none">
                    <Link to="/Dashboard/dashAllSchedule" id="Sidebar-Menu">
                        <div>
                            <img src="assets/Dashboard Icon.png" alt="dashboard-icon" id="SideActIcon" />
                            Dashboard
                        </div>
                    </Link>
                </div>

                <div id="sideDash-none">
                    <Link to="/ActivityStudent/addNewClass" id="Sidebar-Menu">
                        <div>
                            <img src="assets/Activity Icon.png" alt="dashboard-icon" id="SideActIcon" />
                               Activity
                        </div>
                    </Link>
                </div>
                
                <div id="sideDash-none">
                    <div id="Sidebar-Menu">
                        <img src="assets/Help Icon.png" alt="dashboard-icon" id="SideActIcon" />
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
            </div>
        );
    }
}
export default SideForDash;