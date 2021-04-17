import React, { Component } from "react";
import "./css/activity.css";
import { Link } from "react-router-dom";
import HeaderAct from "./component/HeaderAct";
import SideActivity from "./component/SideActivity";
import ActCont2 from "./component/ActCont2";

class Activity2 extends Component {


  
 render() {
    return (
<div>
<HeaderAct/>
<SideActivity/>
<main>
  <div className="container-act2">
  <div className="myclass">
    <Link to ="./Activity">
        <img src="assets/Back Icon.png" alt=" "  id="backicon-act2"/>
    </Link>
    <label id="subtitle-act2">My Class</label><br/><br/>
     <input type="text" className="searchbar-act" placeholder="Quick Search"/>
    <input type="button" className="searchbutton-act" value="Search"/><br/>
    <div className="filterby-act"> Categories &nbsp;&nbsp;&nbsp;Level&nbsp;&nbsp;&nbsp;Pricing</div>
    
     <ActCont2/>
  </div></div>
   

      </main>
      




</div>
   	);}}
   export default Activity2;