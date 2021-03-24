import React, { Component } from "react";
import { Route, Link, HashRouter, NavDropdown } from "react-router-dom";
import "./css/profile.css";
import HeaderProf from "./HeaderProf";

class Profile extends Component {
  render() {
    return (
<div>
<HeaderProf/>
<aside>
  <div className="asideprofile1">
                  <img src="assets/Notif Icon2.png" id="notif"/><br/>
                  <img src="assets/profile.png" id="mini-profile"/><br/>
                  <div id="side-name-profile">Emir Kharisma
                  <div id="status">online</div></div>
  </div>
<div class="asideprofile2">
              <Link to ="/Dashboard"  id="profile-icon">
                <img src="assets/Dashboard Icon.png"/>
                            Dashboard</Link><br/>

                <Link to="/Activity"  id="profile-icon">             
                <img src="assets/Activity Icon.png"/>
                            Activity</Link><br/>
                <img src="assets/Help Icon.png"/>
                           <label id="profile-icon">Help</label><br/>

                 <Link to ="/"  id="profile-icon2">          
                <img src="assets/Logout Icon.png"/>
                           Logout</Link><br/>
</div>
</aside>
<article id="articleprof">  
          <img src="assets/gunung2.jpg" id="section-bg"/>
<section> 
        <img src="assets/profile.png" id="profile"/>
        <img src="assets/editicon.png" id="edit-icon"/>
        <div id="name-profile">Emir Kharisma</div>
</section>
</article>
<article className="article-2">
<h4>  Profile Settings </h4><br/>
        <div id="text">
          <img src="assets/Phone Icon.png" id="menu-profile"/>
            Phone Numbers
        </div>
        <div id="text">
              <img src="assets/arrow.png" id="icon"/><br/>
        <img src="assets/PIN Icon.png" id="menu-profile"/>
              Change Password
        </div>
        <div id="text">
                <img src="assets/arrow.png" id="icon"/><br/>
              <img src="assets/Chats Icon.png" id="menu-profile"/>
              Chat Settings
        </div>
        <div id="text">
                  <img src="assets/arrow.png" id="icon"/><br/>
                <img src="assets/Notif Icon1.png" id="menu-profile"/>
                Push Notifications
        </div>
        <div id="text">
                    <img src="assets/arrow.png" id="icon"/><br/>
        <img src="assets/Security Icon.png" id="menu-profile"/>
                  Privacy and Security
          </div>
          <div id="text">
                      <img src="assets/arrow.png" id="icon"/><br/>
        <img src="assets/Storage Icon.png" id="menu-profile"/>
                  Data and Storage
                        <img src="assets/arrow.png" id="icon"/><br/>
        </div>
    </article>
</div>
    );
  }
}
 

export default Profile;
