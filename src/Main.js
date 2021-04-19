import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Login from "./LOGIN2";
import Register from "./Register";
import Reset from "./Reset.js";
import Reset2 from "./Reset2.js";
import Reset3 from "./Reset3.js";
import Dashboard from "./Dashboard.js";
import Dashboard2 from "./Dashboard2.js";
import DashboardFas from "./DashboardFas";
import Profile from "./Profile";
import Activity from "./Activity";
import Activity2 from "./Activity2";
import Activity3 from "./Activity3";
import Activity4 from "./Activity4";
import CreateNewClass from "./CreateNewClass";
import HeaderDash from "./component/HeaderDash";
import HeaderAct from "./component/HeaderAct";
import HeaderProf from "./component/HeaderProf";
import CreateNewClassdummy from "./CreateNewClassdummy";




class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Reset" component={Reset} />
            <Route path="/Reset2" component={Reset2} />
            <Route path="/Reset3" component={Reset3} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Dashboard2" component={Dashboard2} />
            <Route path="/DashboardFas" component={DashboardFas} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Activity" component={Activity} />
            <Route path="/Activity2" component={Activity2} />
            <Route path="/Activity3" component={Activity3} />
            <Route path="/Activity4" component={Activity4} />
            <Route path="/CreateNewClass" component={CreateNewClass} />
            <Route path="/component/HeaderAct" component={HeaderAct} />
            <Route path="/component/HeaderProf" component={HeaderProf} />
            <Route path="/component/HeaderDash" component={HeaderDash} />
            <Route path="/CreateNewClassdummy" component={CreateNewClassdummy} />

          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;