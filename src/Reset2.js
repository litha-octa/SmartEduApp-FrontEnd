import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./css/others/reset.css";
 
class Reset2 extends Component {
  render() {
    return (
    <div className="container-reset">
        <div id="box1-reset">
          <Link to="/Reset">
            <img src="assets/Back Icon.png" id="back" alt=" "/>
          </Link>
            <img className="orang" src="assets/orang2.png" alt=" "/>
        </div>
        <div id="box2-reset">
            <h1 id="reset-caption">Reset Password</h1>
            <h6 className="rsth6-1">Enter verification code we just sent to your email address</h6>
            <input type="text" id="verCode"/>
            <h6 className="rsth6-2">Didn’t receive a code? Resend</h6>
            <Link to="/Reset3">
            <button type="button" className="reset-btn-send"><p-send>Verify</p-send></button>
            </Link>
        </div>
    </div>
    

    );
  }
}
 

export default Reset2;
