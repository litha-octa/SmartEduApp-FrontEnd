import React, {useState} from "react";
import "../component/AddNewClass.css";
import { Link } from "react-router-dom";
//simport ActCont1 from "./component/ActCont1";
import { connect } from "react-redux";
import getAllClass from "../../redux/ActionCreators/allclass";
import "react-statusbar/dist/statusbar.css";
import * as Statusbar from "react-statusbar";
import { Dropdown, Button,DropdownButton } from "react-bootstrap";




function AddNewClass(props) {

    const [newClassList, setNewClassList] = useState();
    const [info, setInfo] = useState();

    const {
        getAllClass,
        allClassReducer
    } = props;
    let numPage = [];
    const pageHandler = (url) => {
      getAllClass(url);
    };
    if (info) {
      for (let i = 0; i < info.totalPage; i++) {
        numPage.push(
          <span
            style={{
              color: info.page === i + 1 ? "white" : "black",
            }}
            key={i}
            className={info.page === i + 1 ? "pg active-pg" : "pg"}
            onClick={() =>
              pageHandler(
                i === 0
                  ? "http://localhost:8300/api/v1/newclass/"
                  : "http://localhost:8300/api/v1/newclass/?pages=" +
                      (Number(i) + 1)
              )
            }
          >
            {i + 1}
          </span>          
        );
      }
    };
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
        <div className="containerActivity">
          <label id="titleActivity">Activity</label>
          <br />
          <table className="tableActivity">
            <tr>
              <td colspan="7" id="subtitleActivity">
                My Class
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td className="myclassColumn">
                Class Name
              </td>
              <td className="myclassColumn">Category</td>
              <td className="myclassColumn">
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
          <Link to="/MyClass" className="viewAll">
            view all
            <img src="assets/arrow.png" className="viewAllArrow" alt=" " />
          </Link>
        </div>

        {/* CONTAINER NEW CLASS */}
        <div className="containerActivityNewClass">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              width: "95%",
              marginLeft: "2%",
            }}
          >
            <label
              id="subtitleActivity"
              style={{ marginTop: "2%", marginLeft: "2%" }}
            >
              New Class
            </label>
            <br />
            <input
              type="text"
              className="searchBar"
              placeholder="Quick Search"
            />
            <Button className="searchBtn">
              Search
            </Button>
            <div
              style={{
                backgroundColor: "#EEEEEE",
                width: "95%",
                marginLeft: "2%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Categories
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Software</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Math</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"> History </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Psychological
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Science</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Finance</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Level</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Advance</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Beginner</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Intermediate
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Price</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Free</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">$10</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">$50</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="show">
              {allClassReducer.isPending ? (
                console.log("loading")
              ) : (
                <table className="tableActivity">
                  <tr>
                    <td className="myclassColumn" style={{ width: "15%" }}>
                      Class Name
                    </td>
                    <td className="myclassColumn" style={{ width: "15%" }}>
                      Category
                    </td>
                    <td className="myclassColumn">Description</td>
                    <td className="myclassColumn" style={{ width: "10%" }}>
                      Level
                    </td>
                    <td className="myclassColumn" style={{ width: "10%" }}>
                      Pricing
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                  {allClassReducer.isFulfilled
                    ? allClassReducer.results.map((i) => (
                        <tr>
                          <td className="myclassContent">{i.class_name}</td>
                          <td className="myclassContent">{i.category}</td>
                          <td className="myclassContent">{i.description}</td>
                          <td className="myclassContent">{i.level}</td>
                          <td className="myclassContent">$ {i.pricing}</td>
                          <td>
                            <Button className="registerButton">
                              {" "}
                              Register
                            </Button>
                          </td>
                        </tr>
                      ))
                    : null}
                </table>
              )}
              <button className="showPag" onClick={getAllClass}>
                Regist New Class
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    const { allClassReducer } = state;
    return {
        allClassReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllClass: () =>
            dispatch(
                getAllClass("http://localhost:8300/api/v1/newclass/")
            ),
    };
};
const ConnectedActivity = connect(mapStateToProps, mapDispatchToProps)(AddNewClass);

export default ConnectedActivity;
