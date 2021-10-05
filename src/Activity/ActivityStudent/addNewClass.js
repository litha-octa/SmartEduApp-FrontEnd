import React, { useState } from "react";
import "../component/AddNewClass.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import getAllClass from "../../redux/ActionCreators/allclass";
import sortBy from "../../redux/ActionCreators/sortBy";
import {filterCategory, filterLevel,filterPricing } from "../../redux/ActionCreators/filter";
import { Dropdown, Button, } from "react-bootstrap";

function AddNewClass(props) {
  const { getAllClass, allClassReducer } = props;
  const { sortBy, sortByReducer } = props;
  const { filterCategory, filterCategoryReducer } = props;
  const { filterLevel, filterLevelReducer } = props;
  const { filterPricing, filterPricingReducer } = props;


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
            <td className="myclassColumn">Class Name</td>
            <td className="myclassColumn">Category</td>
            <td className="myclassColumn">Description</td>
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
          <input type="text" className="searchBar" placeholder="Quick Search" />
          <Button className="searchBtn" onClick={getAllClass}>
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
                  <Dropdown.Item onClick={() => filterCategory("6")}>
                    Software
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterCategory("3")}>
                    Math
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterCategory("2")}>
                    History
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterCategory("4")}>
                    Psychological
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterCategory("5")}>
                    Science
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterCategory("1")}>
                    Finance
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Level</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => filterLevel("1")}>
                    Advance
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterLevel("2")}>
                    Beginner
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterLevel("3")}>
                    Intermediate
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Price</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => filterPricing("0")}>
                    Free
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterPricing("10")}>
                    $10
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => filterPricing("50")}>
                    $50
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Sort by </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => sortBy("all_class.category_id-AZ")}
                  >
                    Category A to Z
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => sortBy("all_class.category_id-ZA")}
                  >
                    Category Z to A
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => sortBy("all_class.level_id-AZ")}
                  >
                    Level A to Z
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => sortBy("all_class.level_id-ZA")}
                  >
                    Level Z to A
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => sortBy("pricing-AZ")}>
                    Price A to Z
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => sortBy("pricing-ZA")}>
                    Price Z to A
                  </Dropdown.Item>
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
                  <td className="myclassColumn">Class Name</td>
                  <td className="myclassColumn">Category</td>
                  <td className="myclassColumn">Description</td>
                  <td className="myclassColumn">Level</td>
                  <td className="myclassColumn">Pricing</td>
                  <td className="myclassColumn">&nbsp;</td>
                </tr>
                {allClassReducer.isFulfilled
                  ? allClassReducer.results.map((i) => (
                      <tr>
                        <td className="myclassContent">{i.class_name}</td>
                        <td className="myclassContent">{i.category}</td>
                        <td className="myclassContent">{i.description}</td>
                        <td className="myclassContent">{i.level}</td>
                        <td className="myclassContent">$ {i.pricing}</td>
                        <td className="myclassContent">
                          <Button className="registerButton"> Register</Button>
                        </td>
                      </tr>
                    ))
                  : null}
                {sortByReducer.isFulfilled
                  ? sortByReducer.results.map((s) => (
                      <tr>
                        <td className="myclassContent">{s.class_name}</td>
                        <td className="myclassContent">{s.category}</td>
                        <td className="myclassContent">{s.description}</td>
                        <td className="myclassContent">{s.level}</td>
                        <td className="myclassContent">$ {s.pricing}</td>
                        <td className="myclassContent">
                          <Button className="registerButton"> Register</Button>
                        </td>
                      </tr>
                    ))
                  : null}
                {filterCategoryReducer.isFulfilled
                  ? filterCategoryReducer.results.map((s) => (
                      <tr>
                        <td className="myclassContent">{s.class_name}</td>
                        <td className="myclassContent">{s.category}</td>
                        <td className="myclassContent">{s.description}</td>
                        <td className="myclassContent">{s.level}</td>
                        <td className="myclassContent">$ {s.pricing}</td>
                        <td>
                          <Button className="registerButton"> Register</Button>
                        </td>
                      </tr>
                    ))
                  : null}
                {filterLevelReducer.isFulfilled
                  ? filterLevelReducer.results.map((s) => (
                      <tr>
                        <td className="myclassContent">{s.class_name}</td>
                        <td className="myclassContent">{s.category}</td>
                        <td className="myclassContent">{s.description}</td>
                        <td className="myclassContent">{s.level}</td>
                        <td className="myclassContent">$ {s.pricing}</td>
                        <td>
                          <Button className="registerButton"> Register</Button>
                        </td>
                      </tr>
                    ))
                  : null}
                {filterPricingReducer.isFulfilled
                  ? filterPricingReducer.results.map((s) => (
                      <tr>
                        <td className="myclassContent">{s.class_name}</td>
                        <td className="myclassContent">{s.category}</td>
                        <td className="myclassContent">{s.description}</td>
                        <td className="myclassContent">{s.level}</td>
                        <td className="myclassContent">$ {s.pricing}</td>
                        <td>
                          <Button className="registerButton"> Register</Button>
                        </td>
                      </tr>
                    ))
                  : null}
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { allClassReducer, sortByReducer, filterCategoryReducer, filterLevelReducer,filterPricingReducer,} = state;
  return {
    allClassReducer,
    sortByReducer,
    filterCategoryReducer,
    filterLevelReducer,
    filterPricingReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllClass: () =>
      dispatch(getAllClass("http://localhost:8300/api/v1/newclass/")),

    sortBy: (param) =>
      dispatch(
        sortBy(`http://localhost:8300/api/v1/newclass/sort/?sort=${param}`)
      ),

    filterCategory: (param) =>
      dispatch(
        filterCategory(
          `http://localhost:8300/api/v1/newclass/category/?search=${param}`
        )
      ),
    filterLevel: (param) =>
      dispatch(
        filterLevel(
          `http://localhost:8300/api/v1/newclass/level/?search=${param}`
        )
      ),
    filterPricing: (param) =>
      dispatch(
        filterPricing(
          `http://localhost:8300/api/v1/newclass/pricing/?search=${param}`
        )
      ),
  };
};
const ConnectedActivity = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewClass);

export default ConnectedActivity;
