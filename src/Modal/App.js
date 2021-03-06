import React, { Component } from 'react';
import Modal from "./notif";
import "../css/cssApp.css";

class App extends Component {

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
      <div className="click-notif">
        { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-shed"></div> : null }

        <button className="open-modal-btn" onClick={this.openModalHandler}><img src="assets/Notif Icon2.png" alt=" "/></button>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}>
        </Modal>
      </div>
    );
  }
}

export default App;