import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import "./component/login.css";
import ModalComp from '../component/ModalComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import {login} from "../redux/ActionCreators/login";
import { loginReducer } from "../redux/Reducers/login";
import axios from "axios";


class Login extends Component {
  state = {
    name: "",
    password: "",
    modalShow: false,
  };

  // let history = useHistory();

  nameHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  openModalHandler = () => {
    this.setState({
      modalShow: true,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.loginReducer.isPending) {
      console.log("Loading...");
    } else if (this.props.loginReducer.isFulfilled) {
      if (prevProps.loginReducer !== this.props.loginReducer) {
        localStorage.setItem("token", this.props.loginReducer.result.token);

        this.props.history.push("/Dashboard");
      }
    } else if (this.props.loginReducer.isRejected) {
      if (
        prevProps.loginReducer !== this.props.loginReducer &&
        prevState.modalShow === false
      ) {
        this.setState({
          modalShow: true,
        });
      }
    }
  }

  loginHandler = (e) => {
    e.preventDefault();
    const dataLogin = {
      name: this.state.name,
      email: this.state.name,
      password: this.state.password,
    };
    //this.props.login(dataLogin);

    // this.props.getUser();
  //};

  // submitHandler = (a) => {
  //   a.preventDefault();
  //   let dataLogin = {
  //     name: this.state.name,
  //     password: this.state.password,
  //   };

    axios
      .post("http://localhost:8300/api/v1/auth/", dataLogin)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.result.token.payload);
          this.props.history.push("/Dashboard");
        }
      })
      .catch((err) => {
        this.setState({
          modalShow: true,
        });
      });
   };

  render() {
    return (
      <div id="body-login">
        <div className="two">
          <div id="title-login">Login</div>

          <div id="label">Username or Email</div>
          <input
            type="text"
            className="input"
            placeholder="user@email.com"
            onChange={this.nameHandler}
          />

          <div id="label"> Password</div>
          <input
            type="password"
            className="input"
            placeholder="password"
            onChange={this.passwordHandler}
          />

          <Link to="/ResetInsertEmail">
            <label id="toReset">Forgot password?</label>
          </Link>

          <button
            type="submit"
            id="btn-login"
            value="login"
            onClick={this.loginHandler}
          >
            Login
          </button>

          <button
            type="submit"
            id="btn-google"
            // onClick={() => getUser(`${this.nameHandler}`)}
          >
            <p id="text-btn-w-google">
              <img src="assets/logogoogle.png" className="google" alt="logo" />
              Login with google
            </p>
          </button>

          <div id="linkToRegist">
            New User ?
            <Link to="/Register" className="regist-link">
              Register
            </Link>
          </div>
        </div>

        <ModalComp
          header="Login gagal !"
          msg="Email atau Password salah"
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          variant="primary"
          footermsg="Try Again"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const{getUserReducer, loginReducer}= state;
  return{
    getUserReducer,loginReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login : (data) => dispatch (login('http://localhost:8300/api/v1/auth/',data)),
    // getUser: (param) => dispatch(getUser(`http://localhost:8300/api/v1/usr/${param}`)),
    
  };
};
const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
export default ConnectedLogin;