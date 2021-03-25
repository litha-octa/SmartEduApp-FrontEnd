import React, { Component } from "react";
import "./css/activity.css";
import {Link} from "react-router-dom";
import HeaderAct from "./HeaderAct";
import SideActivity from "./SideActivity";
import ActCont1 from "./ActCont1";


class Activity extends Component {
 render() {
    return (
<div>
<HeaderAct/>
<SideActivity/>
  <div className="d-flex">
  <div className="bd-highlight1">
    <label id="title">Activity</label><br/>
    <label id="subtitle">My Class</label><br/>
    <table>
      <tr>
        <td><input 	className="form-check-input" type="checkbox"/></td>
        <td className="text-content-t1">Class Name</td>
        <td className="text-content-t1">Category</td>
        <td className="text-content-t1">Description</td>
        <td className="text-content-t1">Progress</td>
        <td className="text-content-t1">Status</td>
        <td className="text-content-t1">Score</td>
      </tr>
      <tr className="line-1">
        <td><input className="form-check-input" type="checkbox"/></td>
        <td className="text-content2-t2">Front-end fundamentals</td>
        <td className="text-content2-t2">Software</td>
        <td className="text-content2-t2">Learn the fundamentals of front end...</td>
        <td><img src="assets/progress bar.png"id="progress" alt=" "/></td>
        <td><img src="assets/status.png"id="status" alt=" "/></td>
        <td><p className="score1">86<img src="assets/list.png" alt=" " className="list"/></p>
        </td>
      </tr>
      <tr class="line-1">
        <td><input className="form-check-input" type="checkbox"/></td>
        <td className="text-content2-t2">HTML for Beginners</td>
        <td className="text-content2-t2">Software</td>
        <td className="text-content2-t2">HTML from scratch</td>
        <td><img src="assets/progress bar2.png" id="progress" alt=" "/></td>
        <td><img src="assets/status.png"id="status" alt=" "/></td>
        <td><p className="score1"> 71<img src="assets/list.png" alt=" " className="list"/></p>
         </td>
      </tr>
      <tr class="line-1">
        <td><input class="form-check-input" type="checkbox"/></td>
        <td className="text-content2-t2">History of Europe</td>
        <td className="text-content2-t2">History</td>
        <td className="text-content2-t2">The history of Europe concerns itself...</td>
        <td><img src="assets/progress bar3.png"id="progress" alt=" "/></td>
        <td><img src="assets/status.png"id="status" alt=" "/></td>
        <td><p className="score2">62<img src="assets/list.png"  alt=" " className="list"/></p>
        </td>
      </tr>
      <tr><td colspan="7" align="center"> 
        <Link to="./activity2" class="view-all">view all
        <img src="assets/arrow.png" className="arrow" alt=" "/></Link>
      </td></tr>
    </table>
  </div></div>

  <div className="container">
    <div id="subtitle">New Class</div>
    <input type="text" className="search-bar" placeholder="Quick Search"/>
    <input type="button" className="search-button" value="Search"/><br/>
    <div className="filter-by"> Categories &nbsp;&nbsp;&nbsp;Level&nbsp;&nbsp;&nbsp;Pricing</div>
    <ActCont1/>
    </div>
      




</div>
   	);
}
}
   export default Activity;