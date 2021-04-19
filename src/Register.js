import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./css/register/register.css";
import { connect } from 'react-redux';
import ModalComp from './component/ModalComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from './redux/ActionCreators/regis';



function Register(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
  const [role_id, setRole_id] = useState();
  const [nameIsTaken, setNameIsTaken] = useState(false);
  const [emailIsTaken, setEmailIsTaken] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [requiredTxt, setRequiredTxt] = useState(false);

  const { registerReducer, userRegister } = props;

  const nameHandler = (e) => {
    setName(e.target.value);
    setNameIsTaken(false);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setEmailIsTaken(false);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const rePasswordHandler = (e) => {
    setRePassword(e.target.value);
  };
  const roleidHandler = (e) => {
    setRole_id(e.target.value);
  };

  let history = useHistory();

  const regHandler = (e) => {
    e.preventDefault();
    if (password === repassword) {
      const dataUser = {
        name: name,
        email: email,
        password: password,
        role_id: role_id,
      };

      userRegister(dataUser);
    }
  };

  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      if (registerReducer.isPending) {
        console.log('Loading');
      } else if (registerReducer.isFulfilled) {
        setModalShow(true);
      } else if (registerReducer.isRejected) {
        const conflict =
          props.registerReducer.result.payload;

        if (conflict === 'name') {
          setNameIsTaken(true);
        } else if (conflict === 'email') {
          setEmailIsTaken(true);
        } else {
          setRequiredTxt(true);
        }
      }
    }
  }, [
    registerReducer.isFulfilled,
    registerReducer.isPending,
    registerReducer.isRejected,
    props,
  ]);

  let match;

  if (password === repassword && password && repassword) {
    match = true;
  } else if (password !== repassword && password && repassword) {
    match = false;
  }
  return (

    <div id="body-regist">
      <h1 id="title-regist">Register</h1>

      <div id="caption">Username</div>
      <input type="text" className="label-input-register" placeholder="username" onChange={nameHandler} />
      {nameIsTaken ? (
        <small
          className=' password d-flex justify-content-start'
          style={{ color: 'red', marginTop: '-10px' }}
        >
          Username has already been taken.
        </small>
      ) : requiredTxt && !name ? (
        <small
          className=' password d-flex justify-content-start'
          style={{ color: 'red', marginTop: '-10px' }}
        >
          Username is required
        </small>
      ) : null}

      <div id="caption">Email</div>
      <input type="text" className="label-input-register" placeholder="email" onChange={emailHandler} />
      {emailIsTaken ? (
        <small
          className=' password d-flex justify-content-start'
          style={{ color: 'red', marginTop: '-10px' }}
        >
          Email has already been taken.
        </small>
      ) : requiredTxt && !email ? (
        <small
          className=' password d-flex justify-content-start'
          style={{ color: 'red', marginTop: '-10px' }}
        >
          Email is required
        </small>
      ) : null}

      <div id="caption">Password</div>
      <input type="password" className="label-input-register" placeholder="password" onChange={passwordHandler} />
      {' '}
      {requiredTxt && !password ? (
        <small
          className=' password d-flex justify-content-start'
          style={{ color: 'red', marginTop: '-10px' }}
        >
          Password is required
        </small>
      ) : null}

      <div id="caption">Confirm Password</div>
      <input type="password" className="label-input-register" placeholder="Confirm password" onChange={rePasswordHandler} />
      {match ? (
        <small className='match password d-flex justify-content-start'>
          Password match
          <img src="assets/matchIcon.png" alt='match icon' />
        </small>
      ) : match === undefined ? (
        <small className='notmatch password d-flex justify-content-start'></small>
      ) : (
        <small className='notmatch password d-flex justify-content-start'>
          Password not match
        </small>
      )}
      <div id="role-selector">Helo !, Im a ..
        <select id="role-drop" onChange={roleidHandler}>
        <option>...</option>
          <option value='1' >Student</option>
          <option value='2' >Teacher</option>
        </select>
      </div >


      <button type="button" className="btn-regist" onClick={regHandler}> Register</button>

      <button type="button" className="btn-googleregist">
        <img src="assets/logogoogle.png" className="google" alt=" " />
        <div id="registwith">Register with google</div>
      </button>

      <div id="linkToLogin">
        Already have account ?
                    <Link to="/" className="linktologin">Login</Link>
      </div>
      <ModalComp
        header='Register Success'
        msg='Account has been successfully registered'
        show={modalShow}
        onHide={() => history.push('/')}
        variant='success'
        footermsg='Login Now'
      />

    </div >
  );
}
const mapStateToProps = (state) => {
  const { registerReducer } = state;
  return {
    registerReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (data) =>
      dispatch(register('http://localhost:8300/api/v1/auth/regis/', data)),
  };
};

const ConnectedRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default ConnectedRegister;
