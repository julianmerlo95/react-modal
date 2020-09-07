import React from 'react';
import Modal from 'react-modal';
import './modal.sass';
Modal.setAppElement('#root');

const ShowModal = ({ showModalHandler, valueModal }) => {
  return (
    <div>
      <Modal
        onRequestClose={showModalHandler}
        isOpen={valueModal}
        className="Modal"
        overlayClassName="Overlay">
        <div>
          <h1>Modal</h1>
          <button style={{cursor:'pointer'}}
            onClick={showModalHandler}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
};

export default ShowModal
