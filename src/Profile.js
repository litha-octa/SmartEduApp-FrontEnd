import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./css/profile.css";
import HeaderProf from "./HeaderProf";

class Profile extends Component {
  render() {
    return (
<div>
<HeaderProf/>
<aside>
  <div className="asideprofile1">
                  <img src="assets/Notif Icon2.png" id="notif" alt=" "/><br/>
                  <img src="assets/profile.png" id="mini-profile" alt=" "/><br/>
                  <div id="side-name-profile">Emir Kharisma
                  <div id="status">online</div></div>
  </div>
<div class="asideprofile2">
              <Link to ="/Dashboard"  id="profile-icon">
                <img src="assets/Dashboard Icon.png" alt=" "/>
                            Dashboard</Link><br/>

                <Link to="/Activity"  id="profile-icon">             
                <img src="assets/Activity Icon.png" alt=" "/>
                            Activity</Link><br/>
                <img src="assets/Help Icon.png" alt=" "/>
                           <label id="profile-icon">Help</label><br/>

                 <Link to ="/"  id="profile-icon2">          
                <img src="assets/Logout Icon.png" alt=" "/>
                           Logout</Link><br/>
</div>
</aside>
<article id="articleprof">  
          <img src="assets/gunung2.jpg" id="section-bg" alt=" "/>
<section> 
        <img src="assets/profile.png" id="profile" alt=" "/>
        <img src="assets/editicon.png" id="edit-icon" alt=" "/>
        <div id="name-profile">Emir Kharisma</div>
</section>
</article>
<article className="article-2">
<h4>  Profile Settings </h4><br/>
        <div id="text">
          <img src="assets/Phone Icon.png" id="menu-profile" alt=" "/>
            Phone Numbers
        </div>
        <div id="text">
              <img src="assets/arrow.png" id="icon" alt=" "/><br/>
        <img src="assets/PIN Icon.png" id="menu-profile" alt=" "/>
              Change Password
        </div>
        <div id="text">
                <img src="assets/arrow.png" id="icon" alt=" "/><br/>
              <img src="assets/Chats Icon.png" id="menu-profile" alt=" "/>
              Chat Settings
        </div>
        <div id="text">
                  <img src="assets/arrow.png" id="icon" alt=" "/><br/>
                <img src="assets/Notif Icon1.png" id="menu-profile" alt=" "/>
                Push Notifications
        </div>
        <div id="text">
                    <img src="assets/arrow.png" id="icon" alt=" "/><br/>
        <img src="assets/Security Icon.png" id="menu-profile" alt=" "/>
                  Privacy and Security
          </div>
          <div id="text">
                      <img src="assets/arrow.png" id="icon" alt=" "/><br/>
        <img src="assets/Storage Icon.png" id="menu-profile" alt=" "/>
                  Data and Storage
                        <img src="assets/arrow.png" id="icon" alt=" "/><br/>
        </div>
    </article>
</div>
    );
  }
}
 

export default Profile;
