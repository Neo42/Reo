import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TreeSelect from './Components/TreeSelect';
import Modal from './Components/Modal';
import 'modern-css-reset/dist/reset.min.css';
import './index.css';

const arr = ['Neo', 'Trinity', 'Morpheus', 'Tank'];

function App() {
  const [options] = useState(arr);
  const [showModal, setShowModal] = useState(false);
  const handleCancel = () => setShowModal(false);
  const handleOk = () => {
    console.log('Submitted.');
    setShowModal(false);
  };
  return (
    <div className="app">
      <div className="tree-select-box">
        <TreeSelect
          values={options}
          placeholder="Who is the one in the Matrix?"
        />
      </div>
      <div className="modal-box">
        <button
          className="modal-button"
          type="button"
          onClick={() => setShowModal(!showModal)}
        >
          Modal
        </button>
        {showModal && (
          <Modal
            hideModal={handleCancel}
            showModal={showModal}
            closable
            title={<p>My Fancy Modal</p>}
            footer={[
              <button
                key="back"
                type="button"
                onClick={handleCancel}
              >
                Return
              </button>,
              <button
                key="submit"
                type="button"
                onClick={handleOk}
              >
                Submit
              </button>,
            ]}
          >
            <p>This is some content...</p>
            <p>This is some content...</p>
            <p>This is some content...</p>
          </Modal>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
