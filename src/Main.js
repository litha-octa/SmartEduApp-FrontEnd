import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";

import ResetInsertEmail from "./ResetPass/ResetInsertEmail.js";
import ResetOTP from "./ResetPass/ResetOTP.js";
import CreateNewPass from "./ResetPass/CreateNewPass.js";

import dashAllSchedule from "./Dashboard/dashAllSchedule.js";
import dashMySchedule from "./Dashboard/dashMyschedule.js";
import DashboardFas from "./Dashboard/DashboardFas";

import Profile from "./Profile/Profile";

import addNewClass from "./ActivityStudent/addNewClass";
import myClass from "./ActivityStudent/myClass";
import classDetailStu from "./ActivityStudent/classDetailStu";
import classProgress from "./ActivityStudent/classProgress";

import HeaderDash from "./component/HeaderDash";
import HeaderAct from "./component/HeaderAct";
import HeaderProf from "./component/HeaderProf";

import CreateNewClassdummy from "./ActivityFas/CreateNewClassdummy";
import CreateNewClass from "./ActivityFas/CreateNewClass";
import classDetailFas from "./ActivityFas/classDetailFas";
import classMember from "./ActivityFas/classMember";




class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/Register" component={Register} />

            {/* Reset Password */}
            <Route path="/ResetPass/ResetInsertEmail" component={ResetInsertEmail} />
            <Route path="/ResetOTP" component={ResetOTP} />
            <Route path="/CreateNewPass" component={CreateNewPass} />

            {/* Dashboard student,fasilitator & profile */}
            <Route path="/Dashboard/dashAllSchedule" component={dashAllSchedule} />
            <Route path="/dashMySchedule" component={dashMySchedule} />
            <Route path="/Dashboard/DashboardFas" component={DashboardFas} />
            <Route path="/Profile" component={Profile} />

            {/* Activity Student */}
            <Route path="/ActivityStudent/addNewClass" component={addNewClass} />
            <Route path="/myClass" component={myClass} />
            <Route path="/classDetailStu" component={classDetailStu} />
            <Route path="/classProgress" component={classProgress} />

            <Route path="/component/HeaderAct" component={HeaderAct} />
            <Route path="/component/HeaderProf" component={HeaderProf} />
            <Route path="/component/HeaderDash" component={HeaderDash} />

            {/* Activity Fasilitator */}
            <Route path="/ActivityFas/CreateNewClass" component={CreateNewClass} />
            <Route path="/ActivityFas/CreateNewClassdummy" component={CreateNewClassdummy} />
            <Route path="/classDetailFas" component={classDetailFas} />
            <Route path="/classMember" component={classMember} />

          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;