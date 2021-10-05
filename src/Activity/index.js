import React, { useState } from "react";
import { Link } from "react-router-dom";
// import HeaderAct from "../component/HeaderAct";
import SideActivity from "../component/SideActivity";
import HeaderAct from "../component/HeaderAct";
import AddNewClass from "./ActivityStudent/AddNewClass";
import CreateNewClass from "./ActivityFas/CreateNewClass";
import { connect } from "react-redux";
import { getUser } from "../redux/ActionCreators/login";

function Activity(props){
    return (
      <div
        style={{
          backgroundColor: "#E6EDF6",
          paddingTop: "1%",
        }}
      >
        <SideActivity />
        <HeaderAct />
        {props.getUserReducer.currentUser.role ===
        "student" ? 
          <AddNewClass />
         : 
          <CreateNewClass />
        }
      </div>
    );
};
const mapStateToProps = (state) => {
  const { getUserReducer } = state;
  return {
    getUserReducer,
  };
};

const ConnectedActivity = connect(mapStateToProps)(Activity);
export default ConnectedActivity;

//export default Activity;
