import React, { Component } from "react";
import "../css/ActCont4.css";

class ActCont2 extends Component {
 render() {
    return ( 
    	<div>

    <table>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Class Name</td>
            <td>Category</td>
            <td>Description</td>
            <td>Progress</td>
            <td>Status</td>
            <td>Score</td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Front-end fundamentals</td>
            <td>Software</td>
            <td>Learn the fundamentals of front end...</td>
            <td><img src="assets/Progress Bar.png" alt=" " id="progress"/></td>
            <td><div id="act2-status">Ongoing</div></td>
            <td id="score"><div className="green">86</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>HTML for Beginners</td>
            <td>Software</td>
            <td>HTML from scartch</td>
            <td><img src="assets/Progress Bar2.png" alt=" " id="progress"/></td>
            <td><div id="act2-status">Ongoing</div></td>
            <td id="score"><div className="green">71</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>History of Europe</td>
            <td>History</td>
            <td>The history of Europe concerns itself...</td>
            <td><img src="assets/Progress Bar3.png" alt=" " id="progress"/></td>
            <td><div id="act2-status">Ongoing</div></td>
            <td id="score"><div className="yellow">62</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Trigonometry</td>
            <td>Math</td>
            <td>Trigonometry helps us finds angles...</td>
            <td><img src="assets/Progress Bar4.png" id="progress" alt=" "/></td>
            <td><div id="act2-status">Ongoing</div></td>
            <td id="score"><div className="blue">95</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Algebra</td>
            <td>Math</td>
            <td>Branch of mathematics dealing with...</td>
            <td><img src="assets/Progress Bar5.png" id="progress" alt=" "/></td>
            <td><div id="act2-status">Completed</div></td>
            <td id="score"><div className="blue">100</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Molecular Biology</td>
            <td>Science</td>
            <td>Study he composition, structure...</td>
            <td><img src="assets/Progress Bar.png" id="progress" alt=" "/></td>
            <td><div id="act2-status">Ongoing</div></td>
            <td id="score"><div className="red">42</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Banking Finance</td>
            <td>Finance</td>
            <td>Explore the dynamic, fast-paced...</td>
            <td><img src="assets/Progress Bar6.png" id="progress" alt=" "/></td>
            <td><div id="act2-status">Ongoing</div></td>
            <td id="score"><div className="red">21</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Basic Excel</td>
            <td>Software</td>
            <td>Learn Excel from beginner to...</td>
            <td><img src="assets/Progress Bar5.png" id="progress" alt=" "/></td>
            <td><div id="act2-status">Completed</div></td>
            <td id="score"><div className="blue">98</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Thermodynamic and Phase Equilibria</td>
            <td>Science</td>
            <td>Learn thermodynamics and how...</td>
            <td><img src="assets/Progress Bar5.png" id="progress" alt=" "/></td>
            <td><div id="act2-status">Completed</div></td>
            <td id="score"><div className="green">86</div></td>
        </tr>
        <tr>
            <td><input type="checkbox"/></td>
            <td>Ancient Eygpt and its Civilization</td>
            <td>History</td>
            <td>Colossal pyramid, imposing temples...</td>
            <td><img src="assets/Progress Bar5.png" id="progress" alt=" "/></td>
            <td><div id="act2-status">Completed</div></td>
            <td id="score"><div className="green">72</div></td>
        </tr>
    </table>
    	</div>
    	);
  }
}
 

export default ActCont2;