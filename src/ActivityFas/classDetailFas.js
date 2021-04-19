import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/activity3.css";
import HeaderAct from "../component/HeaderAct";
import SideForStuAct from "../ActivityStudent/SideForStuAct";

class classDetailFas extends Component {
  render() {
    return (
      <div id="bodyAct">
        <HeaderAct />
        <SideForStuAct />
            <div className="articleAct">
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
                    <div className="class-name-detail">Front-end Fundamentals</div>
                      <div className="description">
                          Level : Beginner&nbsp;&nbsp;&nbsp;
                          Category : Software&nbsp;&nbsp;&nbsp;
                          Price : Free
                      </div>
                    </div>
            <div className="article2">
              <img src="assets/group 205.png" className="icon-comp" alt=" " />
                <div className="content">
                  Information&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Progress&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Class Discussion &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                  <Link to ="/ActivityFas/classMember">
                  Class Member
                  </Link>
                  &nbsp;&nbsp;&nbsp;
              </div>
              <img src="assets/line.png" className="line" alt=" " />
          <div className="title-content">Description</div>
            <div className="content">
                Javascript from the basic for beginner.
                JavaScript is a programming language that adds interactivity to your website.
                This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms;
                with dynamic styling; with animation, etc.
                This className helps you get started with JavaScript and furthers your understanding of what is possible.
            </div><br />
          <div className="title-content">What will I learn?</div>
              <ul>
                <li>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis.
            </div>
                </li>
                <li>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis.
            </div>
                </li>
                <li>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis.
            </div>
                </li>
              </ul><br />
              <div className="title-content">Content 2</div>
              <ul>
                <li>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis.
          </div>
                </li>
                <li>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis.
          </div>
                </li>
                <li>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit imperdiet eget posuere id sagittis.
          </div>
                </li>
              </ul>


            </div>
          </div>

        </div>


      </div>
    );
  }
}
export default classDetailFas;