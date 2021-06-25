import React, { Component } from "react";
import "./component/dashboard.css";
import { Link } from "react-router-dom";
import DashboardStudent from "./component/DashboardStudent";
import DashboardFas from "./component/DashboardFas";
import HeaderDash from "../component/HeaderDash";
import SideDashboard from "../component/SideDashboard";

function Dashboard() {
  return(
      <div id="body-dash">
      <HeaderDash />
      <SideDashboard />
      <div className="container-dash">
        <div className="contentdash1">
          <div className="grid-item" id="dashnews">
            <label className="dash-news">News</label>
            <img src="assets/Carousel.png" className="dash-news-pics" alt=" " />
          </div>
          <div id="dashboardContentFor">
            
            <DashboardFas/>
          </div>
        </div>

        <div className="contentdash2">
          <div className="grid-item">
            <p className="mesagges">Mesagges</p>
            <div id="search-bar">
              <img src="assets/Search Icon.png" id="search-icon" alt=" " />
              <input type="text" placeholder="search" id="search-in-chats" />
            </div>
            <img src="assets/Nissa Sabyan.png" className="chats" alt=" " />
            <br />
            <img src="assets/Rio Dewanto.png" className="chats" alt=" " />
            <br />
            <img src="assets/Group 21.png" className="chats" alt=" " />
            <br />
            <img src="assets/Isyana Sarasvati.png" className="chats" alt=" " />
            <br />
            <img src="assets/Tompi.png" className="chats" alt=" " />
            <br />
            <img src="assets/MPC.png" className="chats" alt=" " />
            <br />
            <img src="assets/Peppy.png" className="chats" alt=" " />
            <br />
            <img src="assets/Sandra Dewi.png" className="chats" alt=" " />
            <br />
            <img src="assets/Reza Rahadian.png" className="chats" alt=" " />
            <br />
            <img src="assets/Group 23.png" className="chats" alt=" " />
            <br />
            <img src="assets/Raisa.png" className="chats" alt=" " />
            <br />
            <img src="assets/dr. Adrian.png" className="chats" alt=" " />
            <br />
            <img src="assets/Uus.png" className="chats" alt=" " />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
