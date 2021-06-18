import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./component/login.css";
import ModalComp from '../component/ModalComp';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends Component {
  state = {
    name: null,
    password: null,
    modalShow: false,
  };
  nameHandler = (a) => {
    this.setState({
      name: a.target.value,
    });
  };
  passwordHandler = (a) => {
    this.setState({
      password: a.target.value,
    });
  };
  openModalHandler = () => {
    this.setState({
      modalShow: true,
    });
  };
  submitHandler = (a) => {
    a.preventDefault();
    let dataLogin = {
      name: this.state.name,
      password: this.state.password,
    };

    axios
      .post('http://localhost:8300/api/v1/auth/', dataLogin)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.result.token.payload)
            this.props.history.push('/Dashboard')
        };
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
            onClick={this.submitHandler}
          >
            Login
          </button>

          <button type="submit" id="btn-google">
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


export default Login;