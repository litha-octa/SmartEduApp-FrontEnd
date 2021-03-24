import React, { Component } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import "./css/login.css";
 
class Login extends Component {
  render() {
    return (
			
			<div>
          <h1>Login</h1>
              <div id = "username-email">
                  Username or Email
              </div>

              <input type="text" name="username" id = "label-username"/>
                  <div className="name">
              </div>

              <div id = "password">
                  Password
              </div>

             	<input type="password" id = "label-password" className="titik"/>

              <Link to="/Reset">
            	<div className="linkToReset">
                  forgot password?
              </div>
              </Link>
              <br/>
              
              <Link to="/Dashboard">
                  <button type="button" className="btn-login">
                      Login
                  </button>
              </Link>
           		<button type="button" className="btn-google">
            	     <img src="assets/logogoogle.png" className="google"/>
                    Login with google
              </button>

              <div id="linkToLogin">
                  New User ?
                    <Link to ="/Register" className="linkto">Register</Link>
              </div>

  			</div>
 			);
  }
}
 

export default Login;