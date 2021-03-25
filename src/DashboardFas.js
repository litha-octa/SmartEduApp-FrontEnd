import React, { Component } from "react";
import "./css/dashboard.css";
import { Link} from "react-router-dom";
import HeaderDash from "./HeaderDash";
import App from "./App";

class DashboardFas extends Component {
 render() {
    return (
<div>
  <HeaderDash/>
	<div className="grid-container">
	<div className="grid-item" id="grid1">
        <div id="dash-aside-col">
                  <div id="popup-notif"><App/></div><br/>
                   <Link to="/profile">
                    <img src="assets/profile.png" id="dash-mini-profile" alt=" "/></Link><br/>
                  <p className="name-profile">Emir Kharisma</p>
                  <p className="status">online</p>
              </div>
          <div id="dash-aside-col2">
           <img src="assets/Dashboard Icon.jpg" alt=" " className="dash-aside-icon"/>
              <label id="menu-profile-selected">Dashboard
            </label><br/>
        </div>
  </div>
 	<div className="grid-item" id="grid2">
        <box>
        	<p className="news">News</p>
        	<img src="assets/Carousel.png" alt=" " id="news-pics"/>
        </box>
  	</div>
  	<div className="grid-item" id="grid3">
	    <p className="mesagges">Mesagges</p>
	    <img src="assets/Nissa Sabyan.png" alt=" " className="chats"/><br/>
	    <img src="assets/Rio Dewanto.png"className="chats" alt=" "/><br/>
	    <img src="assets/Group 21.png"className="chats" alt=" "/><br/>
	    <img src="assets/Isyana Sarasvati.png"className="chats" alt=" "/><br/>
	    <img src="assets/Tompi.png"className="chats" alt=" "/><br/>
	    <img src="assets/MPC.png"className="chats" alt=" "/><br/>
	    <img src="assets/Peppy.png"className="chats" alt=" "/><br/>
	    <img src="assets/Sandra Dewi.png"className="chats" alt=" "/><br/>
	    <img src="assets/Reza Rahadian.png"className="chats" alt=" "/><br/>
	    <img src="assets/Group 23.png"className="chats" alt=" "/><br/>
	    <img src="assets/Raisa.png"className="chats" alt=" "/><br/>
	    <img src="assets/dr. Adrian.png"className="chats" alt=" "/><br/>
	    <img src="assets/Uus.png"className="chats" alt=" "/><br/>
	</div>
	<div className="grid-item" id="grid4">
              <div id="dash-aside-col3">
                    <Link to ="/Activity" id="link-menu">
                        <img src="assets/Activity Icon.png" className="dash-aside-icon" alt=" "/>
                        <label id="menu-profile">Activity</label>
                    </Link><br/>
                    <Link id="link-menu">
                        <img src="assets/Help Icon.png" className="dash-aside-icon" alt=" "/>
                        <label id="menu-profile">Help</label>
                    </Link><br/>
                    <Link to ="/" id="link-menu">
                        <img src="assets/Logout Icon.png" className="dash-aside-icon" alt=" "/>
                        <label id="menu-profile-red">Logout</label>
                    </Link>
              </div>
  </div>
  	<div className="grid-item" id="grid5">
  	<table>
  <tr id="date">
    <td colspan="7">
       My Class<img src="assets/Calendar Icon.png" className="calendar" alt=" "/>
    </td>
  </tr>
  <tr id="date">
    <td colspan="7">
    October 2020
    </td>
  </tr>
  <tr>
    <td><div id="date-day">Mo<br/>12</div></td>
    <td><div id="date-day">Tu<br/>13</div></td>
    <td><div id="date-day">We<br/>14</div></td>
    <td><div id="date-day">Th<br/>15</div></td>
    <td><div id="select">Fr<br/>16</div></td>
    <td><div id="date-day">Sa<br/>17</div></td>
    <td><div id="date-day">Su<br/>18</div></td>
  </tr>
  <tr><td colspan="7">&nbsp;</td></tr>
  <tr id="fas-task">
      <td colspan="2">08.00 - 09.40</td>
      <td colspan="3">Front-end fundamentals</td>
      <td colspan="2">24<img src="assets/Student Icon.png" alt=" "/></td>
  </tr>
  <tr id="fas-task">
      <td colspan="2">11.00 - 11.40</td>
      <td colspan="3">HTML for Beginners</td>
      <td colspan="2">32<img src="assets/Student Icon.png" alt=" "/></td>
  </tr>
  <tr>
    <td colspan="7">
      <div id="fas-new-task" align="center">
        <img src="assets/Plus Icon.png" id="plus-icon" alt=" "/>
          New Task
      </div>
    </td>
  </tr>
</table>
	</div>
</div>

</div>
    );
  }
}
 

export default DashboardFas;
