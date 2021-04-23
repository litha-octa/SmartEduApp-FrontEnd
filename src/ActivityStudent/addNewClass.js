import React from "react";
import "../css/activity.css";
import { Link } from "react-router-dom";
import HeaderAct from "../component/HeaderAct";
import SideForStuAct from "../component/SideForStuAct";
//simport ActCont1 from "./component/ActCont1";
import { connect } from "react-redux";
import getAllClass from "../redux/ActionCreators/allclass";
//import allClassReducer from "./redux/Reducers/allclass"



//class  extends Component { 
function addNewClass(props) {
    const {
        getAllClass,
        allClassReducer
    } = props;
    return (
        <div>
            <HeaderAct />
            <SideForStuAct />
            <div className="container-act">
                <div className="myclass">
                    <label id="title-act1">Activity</label><br />
                    <label id="subtitle-act1">My Class</label><br />
                    <table id="myclass-table">
                        <tr>
                            <td><input className="form-check-input" type="checkbox" /></td>
                            <td className="myclass-table-column">Class Name</td>
                            <td className="myclass-table-column">Category</td>
                            <td className="myclass-table-column">Description</td>
                            <td className="myclass-table-column">Progress</td>
                            <td className="myclass-table-column">Status</td>
                            <td className="myclass-table-column">Score</td>
                        </tr>
                        <tr className="white-line">
                            <td><input className="form-check-input" type="checkbox" /></td>
                            <td className="myclass-table-content">Front-end fundamentals</td>
                            <td className="myclass-table-content">Software</td>
                            <td className="myclass-table-content">Learn the fundamentals of front end...</td>
                            <td><img src="assets/progress bar.png" id="progress" alt=" " /></td>
                            <td><img src="assets/status.png" id="myclass-status" alt=" " /></td>
                            <td><p id="font-score" className="score1">86<img src="assets/list.png" alt=" " className="list" /></p>
                            </td>
                        </tr>
                        <tr class="white-line">
                            <td><input className="form-check-input" type="checkbox" /></td>
                            <td className="myclass-table-content">HTML for Beginners</td>
                            <td className="myclass-table-content">Software</td>
                            <td className="myclass-table-content">HTML from scratch</td>
                            <td><img src="assets/progress bar2.png" id="progress" alt=" " /></td>
                            <td><img src="assets/status.png" id="myclass-status" alt=" " /></td>
                            <td><p id="font-score" className="score1"> 71<img src="assets/list.png" alt=" " className="list" /></p>
                            </td>
                        </tr>
                        <tr class="white-line">
                            <td><input class="form-check-input" type="checkbox" /></td>
                            <td className="myclass-table-content">History of Europe</td>
                            <td className="myclass-table-content">History</td>
                            <td className="myclass-table-content">The history of Europe concerns itself...</td>
                            <td><img src="assets/progress bar3.png" id="progress" alt=" " /></td>
                            <td><img src="assets/status.png" id="myclass-status" alt=" " /></td>
                            <td><p id="font-score" className="score2">62<img src="assets/list.png" alt=" " className="list" /></p>
                            </td>
                        </tr>
                    </table>
                    <Link to="/myClass" className="act1-view-all">view all
        <img src="assets/arrow.png" className="arrowicon-act1" alt=" " /></Link>
                </div>



                <div className="container-newclass">
                    <div id="subtitle-act1">New Class</div>
                    <input type="text" className="searchbar-act" placeholder="Quick Search" />
                    <input type="button" className="searchbutton-act" value="Search" /><br />
                    <div className="filterby-act"> Categories &nbsp;&nbsp;&nbsp;Level&nbsp;&nbsp;&nbsp;Pricing</div>

                    <div className="show">
                        {allClassReducer.isPending ? (
                            console.log("loading")
                        ) : (
                            <table><tr>
                                <td className="myclass-table-column">Class Name</td>
                                <td className="myclass-table-column">Category</td>
                                <td className="myclass-table-column">Description</td>
                                <td className="myclass-table-column">Level</td>
                                <td className="myclass-table-column">Pricing</td>
                            </tr>
                                {allClassReducer.isFulfilled
                                    ? allClassReducer.results.map((i) => (
                                        <tr>
                                            <td>{i.class_name}</td>
                                            <td>{i.category}</td>
                                            <td>{i.description}</td>
                                            <td>{i.level}</td>
                                            <td>{i.pricing}</td>
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
const ConnectedActivity = connect(mapStateToProps, mapDispatchToProps)(addNewClass);

export default ConnectedActivity;
