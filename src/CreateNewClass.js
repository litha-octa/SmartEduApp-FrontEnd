import React, { Component } from "react";
import "./css/styleActFas/CreateNewClass.css";
import {Link} from "react-router-dom";
import HeaderAct from "./HeaderAct";
import SideActivity from "./SideActivity";



class CreateNewClass extends Component {
 render() {
    return (
  <div>
    <HeaderAct/>
    <SideActivity/><br/>
    <label id="title-act">Activity</label><br/>
      <div className="d-flex">
        <label id="subtitle">My Class</label><br/><br/>
          <table>
          <tr className="table-title">
            <td><input className="form-check-input" type="checkbox"/></td>
            <td id="nameclass-t1">Class Name</td>
            <td id="category-t1">Category</td>
            <td id="description-t1">Description</td>
            <td>Schedule</td>
            <td>Student</td>
          </tr>
          <tr className="table-content">
            <td><input className="form-check-input" type="checkbox"/></td>
            <td>Front-end fundamentals</td>
            <td>Software</td>
            <td>Learn the fundamentals of front end...</td>
            <td>Friday, 08:00 - 09:40</td>
            <td> 24<img src="assets/Student Icon.png" id="student-icon" alt="student-icon"/><img src="assets/list.png" alt="list" className="list"/></td>
          </tr>
          <tr className="table-content">
            <td><input className="form-check-input" type="checkbox"/></td>
            <td>HTML for Beginners</td>
            <td>Software</td>
            <td>HTML from scratch</td>
            <td>Monday, 13:00 - 14:40</td>
            <td> 32<img src="assets/Student Icon.png" id="student-icon" alt="student-icon"/><img src="assets/list.png" alt="list" className="list"/></td>
          </tr>
          <tr className="table-content">
            <td><input className="form-check-input" type="checkbox"/></td>
            <td id="nameclass">History of Europe</td>
            <td id="category">History</td>
            <td id="description">The history of Europe concerns itself...</td>
            <td>Monday, 15:00 - 16:40</td>
            <td> 17<img src="assets/Student Icon.png" id="student-icon" alt="student-icon"/><img src="assets/list.png" alt="list" className="list"/></td>
          </tr>
         </table>
              <Link to="./activity2" className="view-all">view all
              <img src="assets/arrow.png" className="arrow" alt="arrow"/></Link>
         
          </div><br/>

          <label id="title-act">Activity</label><br/>
            <div className="container" id="create">
              <table className="form-create-new-class">
                <tr>
                  <td id="td-left"><div>Class Name : <input type="text" className="class-name"/></div></td>
                
                  <td><div>Pricing : &nbsp; <div className="radio"><input type="radio" id="male" name="pricing" value="free"/>
                                                  <label for="free">Free</label>&nbsp;&nbsp;
                                                  <input type="radio" id="female" name="pricing" value="paid"/>
                                                  <label for="paid">Paid</label>
                                            </div>
                                                
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><div>Categories : <select >
                                                   <option>Software</option>
                                                   <option>Math</option>
                                                   <option>History</option>
                                                   <option>Finance</option>
                                                   <option>Psychology</option>
                                                  </select >
                      </div>
                  </td>
                  <td><div>Schedule : &nbsp;&nbsp;<input type="date" className="date"/></div></td>
                </tr>
                <tr>
                  <td colspan="2"><div>Description :</div></td>
                </tr>
                </table>
                  <box><input type="text-area" className="text-area"/></box>
                  <button id="btn-create">Create</button>

          </div>
  </div>
  );}}

  export default CreateNewClass;