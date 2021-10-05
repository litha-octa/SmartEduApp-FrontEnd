import React, { useRef,useEffect } from "react";
import "./component/dashboard.css";
import DashboardStudent from "./component/DashboardStudent";
import DashboardFas from "./component/DashboardFas";
import HeaderDash from "../component/HeaderDash";
import SideDashboard from "../component/SideDashboard";
import {connect} from "react-redux";
import {getUser} from "../redux/ActionCreators/login";



function Dashboard(props) {
  useEffect(() => {props.getUser(props.loginReducer.result.data.email)},[props])
  //  const ref = useRef();
  // useEffect(() => {
  //   if (!ref.current) {
  //     getUser();
  //     ref.current = true;
  //   } else {
  //     if (props.getUserReducer.isPending) {
  //       console.log("Loading...");
  //     } else if (props.getUserReducer.isFulfilled) {
  //       localStorage.setItem(
  //         "name",
  //         props.getUserReducer.currentUser.name
  //       );
  //       localStorage.setItem("role", props.getUserReducer.currentUser.role);
  //       localStorage.setItem("avatar", props.getUserReducer.currentUser.avatar);
  //     } else if (props.getDataUserReducer.isRejected) {
  //       console.log("Failed");
  //     }
  //   }
  // });
  
  return(
      <div id="body-dash">
      <HeaderDash />
      <SideDashboard />
      <div className="container-dash">
        <div className="contentdash1">
          <div className="grid-item" id="dashnews">
            <label className="dash-news">News</label>
            <img src="assets/Carousel.png" className="dash-news-pics" alt=" " />
          </div>
          <div id="dashboardContentFor">
            {props.loginReducer.result.data.role === "student" ? <DashboardStudent/> : <DashboardFas/> 
            }
          </div>
        </div>

        <div className="contentdash2">
          <div className="grid-item">
            <p className="mesagges">Mesagges</p>
            <div id="search-bar">
              <img src="assets/Search Icon.png" id="search-icon" alt=" " />
              <input type="text" placeholder="search" id="search-in-chats" />
            </div>
            <img src="assets/Nissa Sabyan.png" className="chats" alt=" " />
            <br />
            <img src="assets/Rio Dewanto.png" className="chats" alt=" " />
            <br />
            <img src="assets/Group 21.png" className="chats" alt=" " />
            <br />
            <img src="assets/Isyana Sarasvati.png" className="chats" alt=" " />
            <br />
            <img src="assets/Tompi.png" className="chats" alt=" " />
            <br />
            <img src="assets/MPC.png" className="chats" alt=" " />
            <br />
            <img src="assets/Peppy.png" className="chats" alt=" " />
            <br />
            <img src="assets/Sandra Dewi.png" className="chats" alt=" " />
            <br />
            <img src="assets/Reza Rahadian.png" className="chats" alt=" " />
            <br />
            <img src="assets/Group 23.png" className="chats" alt=" " />
            <br />
            <img src="assets/Raisa.png" className="chats" alt=" " />
            <br />
            <img src="assets/dr. Adrian.png" className="chats" alt=" " />
            <br />
            <img src="assets/Uus.png" className="chats" alt=" " />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { loginReducer } = state;
  return {
    loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (email) =>
      dispatch(getUser(`http://localhost:8300/api/v1/usr/${email}`)),
  };
};

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
export default ConnectedDashboard;
