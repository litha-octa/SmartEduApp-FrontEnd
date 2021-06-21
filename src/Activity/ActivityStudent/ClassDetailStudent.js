import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../component/classDetail.css";
import HeaderAct from "../../component/HeaderAct";
import SideActivity from "../../component/SideActivity";
import ClassDetailCont from "../../component/classDetailCont";
import { Tab,Tabs } from "react-bootstrap";

function ClassDetailStudent(){
  const classname="Know More Javascript"
    return (
      <div className="bodyActivity">
        <SideActivity />
        <div className="containerClassDetail">
          <Link to="/MyClass">
            <img src="assets/Back Icon.png" alt=" " id="backicon-act2" />
            <label className="titleMyClass">{classname}</label>
          </Link>
          <br />
          <img src="assets/activity3-bg.jfif" id="img-classdetail" alt=" " />
          <div id="img-classdetail-layer2">
            <img src="assets/group 205.png" className="iconComp" alt=" " />
            <div className="classNameDetail">{classname}</div>
            <button type="button" className="RegClass">
              Register
            </button>
            <div className="descriptionClass">
              Level : Beginner&nbsp;&nbsp;&nbsp; Category :
              Software&nbsp;&nbsp;&nbsp; Price : Free
            </div>
          </div>
        </div>

        <div className="containerClassDetail">
          <Tabs defaultActiveKey="Information">
            <Tab eventKey="Information" title="Information">
              jwdbiwbdiw
            </Tab>
            <Tab eventKey="Class Progress" title="Class Progress">
              wjhdbjkwbdjkwe
            </Tab>
            <Tab eventKey="Class Discusion" title="Class Discusion" disabled>
              wjdnwjkndkwe
            </Tab>
          </Tabs>
        </div>
      </div>
    );
}
export default ClassDetailStudent;