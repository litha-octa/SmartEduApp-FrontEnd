import React, { Component } from "react";
import "./css/dashboard.css";
import {Link} from "react-router-dom";
import HeaderDash from "./HeaderDash";
import App from "./App";

class Dashboard2 extends Component {
 render() {
    return (
<div>

<HeaderDash/>

	<div className="grid-container">
	<div className="grid-item" id="grid1">
        <div id="dash-aside-col">
                  <div id="popup-notif"><App/></div><br/>
                   <Link to="/profile">
                    <img src="assets/profile.png" id="dash-mini-profile"/></Link><br/>
                  <p className="name-profile">Emir Kharisma</p>
                  <p className="status">online</p>
              </div>
          <div id="dash-aside-col2">
           <img src="assets/Dashboard Icon.jpg" className="dash-aside-icon"/>
              <label id="menu-profile-selected">Dashboard
            </label><br/>
        </div>
  </div>
 	<div className="grid-item" id="grid2">
        <box>
        	<p className="news">News</p>
        	<img src="assets/Carousel.png" id="news-pics"/>
        </box>
  	</div>
  	<div className="grid-item" id="grid3">
	    <p className="mesagges">Mesagges</p>
	    <img src="assets/Nissa Sabyan.png" className="chats"/><br/>
	    <img src="assets/Rio Dewanto.png"className="chats"/><br/>
	    <img src="assets/Group 21.png"className="chats"/><br/>
	    <img src="assets/Isyana Sarasvati.png"className="chats"/><br/>
	    <img src="assets/Tompi.png"className="chats"/><br/>
	    <img src="assets/MPC.png"className="chats"/><br/>
	    <img src="assets/Peppy.png"className="chats"/><br/>
	    <img src="assets/Sandra Dewi.png"className="chats"/><br/>
	    <img src="assets/Reza Rahadian.png"className="chats"/><br/>
	    <img src="assets/Group 23.png"className="chats"/><br/>
	    <img src="assets/Raisa.png"className="chats"/><br/>
	    <img src="assets/dr. Adrian.png"className="chats"/><br/>
	    <img src="assets/Uus.png"className="chats"/><br/>
  </div>
  <div id="button"><a href="#popup">Mesagges</a></div>
		<div id="popup">
    		<div className="window">
        <a href="#" className="close-button" title="Close">X</a>
        <div className="grid-item" id="grid3-popup">
    <p className="mesagges-popup">Mesagges</p>
    <img src="assets/Nissa Sabyan.png" className="chats-popup"/><br/>
    <img src="assets/Rio Dewanto.png"className="chats-popup"/><br/>
    <img src="assets/Group 21.png"className="chats-popup"/><br/>
    <img src="assets/Isyana Sarasvati.png"className="chats-popup"/><br/>
    <img src="assets/Tompi.png"className="chats-popup"/><br/>
    <img src="assets/MPC.png"className="chats-popup"/><br/>
    <img src="assets/Peppy.png"className="chats-popup"/><br/>
    <img src="assets/Sandra Dewi.png"className="chats-popup"/><br/>
    <img src="assets/Reza Rahadian.png"className="chats-popup"/><br/>
    <img src="assets/Group 23.png"className="chats-popup"/><br/>
    <img src="assets/Raisa.png"className="chats-popup"/><br/>
    <img src="assets/dr. Adrian.png"className="chats-popup"/><br/>
    <img src="assets/Uus.png"className="chats-popup"/><br/>
  			</div>
   		 </div>
	</div>
	<div className="grid-item" id="grid4">
              <div id="dash-aside-col3">
                    <Link to ="/Activity" id="link-menu">
                        <img src="assets/Activity Icon.png" className="dash-aside-icon"/>
                        <label id="menu-profile">Activity</label>
                    </Link><br/>
                    <Link id="link-menu">
                        <img src="assets/Help Icon.png" className="dash-aside-icon"/>
                        <label id="menu-profile">Help</label>
                    </Link><br/>
                    <Link to ="/" id="link-menu">
                        <img src="assets/Logout Icon.png" className="dash-aside-icon"/>
                        <label id="menu-profile-red">Logout</label>
                    </Link>
              </div>
  </div>
  	<div className="grid-item" id="grid5">
  	<table>
  <tr id="date">
    <td colspan="7">
       Today, October 16<img src="assets/Calendar Icon.png" className="calendar"/>
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
  <tr>
    <td colspan="7" id="time"><Link to="/Dashboard"><h5 className ="link">All Schedule</h5></Link></td>
  </tr>
  <tr>
    <td colspan="7" id ="time"><h5>For You</h5></td>
  </tr>
  <tr>
    <td colspan="7" id ="time"><img src="assets/8.00.png" id="img"/></td>
  </tr>
  <tr>
    <td colspan="7" id ="time"><img src="assets/d2fc.png" id="task1-pic"/></td>
  </tr>
  <tr>
    <td colspan="7" id ="time"><img src="assets/11.00.png" id="img"/></td>
  </tr>
  <tr>
    <td colspan="7" id ="time"><img src="assets/d2sc.png" id="task1-pic"/></td>
  </tr>
   <tr>
    <td colspan="7" id ="time"><img src="assets/finish.png" id="img"/></td>
  </tr>
</table>
	</div>
</div>

</div>
    );
  }
}
 

export default Dashboard2;
