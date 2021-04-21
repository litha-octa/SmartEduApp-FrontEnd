import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/others/reset.css";

class Reset3 extends Component {
  render() {
    return (
      <div className="container-reset">
        <div id="box1-reset">
          <Link to="/Reset2">
            <img src="assets/Back Icon.png" id="back" alt=" " />
          </Link>
          <img className="orang" src="assets/orang2.png" alt=" " />
        </div>
        <div id="box2-reset">
          <h1 id="reset-caption">Create New Password</h1>
          <h6 className="rsth6-1">Your new password must be different from previous used password!</h6>
          <h6 className="rsth6-2">We will send you the verification code to reset your password </h6>

          <div id="passReset3">Password</div>
          <input type="password" id="input-new-pass" />


          <div id="passReset3">Confirm Password</div>
          <input type="password" id="input-new-pass" />
          <Link to="/">
            <button type="button" className="reset-btn-send">Create</button>
          </Link>
        </div>
      </div>


    );
  }
}


export default Reset3;
