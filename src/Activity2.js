import React, { Component } from "react";
import "./css/activity2.css";
import { Route, Link, HashRouter } from "react-router-dom";
import HeaderAct from "./HeaderAct";
import SideActivity from "./SideActivity";
import ActCont2 from "./ActCont2";

class Activity2 extends Component {
 render() {
    return (
<div>
<HeaderAct/>
<SideActivity/>
  <main>
  <div className="d-flex">
  <div className="bd-highlight1">
    <Link to ="./Activity">
      <label id="title">
        <img src="assets/Back Icon.png"/>
      </label>
    </Link><br/>
    <label id="subtitle">My Class</label><br/>
     <input type="text" className="search-bar" placeholder="Quick Search"/>
    <input type="button" className="search-button" value="Search"/><br/>
    <div className="filter-by"> Categories &nbsp;&nbsp;&nbsp;Level&nbsp;&nbsp;&nbsp;Pricing</div>
      <ActCont2/>
  </div></div>
   

      </main>
      




</div>
   	);}}
   export default Activity2;