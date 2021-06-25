import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import HeaderProf from "../component/HeaderProf";
import SideForProf from "../component/SideForProf";
import {Card} from "react-bootstrap";

function Profile(){
    return (
      <div className="bodyProfile">
       <SideForProf/>
       < HeaderProf/>
        <div className="containerProfile">
          <div>
            <img src="assets/gunung2.jpg" id="profile-bg"/>
            <div id="profile-bg-layer2">
              <img src="assets/member.png" id="profile"/>
              <img src="assets/editicon.png" id="edit-icon"/>
              <div id="name-profile">emir</div>
            </div>
          </div>
          <div className="profileSett"> Profile Settings </div>

          <Card body className="card"
          id="text">
            <img src="assets/Phone Icon.png" id="menu-profile" alt=" " />
            Phone Numbers
            <img src="assets/arrow.png" id="icon" alt=" " />
          </Card>
          <Card body id="text">
            <img src="assets/PIN Icon.png" id="menu-profile" alt=" " />
            Change Password
            <img src="assets/arrow.png" id="icon" alt=" " />
          </Card>
          <Card body id="text">
            <img src="assets/arrow.png" id="icon" alt=" " />
            <img src="assets/Chats Icon.png" id="menu-profile" alt=" " />
            Chat Settings
          </Card>
          <Card body id="text">
            <img src="assets/Notif Icon1.png" id="menu-profile" alt=" " />
            Push Notifications
            <img src="assets/arrow.png" id="icon" alt=" " />
          </Card>
          <Card body id="text">
            <img src="assets/Security Icon.png" id="menu-profile" alt=" " />
            Privacy and Security
            <img src="assets/arrow.png" id="icon" alt=" " />
          </Card>
          <Card body id="text">
            <img src="assets/Storage Icon.png" id="menu-profile" alt=" " />
            Data and Storage
            <img src="assets/arrow.png" id="icon" alt=" " />
            </Card>
        </div>
      </div>
    );
  }


export default Profile;
