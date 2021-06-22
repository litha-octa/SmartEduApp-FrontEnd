import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../component/classDetail.css";
import HeaderAct from "../../component/HeaderAct";
import SideActivity from "../../component/SideActivity";
import ClassDetailCont from "../../component/classDetailCont";
import progressDummy from "../component/progressDummy";
import { Tab,Tabs } from "react-bootstrap";

function ClassDetailStudent(){
  const classname="Know More Javascript"
  const description="Javascript from the basic for beginner.  JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This className helps you get started with JavaScript and furthers your understanding of what is possible."
  const whatWillYouLearn="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis."
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

      <div className="containerClassDetail2">
        <div className="tabs">
          <Tabs defaultActiveKey="Information">
            <Tab
              eventKey="Information"
              title="Information"
              className="contentDetail"
            >
              <div className="classDetail-titleContent">Description</div>

              <div className="classDetail-content">{description}</div>
              <br />

              <div className="classDetail-titleContent">What will I learn?</div>
              <ul>
                <li>
                  <div className="classDetail-content">{whatWillYouLearn}</div>
                </li>
                <li>
                  <div className="classDetail-content">{whatWillYouLearn}</div>
                </li>
                <li>
                  <div className="classDetail-content">{whatWillYouLearn}</div>
                </li>
              </ul>
              <br />
              <div className="classDetail-titleContent">Content 2</div>
              <ul>
                <li>
                  <div className="classDetail-content">{whatWillYouLearn}</div>
                </li>
                <li>
                  <div className="classDetail-content">{whatWillYouLearn}</div>
                </li>
                <li>
                  <div className="classDetail-content">{whatWillYouLearn}</div>
                </li>
              </ul>
            </Tab>
            <Tab
              eventKey="Class Progress"
              title="Class Progress"
              className="contentDetail"
            >
              <progressDummy/>
            </Tab>
            <Tab
              eventKey="Class Discusion"
              title="Class Discusion"
              className="contentDetail"
            >
              wjdnwjkndkwe
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default ClassDetailStudent;