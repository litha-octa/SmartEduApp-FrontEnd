import React, { Component } from "react";
import "./dashboardStudent.css";
import { Link } from "react-router-dom";


function DashboardStudent(){
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
             <table className="table-schedule">
              <tr id="date">
                <td colspan="7">
                  Today,
                  {dateNow}
                  <img
                    src="assets/Calendar Icon.png"
                    className="calendar"
                    alt=" "
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div id="select">
                    {resultDay[0]}
                    <br />
                    {resultDate[0]}
                  </div>
                </td>
                <td>
                  <div id="date-day">
                    {resultDay[1]}
                    <br />
                    {resultDate[1]}
                  </div>
                </td>
                <td>
                  <div id="date-day">
                    {resultDay[2]}
                    <br />
                    {resultDate[2]}
                  </div>
                </td>
                <td>
                  <div id="date-day">
                    {resultDay[3]}
                    <br />
                    {resultDate[3]}
                  </div>
                </td>
                <td>
                  <div id="date-day">
                    {resultDay[4]}
                    <br />
                    {resultDate[4]}
                  </div>
                </td>
                <td>
                  <div id="date-day">
                    {resultDay[5]}
                    <br />
                    {resultDate[5]}
                  </div>
                </td>
                <td>
                  <div id="date-day">
                    {resultDay[6]}
                    <br />
                    {resultDate[6]}
                  </div>
                </td>
              </tr>
                <tr>
                  <td colspan="7" id="time"><h5 className="h5-dash">All Schedule</h5></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><Link to="/dashMySchedule" className="link-foryou"><h5>For You</h5></Link></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/8.00.png" id="img" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/d1fc.png" id="task1-pic" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/11.00.png" id="img" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/d1sc.png" id="task1-pic" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/13.00.png" id="img" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/d1tc.png" id="task1-pic" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/finish.png" id="img" alt=" " /></td>
                </tr>
              </table>
    );
  }

export default DashboardStudent;
