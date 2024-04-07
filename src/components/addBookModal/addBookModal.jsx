import React from 'react'
import Modal from 'react-bootstrap/Modal';
import BookForm from './BookForm.jsx'
const AddBookModal = () => {

  return (
    <>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <BookForm/>
          </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  )
}

export default AddBookModal;