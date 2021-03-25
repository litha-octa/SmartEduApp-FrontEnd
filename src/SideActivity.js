import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./css/sideactivity.css";

class SideActivity extends Component {
 render() {
    return (
<aside>
  <div id="asideact">
                  <img src="assets/Notif Icon2.png" id="notif" alt=" "/><br/>
                  <img src="assets/profile.png" id="mini-profile" alt=" "/><br/>
                  <div id="side-name-profile">Emir Kharisma
                  <div id="SideActstatus">online</div></div>
                  <div>
                    <Link to ="/Dashboard"  id="SideAct-profilemenu-dash">
                        <img src="assets/Dashboard Icon.png" alt="dashboard-icon" id="SideActIcon"/>
                            Dashboard
                    </Link></div><br/>
  </div>

<div id="asideact2">
                <Link to="/Activity" id="SideAct-profileSelect">             
                  <img src="assets/Activity Icon2.png" alt="activity-icon" id="SideActIcon"/>
                            Activity
                </Link><br/>
</div>

<div id="asideact">
              <img src="assets/Help Icon.png" alt="help-icon" id="SideActIcon"/>
                 <label id="SideAct-profilemenu-dash">Help</label><br/>

          <Link to ="/"  id="SideAct-profilemenu2">          
              <img src="assets/Logout Icon.png" alt="logout-icon" id="SideActIcon"/>
                           Logout</Link><br/>
          <div id="blank"></div>

</div>
</aside>

    );}}
   export default SideActivity;