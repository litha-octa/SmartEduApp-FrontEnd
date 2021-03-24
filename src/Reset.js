import React, { Component } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import "./css/others/reset.css";
 
class Reset extends Component {
  render() {
    return (
    <div>
        <div className="col" id="box">
          <Link to="/">
            <img src="assets/Back Icon.png" id="back"/>
          </Link>
            <img className="orang" src="assets/orang.png"/>
        </div>
        <div class="col" id="box-2">
            <h1 id="reset">Reset Password</h1>
            <h6>Enter your email address linked to .this account.</h6>
            <h6 className="h6-2">We will send you the verification code to reset your password </h6>
            <div id="passReset3">Your Email</div>
            <input type="text" id="namebox"/>
            <Link to="/Reset2">
                <button type="button" className="btn-send"><p-send>send</p-send></button>
            </Link>
        </div>
    </div>
    

    );
  }
}
 

export default Reset;
