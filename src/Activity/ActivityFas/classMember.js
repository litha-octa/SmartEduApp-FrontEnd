import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../css/styleActFas/classMember.css";
import HeaderAct from "../component/HeaderAct";
import SideForStuAct from "../component/SideForStuAct";


class classMember extends Component {
  render() {
    return (
     <div className="Container-ActFas">
        <body>
          <HeaderAct />
        <SideForStuAct />
            <p id="title-ActFas">
              <Link to="/ActivityFas/CreateNewClassdummy">
                <img src="assets/Back Icon.png" alt=" " />
              </Link>
                Front-end Fundamentals
            </p>

            <img src="assets/activity3-bg.jfif" id="articlebg-ActFas" alt=" " /> 
              <div id="articlebglayer2-ActFas">
                <img src="assets/group 205.png" className="iconComp" alt=" " />
                
                  <div className="classNameDetail">Front-end Fundamentals</div>
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
                      <img src="assets/80progress.png" alt="" id="progressMeters"/>
                        <div className="contentDetail">
                                                 
                                                  
                                                  &nbsp;&nbsp;&nbsp;
                              <Link to="/classDetailFas" className="linkFrom">Information</Link>
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;
                                        Class Progress
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
                                      Member      &nbsp;&nbsp;&nbsp;
                            </div>
                            <img src="assets/Group 212 (2).png" alt="" className="lineMember"/>
                            </div>
                            
                            </body></div>
    );
  }
}
export default classMember;