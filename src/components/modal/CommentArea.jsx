import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from './ModalBody';
import { useState } from 'react';



function CommentArea(book) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [getBook, setGetBook] = useState(book)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Comment Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ModalBody
              book = {getBook.book}
            />
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default CommentArea;