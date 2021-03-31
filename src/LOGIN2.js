import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./css/login/login.css";
 
class Login extends Component {
  render() {
    return (
  <div id="body-login">
	<div className="container-login">
    <div className="one"></div>
    <div className="two">
      <div id="title-login">Login</div>
        <div id="label">Username or Email</div>
          <input type="text" id = "input" align="center"/>
        <div id = "label"> Password</div>
          <input type="password" id = "input"/><br/>
            <Link to="/Reset" id="toReset">
                    Forgot password?
            </Link>
              <Link to="/Dashboard">
                <button type="button" className="btn-login">
                  Login
                </button>
              </Link>
                <button type="button" className="btn-google">
                 <img src="assets/logogoogle.png" className="google" alt="logo"/>
                    <div id="text-btn-w-google"> Login with google</div>
                </button>
                <div id="linkToRegist">
                    New User ?
                      <Link to ="/Register" className="regist-link">Register</Link>
                </div>
  </div>
    <div className="three"></div>
  </div>
  </div>
			
 			);
  }
}
 

export default Login;