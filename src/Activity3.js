import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./css/activity3.css";
import HeaderAct from "./HeaderAct";
import SideActivity from "./SideActivity";

class Activity3 extends Component {
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
                 <div className="sub">Know more Javascript</div>
                     <div className="description">Level : Beginner&nbsp;&nbsp;&nbsp;
                                              Category : Software&nbsp;&nbsp;&nbsp;
                                              Price : Free</div>
                      <button type="button" className="btn">Register</button>
    </div>
    <div className="article2">
         <img src="assets/group 205.png" className="icon-comp" alt=" "/>

          <div className="content">Information&nbsp;&nbsp;&nbsp;

          <Link to ="/activity4" className="link">
           Progress&nbsp;&nbsp;&nbsp;</Link>
           Discussion</div>

          <img src="assets/line.png" className="line" alt=" "/>

          <div className="title-content">Description</div>

          <div className="content">
                  Javascript from the basic for beginner. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This className helps you get started with JavaScript and furthers your understanding of what is possible.
          </div><br/>
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
        </ul><br/>
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

  </article>


  </div>
    );}}
   export default Activity3;