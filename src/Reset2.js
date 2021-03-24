import React, { Component } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import "./css/others/reset.css";
 
class Reset2 extends Component {
  render() {
    return (
    <div>
        <div className="col" id="box">
          <Link to="/Reset">
            <img src="assets/Back Icon.png" id="back"/>
          </Link>
            <img className="orang" src="assets/orang2.png"/>
        </div>
        <div class="col" id="box-2">
            <h1 id="reset">Reset Password</h1>
            <h6>Enter verification code we just sent to your email address</h6>
            <input type="text" id="verCode"/>
            <h6 className="h6-2">Didn’t receive a code? Resend</h6>
            <Link to="/Reset3">
            <button type="button" className="btn-send"><p-send>Verify</p-send></button>
            </Link>
        </div>
    </div>
    

    );
  }
}
 

export default Reset2;
