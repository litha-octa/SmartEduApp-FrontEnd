import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/profile.css";
import HeaderProf from "../component/HeaderProf";
import SideForProf from "../component/SideForProf";

class Profile extends Component {
  render() {
    return (
      <div>
        <HeaderProf />
        <SideForProf/>
        <article className="article-2">
          <h4>  Profile Settings </h4><br />
          <div id="text">
            <img src="assets/Phone Icon.png" id="menu-profile" alt=" " />
            Phone Numbers
        </div>
          <div id="text">
            <img src="assets/arrow.png" id="icon" alt=" " /><br />
            <img src="assets/PIN Icon.png" id="menu-profile" alt=" " />
              Change Password
        </div>
          <div id="text">
            <img src="assets/arrow.png" id="icon" alt=" " /><br />
            <img src="assets/Chats Icon.png" id="menu-profile" alt=" " />
              Chat Settings
        </div>
          <div id="text">
            <img src="assets/arrow.png" id="icon" alt=" " /><br />
            <img src="assets/Notif Icon1.png" id="menu-profile" alt=" " />
                Push Notifications
        </div>
          <div id="text">
            <img src="assets/arrow.png" id="icon" alt=" " /><br />
            <img src="assets/Security Icon.png" id="menu-profile" alt=" " />
                  Privacy and Security
          </div>
          <div id="text">
            <img src="assets/arrow.png" id="icon" alt=" " /><br />
            <img src="assets/Storage Icon.png" id="menu-profile" alt=" " />
                  Data and Storage
                        <img src="assets/arrow.png" id="icon" alt=" " /><br />
          </div>
        </article>
      </div>
    );
  }
}


export default Profile;
