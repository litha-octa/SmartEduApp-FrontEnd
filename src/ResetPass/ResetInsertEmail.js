import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/others/reset.css";

class Reset extends Component {
  render() {
    return (
      <div className="container-reset">
        <div id="box1-reset">
          <Link to="/">
            <img src="assets/Back Icon.png" id="back" alt=" " />
          </Link>
          <img className="orang" src="assets/orang.png" alt=" " />
        </div>
        <div id="box2-reset">
          <h1 id="reset-caption">Reset Password</h1>
          <h6 className="rsth6-1">Enter your email address linked to .this account.</h6>
          <h6 className="rsth6-2">We will send you the verification code to reset your password </h6>
          <div id="passReset1">Your Email</div>
          <input type="text" id="inputemail" />
          <Link to="/ResetOTP">
            <button type="button" className="reset-btn-send">Send</button>
          </Link>
        </div>
      </div>


    );
  }
}


export default Reset;
