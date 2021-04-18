import React from "react";
import "./css/activity.css";
import { Link } from "react-router-dom";
import HeaderAct from "./component/HeaderAct";
import SideActivity from "./component/SideActivity";
//simport ActCont1 from "./component/ActCont1";
import { connect } from "react-redux";
import getAllClass from "./redux/ActionCreators/allclass";
//import allClassReducer from "./redux/Reducers/allclass"



//class  extends Component { 
function Activity(props) {
  const {
    getAllClass,
    allClassReducer
  } = props;
  return (
    <div>
      <HeaderAct />
      <SideActivity />
      <div className="container-act">
        <div className="myclass">
          <label id="title-act1">Activity</label><br />
          <label id="subtitle-act1">My Class</label><br />

          <Link to="./activity2" className="act1-view-all">view all
        <img src="assets/arrow.png" className="arrowicon-act1" alt=" " /></Link>


        </div>

        <div className="container-newclass">
          <div id="subtitle-act1">New Class</div>
          <input type="text" className="searchbar-act" placeholder="Quick Search" />
          <input type="button" className="searchbutton-act" value="Search" /><br />
          <div className="filterby-act"> Categories &nbsp;&nbsp;&nbsp;Level&nbsp;&nbsp;&nbsp;Pricing</div>
        </div>
      </div>

      <button onClick={getAllClass}>
        Show Rick and Morty Characters
      </button>

      <div className="show">
        {allClassReducer.isPending ? (
          console.log("loading")
        ) : (
          <ol>
            {allClassReducer.isFulfilled
              ? allClassReducer.result.map((char) => (
                <li key={char.class_id}>{char.class_name} </li>
              ))
              : null}
          </ol>
        )}
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
const ConnectedActivity = connect(mapStateToProps, mapDispatchToProps)(Activity);

export default ConnectedActivity;