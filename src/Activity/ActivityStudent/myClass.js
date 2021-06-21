import React from "react";
import "../component/MyClass.css";
import { Link } from "react-router-dom";
import HeaderAct from "../../component/HeaderAct";
import SideActivity from "../../component/SideActivity";
import ActCont2 from "../../component/ActCont2";
import { Dropdown, Button, DropdownButton } from "react-bootstrap";

function MyClass(){ 
  const myClassDummy = {
    name1: "Front-end fundamentals",
    name2: "HTML for Beginners",
    name3: "History of Europe",

    category1: "Software",
    category2: "Software",
    category3: "History",

    des1: "Learn the fundamentals of front end...",
    des2: "HTML from scratch",
    des3: "The history of Europe concerns itself...",
  };

    return (
      <div className="bodyActivity">
        <SideActivity />
        <div className="myClassContainer">
          <Link to="/Activity">
            <img src="assets/Back Icon.png" alt=" " id="backicon-act2" />
            <label className="titleMyClass"> My Class </label>
          </Link>
          <br />
          <div className="headerMyClass">
            <input
              type="text"
              className="myclass-searchBar"
              placeholder="Quick Search"
            />
            <Button className="myclass-searchBtn">Search</Button>
            <div className="sortby">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-myclass">
                  Sort By: All Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Software</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Math</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"> History </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Psychological</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Science</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Finance</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <table className="myclassTable">
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td className="myclassColumn">Class Name</td>
              <td className="myclassColumn">Category</td>
              <td className="myclassColumn" style={{ width: "30%" }}>
                Description
              </td>
              <td className="myclassColumn">Progress</td>
              <td className="myclassColumn">Status</td>
              <td className="myclassColumn">Score</td>
            </tr>
            <tr className="bgWhite">
              <td>
                <input type="checkbox" />
              </td>
              <td className="myclassContent">{myClassDummy.name1}</td>
              <td className="myclassContent">{myClassDummy.category1}</td>
              <td className="myclassContent">{myClassDummy.des1}</td>
              <td>
                <img src="assets/progress bar3.png" id="progress" alt=" " />
              </td>
              <td className="myclassContent">
                <label className="status">Ongoing</label>
              </td>
              <td>
                <p id="font-score" className="score2">
                  62
                  <img src="assets/list.png" alt=" " className="list" />
                </p>
              </td>
            </tr>
            <tr className="bgWhite">
              <td>
                <input type="checkbox" />
              </td>
              <td className="myclassContent">{myClassDummy.name2}</td>
              <td className="myclassContent">{myClassDummy.category2}</td>
              <td className="myclassContent">{myClassDummy.des2}</td>
              <td>
                <img src="assets/progress bar3.png" id="progress" alt=" " />
              </td>
              <td className="myclassContent">
                <label className="status">Ongoing</label>
              </td>
              <td>
                <p id="font-score" className="score2">
                  62
                  <img src="assets/list.png" alt=" " className="list" />
                </p>
              </td>
            </tr>
            <tr className="bgWhite">
              <td>
                <input type="checkbox" />
              </td>
              <td className="myclassContent">{myClassDummy.name3}</td>
              <td className="myclassContent">{myClassDummy.category3}</td>
              <td className="myclassContent">{myClassDummy.des3}</td>
              <td>
                <img src="assets/progress bar3.png" id="progress" alt=" " />
              </td>
              <td className="myclassContent">
                <label className="status">Ongoing</label>
              </td>
              <td>
                <p id="font-score" className="score2">
                  62
                  <img src="assets/list.png" alt=" " className="list" />
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
export default MyClass;