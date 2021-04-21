import React, { Component } from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import HeaderDash from "../component/HeaderDash";
import SideForDash from "../component/SideForDash";


class DashboardFas extends Component {
  render() {
    return (
      <div id="body-dash">
        <HeaderDash />
        <SideForDash/>
        <div className="container-dash">
          
          <div className="contentdash1">
            <div className="grid-item" id="dashnews">
              <box>
                <p className="dash-news">News</p>
                <img src="assets/Carousel.png" className="dash-news-pics" alt=" " />
              </box>
            </div>
            <div className="grid-item" id="schedule">
              <table className="table-schedule">
                <tr id="date">
                  <td colspan="7">
                    My Class <br /> October 16<img src="assets/Calendar Icon.png" className="calendar" alt=" " />
                  </td>
                </tr>
                <tr>
                  <td><div id="date-day">Mo<br />12</div></td>
                  <td><div id="date-day">Tu<br />13</div></td>
                  <td><div id="date-day">We<br />14</div></td>
                  <td><div id="date-day">Th<br />15</div></td>
                  <td><div id="select">Fr<br />16</div></td>
                  <td><div id="date-day">Sa<br />17</div></td>
                  <td><div id="date-day">Su<br />18</div></td>
                </tr>
                <tr>
                  <td colspan="7">&nbsp;</td></tr>
                <tr id="fas-task">
                  <td colspan="2">08.00 - 09.40</td>
                  <td colspan="3">Front-end fundamentals</td>
                  <td colspan="2">24<img src="assets/Student Icon.png" alt=" " /></td>
                </tr>
                <tr id="fas-task">
                  <td colspan="2">11.00 - 11.40</td>
                  <td colspan="3">HTML for Beginners</td>
                  <td colspan="2">32<img src="assets/Student Icon.png" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7">
                    <div align="center">
                      <Link to="/ActivityFas/CreateNewClassdummy" id="fas-new-task">
                        <img src="assets/Plus Icon.png" id="plus-icon" alt=" " />
                New Task
            </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="contentdash2">
            <div className="grid-item" id="grid3">
              <p className="mesagges">Mesagges</p>
              <div id="search-bar">
                <img src="assets/Search Icon.png" id="search-icon" alt=" " />
                <input type="text" placeholder="search" id="search-in-chats" />
              </div>
              <img src="assets/Nissa Sabyan.png" className="chats" alt=" " /><br />
              <img src="assets/Rio Dewanto.png" className="chats" alt=" " /><br />
              <img src="assets/Group 21.png" className="chats" alt=" " /><br />
              <img src="assets/Isyana Sarasvati.png" className="chats" alt=" " /><br />
              <img src="assets/Tompi.png" className="chats" alt=" " /><br />
              <img src="assets/MPC.png" className="chats" alt=" " /><br />
              <img src="assets/Peppy.png" className="chats" alt=" " /><br />
              <img src="assets/Sandra Dewi.png" className="chats" alt=" " /><br />
              <img src="assets/Reza Rahadian.png" className="chats" alt=" " /><br />
              <img src="assets/Group 23.png" className="chats" alt=" " /><br />
              <img src="assets/Raisa.png" className="chats" alt=" " /><br />
              <img src="assets/dr. Adrian.png" className="chats" alt=" " /><br />
              <img src="assets/Uus.png" className="chats" alt=" " /><br />

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default DashboardFas;
