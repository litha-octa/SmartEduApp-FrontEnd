import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/styleActFas/classDetail.css";
import HeaderAct from "../component/HeaderAct";
import SideForStuAct from "../component/SideForStuAct";
import ClassDetailCont from "../component/classDetailCont";

class classDetailStu extends Component {
  render() {
    return (
      <div className="Container-ActFas">
        <body>
          <HeaderAct />
        <SideForStuAct />
            <p id="title-ActFas">
              <Link to="/ActivityStudent/addNewClass">
                <img src="assets/Back Icon.png" alt=" " />
              </Link>
                Know more Javascript
            </p>

            <img src="assets/activity3-bg.jfif" id="articlebg-ActFas" alt=" " /> 
              <div id="articlebglayer2-ActFas">
                <img src="assets/group 205.png" className="iconComp" alt=" " />
                
                  <div className="classNameDetail">Know more Javascript</div>
                   <button type="button" className="RegClass">
                          Register
                    </button>
                      <div className="descriptionClass">
                                            Level : Beginner&nbsp;&nbsp;&nbsp;
                                            Category : Software&nbsp;&nbsp;&nbsp;
                                            Price : Free
                      </div>
                  </div>
                  <div className="articleActFas2">
                      <img src="assets/group 205.png" className="icon-comp" alt=" " />
                      
                        <div className="contentDetail">
                                        Information
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                        <Link to="/classProgress" className="linkFromClassDetail">Class Progress</Link>
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                      Class Discussion
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;         
                        </div>
                      <img src="assets/line.png" className="line" alt=" " /> 
                      <ClassDetailCont/>
                  </div>
         
        
             </body>
      </div>
    );
  }
}
export default classDetailStu;