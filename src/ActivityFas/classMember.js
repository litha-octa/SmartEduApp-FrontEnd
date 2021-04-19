import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/styleActFas/classMember.css";
import HeaderAct from "../component/HeaderAct";
import SideForStuAct from "../ActivityStudent/SideForStuAct";
import Member from "../Modal/scoreMem";

class classMember extends Component {
  render() {
    return (
<div id="bodyAct">
  <HeaderAct />
  <SideForStuAct />
            <div className="ContentAct-Mem">
                    <Link to="/CreateNewClassdummy">
                    <div id="titleAct-Fas">
                      <img src="assets/Back Icon.png" alt=" " />
                      
                        Front-end Fundamentals
                      </div> 
                    </Link>    
                  
          <div className="article1">
              <img src="assets/activity3-bg.jfif" id="article-bg" alt=" " />
                  
                  <div id="bg-layer2">
                    <img src="assets/group 205.png" className="icon-comp2" alt=" " />
                      <div className="class-name-detail">
                        Front-end Fundamentals
                      </div>
                      <div className="description">
                          Level : Beginner&nbsp;&nbsp;&nbsp;
                          Category : Software&nbsp;&nbsp;&nbsp;
                          Price : Free
                      </div>
          </div>
            <div className="article2">
              <img src="assets/group 205.png" className="icon-comp" alt=" " />
                <div className="content">
                <Link to="/ActivityFas/classDetailFas">
                  Information
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Progress&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Class Discussion &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                  Class Member&nbsp;&nbsp;&nbsp;
              </div>
              <img src="assets/line.png" className="line" alt=" " />


            <div>
                <img src="assets/Member.png" alt=" " className="Member-Icon"/><label id="nameMember">Isyana</label><br/>
            </div>
            <div>
                <Member/><div><label id="nameMember">Nissa Sabyan</label></div><br/>
            </div>
            <div>
                <img src="assets/Member.png" alt=" " className="Member-Icon"/><label id="nameMember">Pepoy</label><br/>
            </div>
            <div>
                <img src="assets/Member.png" alt=" " className="Member-Icon"/><label id="nameMember">Prilly</label><br/>
            </div>
            <div>
                <img src="assets/Member.png" alt=" "className="Member-Icon"/><label id="nameMember">Deddy</label><br/>
            </div>

          </div>
          
        </div></div>


      </div>
    );
  }
}
export default classMember;