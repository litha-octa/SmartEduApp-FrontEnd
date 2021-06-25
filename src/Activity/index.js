import React, { useState } from "react";
import { Link } from "react-router-dom";
// import HeaderAct from "../component/HeaderAct";
import SideActivity from "../component/SideActivity";
import HeaderAct from "../component/HeaderAct";
import AddNewClass from "./ActivityStudent/AddNewClass";
import { connect } from "react-redux";

function Activity(props){
    return(
        <div style={{
            backgroundColor: '#E6EDF6',
            paddingTop:'1%',
        }}>
            <SideActivity/>
            <HeaderAct/>
            <AddNewClass/>
        </div>
    )
};
export default Activity;