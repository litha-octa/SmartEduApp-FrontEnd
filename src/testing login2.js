// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import "./css/login/login.css";
// import ModalComp from './component/modalComp';
// import 'bootstrap/dist/css/bootstrap.min.css';


// //class Login extends Component {
//   function Login(props) {
//   const { history, isLogin, onClickAuth } = props;
//  // render() { 
//   return (
//       <div id="body-login">
//         <div className="container-login">
//           <div className="one"></div>

//           <div className="two">
//             <div id="title-login">Login</div>
//             <form onSubmit={this.submitHandler}>

//               <div id="label">Username or Email</div>
//               <input
//                 type='text'
//                 id='input'
//                 placeholder='user@email.com'
//                 name='email'
//                onChange={this.emailHandler}
//               />

//               <div id="label"> Password</div>
//               <input
//                 type='password'
//                 id='input'
//                 name='password'
//                 placeholder='password'
//                 onChange={this.passwordHandler}
//               />

//               <Link to="/Reset">
//                 <label id="toReset">
//                   Forgot password?
//                  </label>
//               </Link>


//             <button onClick={onClickAuth}>
//           <p>{isLogin ? "Logout" : "Login"}</p>
//         </button>

//               <button type="submit" id='btn-login' onClick={() => history.push("/Dashboard")}>Login</button>

//               <button
//                 type='submit'
//                 id="btn-google"
//               >
//                 <img src="assets/logogoogle.png" className="google" alt="logo" />
//                 <div id="text-btn-w-google"> Login with google</div>
//               </button>
//             </form>

//             <div id="linkToRegist">
//               New User ?
//               <Link to="/Register" className="regist-link">Register</Link>
//             </div>

//           </div>
//           <div className="three"></div>

//           <ModalComp
//             header='Login gagal !'
//             msg='Email atau Password salah'
//             show={this.state.modalShow}
//             onHide={() => this.setState({ modalShow: false })}
//             variant='danger'
//             footermsg='Try Again' />

//         </div>
//       </div>

//     );
//   }


// export default Login;