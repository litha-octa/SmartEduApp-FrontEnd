import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalComp(props) {
    return (
      <Modal
        animation={false}
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{
            justifyContent: "center",
            backgroundColor: "#5784BA",
            color: "white",
            borderRadius: 20,
            margin: 2,
            fontFamily: "Kanit",
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {props.header}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            textAlign: "center",
            fontFamily: "Kanit",
            fontSize: 20,
          }}
        >
          <p
            style={{
              margin: "0",
            }}
          >
            {props.msg}
          </p>
        </Modal.Body>
        <Modal.Footer
          style={{
            justifyContent: "center",
            height: "fit-content",
            paddingBottom: "0",
            fontFamily: "Kanit",
          }}
        >
          <Button
            onClick={props.onHide}
            variant={props.variant}
            style={{
              fontSize: "1rem",
              height: "fit-content",
              borderRadius:20,
              padding:2,
              width:100,
              height: 40,
            }}
          >
            {props.footermsg}
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalComp;