import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/activity4.css";
import HeaderAct from "./component/HeaderAct";
import SideActivity from "./component/SideActivity";
import ActCont4 from "./component/ActCont4";

class Activity4 extends Component {
 render() {
    return (
<div>
<HeaderAct/>
<SideActivity/>

<article>
    <div className="article1">
        <p id="title"><Link to ="./Activity">
          <img src="assets/Back Icon.png" alt=" "/></Link>
                Know more Javascript</p>
            <img src="assets/activity3-bg.jfif" id="article-bg" alt=" "/>
            <div id="bg-layer2">
    
    
                <img src="assets/group 205.png" className="icon-comp2" alt=" "/>
                 <div className="sub">Front-end Fundamentals</div>
                     <div className="description">Level : Beginner&nbsp;&nbsp;&nbsp;
                                              Category : Software&nbsp;&nbsp;&nbsp;
                                              Price : Free</div>
                      <div className="yourscore">86</div>
    </div>
    <div className="article2">
         
          <div className="content">
          <Link to ="/activity3" className="link">
          Information&nbsp;&nbsp;&nbsp;
        </Link>
          
           Progress&nbsp;&nbsp;&nbsp;
           Discussion</div>

          <img src="assets/linepolos.png" className="line" alt=" "/>
          <ActCont4/>
         </div>

    </div>

  </article>


  </div>
    );}}
   export default Activity4;