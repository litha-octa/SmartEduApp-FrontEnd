import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";

import ResetInsertEmail from "./ResetPass/ResetInsertEmail.js";
import ResetOTP from "./ResetPass/ResetOTP.js";
import CreateNewPass from "./ResetPass/CreateNewPass.js";

import DashboardStudent from "./Dashboard/component/DashboardStudent.js";
import DashboardFas from "./Dashboard/component/DashboardFas";
import Dashboard from "./Dashboard/Dashboard";

import Profile from "./Profile/Profile";

import Activity from "./Activity";
import MyClass from "./Activity/ActivityStudent/MyClass";
import ClassDetailStudent from "./Activity/ActivityStudent/ClassDetailStudent";
import CreateNewClass from './Activity/ActivityFas/CreateNewClass';
import progressDummy from "./Activity/component/progressDummy";




class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/Register" component={Register} />

            {/* Reset Password */}
            <Route path="/ResetInsertEmail" component={ResetInsertEmail} />
            <Route path="/ResetOTP" component={ResetOTP} />
            <Route path="/CreateNewPass" component={CreateNewPass} />

            {/* Dashboard student,fasilitator*/}
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/DashboardStudent" component={DashboardStudent} />
            <Route path="/DashboardFas" component={DashboardFas} />

            {/*Profile*/}
            <Route path="/Profile" component={Profile} />

            {/* Activity */}
            <Route path="/Activity" component={Activity} />
            <Route path="/MyClass" component={MyClass} />
            <Route path="/ClassDetailStudent" component={ClassDetailStudent}/>
            <Route path="/CreateNewClass" component={CreateNewClass}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;