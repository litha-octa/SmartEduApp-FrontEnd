import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../css/sideactivity.css";
import App from "../Modal/App";

class SideActivity extends Component {
 render() {
    return (
      <div className="aside">
  <div id="asidedash">
                  
                  <div><App/></div>
                     <img src="assets/profile.png" id="mini-profile" alt=" "/><br/>
                  <div id="side-name-profile">
                      Emir Kharisma
                  <div id="SideActstatus">online</div></div>
                  
                 <Link to ="/Dashboard" id="SideAct-profilemenu-dash">
                       <div> <img src="assets/Dashboard Icon.png" alt="dashboard-icon" id="SideActIcon"/>
                            Dashboard </div></Link> <br/>
  </div>
<div id="asidedash2">
                   <Link to="/Activity" id="SideAct-profileSelect">             
                  <img src="assets/Activity Icon2.png" alt="activity-icon" id="SideActIcon"/>
                            Activity
                </Link><br/>       
</div>

<div id="asidedash">
            
                <Link id="SideAct-profilemenu-dash">
              <img src="assets/Help Icon.png" alt="help-icon" id="SideActIcon"/>
                Help </Link><br/>

          <Link to ="/"  id="SideAct-profilemenu2">          
              <img src="assets/Logout Icon.png" alt="logout-icon" id="SideActIcon"/>
                           Logout</Link><br/>
          <div id="blank"></div>

</div></div>
    );}}
   export default SideActivity;