import React, { Component } from 'react';
import Modal from "./score";
import "../css/memberPop.css";

class Member extends Component {

  constructor() {
    super();

    this.state = {
      isShowing: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render () {
    return (
      <div className="click-member">
        { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-shed"></div> : null }

        <button className="modalMember" onClick={this.openModalHandler}><img src="assets/Member.png" alt=" "/></button>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}>
        </Modal>
      </div>
    );
  }
}

export default Member;