import React, { Component } from "react";
import {Route, Link, HashRouter } from "react-router-dom";
import "./css/sideactivity.css";

class SideActivity extends Component {
 render() {
    return (
<aside>
  <div id="asideact">
                  <img src="assets/Notif Icon2.png" id="notif"/><br/>
                  <img src="assets/profile.png" id="mini-profile"/><br/>
                  <div id="side-name-profile">Emir Kharisma
                  <div id="SideActstatus">online</div></div>

                    <Link to ="/Dashboard"  id="SideAct-profilemenu">
                        <img src="assets/Dashboard Icon.png" id="SideActIcon"/>
                            Dashboard
                    </Link><br/>
  </div>

<div id="asideact2">
                <Link to="/Activity" id="SideAct-profileSelect">             
                  <img src="assets/Activity Icon2.png" id="SideActIcon"/>
                            Activity
                </Link><br/>
</div>

<div id="asideact">
              <img src="assets/Help Icon.png" id="SideActIcon"/>
                 <label id="SideAct-profilemenu">Help</label><br/>

          <Link to ="/"  id="SideAct-profilemenu2">          
              <img src="assets/Logout Icon.png" id="SideActIcon"/>
                           Logout</Link><br/>
          <div id="blank"></div>

</div>
</aside>

    );}}
   export default SideActivity;