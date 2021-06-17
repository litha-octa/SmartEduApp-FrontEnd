import React, { Component } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import DashboardStudent from "./DashboardStudent";
import HeaderDash from "../component/HeaderDash";
import SideForDash from "../component/SideForDash";

function Dashboard() {
  let dateNow = new Date();
  let dd = String(dateNow.getDate()).padStart(2, "0");
  let monthNow = new Date();
  let month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  let mm = month[monthNow.getMonth()];

  let yyyy = dateNow.getFullYear();
  dateNow = dd + " " + mm;

  // This Week
  let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  let daysLength = days.length;
  let d = new Date();
  let currentDays = days[d.getDay()];
  let currentIndexDay = days.findIndex((day) => day == currentDays) + 1;
  let resultDay = [];
  let indexDays;
  for (indexDays = 0; indexDays < daysLength; indexDays++) {
    let indexDay = indexDays + currentIndexDay;
    if (indexDay > daysLength) {
      indexDay = indexDay - daysLength;
    }
    if (indexDay < indexDays < 0) {
      indexDay = indexDay - 1;
    }
    indexDay = indexDay - 1;
    resultDay.push(days[indexDay]);
  }
  // get date with Date function (yyyy-mm-dd) for next 6 days
  let startDate = new Date();
  let resultDate = [];
  let indexDate;
  for (indexDate = 0; indexDate < daysLength; indexDate++) {
    let currentDate = new Date().setTime(
      startDate.getTime() + indexDate * 24 * 60 * 60 * 1000
    );
    currentDate = new Date(currentDate).getDate();
    resultDate.push(currentDate);
  }
  return (
    <div id="body-dash">
      <HeaderDash />
      <SideForDash />
      <div className="container-dash">
        <div className="contentdash1">
          <div className="grid-item" id="dashnews">
            <label className="dash-news">News</label>
            <img src="assets/Carousel.png" className="dash-news-pics" alt=" " />
          </div>
          <div id="dashboardContentFor">
            <DashboardStudent />
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
