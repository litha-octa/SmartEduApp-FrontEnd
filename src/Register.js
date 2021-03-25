import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./css/register.css";
 
class Register extends Component {
  render() {
    return (
			
			<div>
          <h1>Register</h1>
          <div id="caption">Username</div>
          <input type="text" id="label-input"/>
          <div id="caption">Email</div>
          <input type="text" id="label-input"/>
          <div id="caption">Password</div>
          <input type="text" id="label-input"/>
          <div id="caption">Confirm Password</div>
          <input type="text" id="label-input"/>

          <button type="button" className="btn-regist"> Register</button>
          
          <button type="button" className="btn-googleregist">
                  <img src="assets/logogoogle.png" className="google" alt=" "/>
                  Register with google
              </button>

              <div id="linkToLogin">
                  Already have account ?
                    <Link to ="/" className="linkto">Login</Link>
              </div>

  			</div>
 			);
  }
}
 

export default Register;