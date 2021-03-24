import React, { Component } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import "./css/others/reset.css";
 
class Reset3 extends Component {
  render() {
    return (
    <div>
        <div className="col" id="box">
          <Link to="/Reset2">
            <img src="assets/Back Icon.png" id="back"/>
          </Link>
            <img className="orang" src="assets/orang2.png"/>
        </div>
        <div class="col" id="box-2">
            <h1 id="reset">Create New Password</h1>
            <h6>Your new password must be different from previous used password!</h6>
            <h6 className="h6-2">We will send you the verification code to reset your password </h6>
            <p>
            <div id="passReset3">Password</div>
            <input type="password" id="namebox"/></p>
            
            <p>
            <div id="passReset3">New Password</div>
            <input type="password" id="namebox2"/></p>
            <Link to="/">
                <button type="button" className="btn-send"><p-send>Create</p-send></button>
            </Link>
        </div>
    </div>
    

    );
  }
}
 

export default Reset3;
