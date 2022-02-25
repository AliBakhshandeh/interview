import { Button, Modal } from "react-bootstrap";

export default function ModalGenerator(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Append New User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* show data on modal */}
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        {/* close modal */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
