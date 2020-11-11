import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TreeSelect from './Components/TreeSelect';
import Modal from './Components/Modal';
import 'modern-css-reset/dist/reset.min.css';
import './index.css';

const arr = ['Neo', 'Trinity', 'Morpheus', 'Tank'];

class App extends Component {
  state = { options: arr, showModal: false }

  handleCancel = () => this.setState({ showModal: false });

  handleOk = () => {
    console.log('OK!');
    this.setState({ showModal: false });
  }

  render() {
    const { options, showModal } = this.state;
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
            onClick={() => this.setState({ showModal: !showModal })}
          >
            Modal
          </button>
          {showModal && (
          <Modal
            hideModal={this.handleCancel}
            showModal={showModal}
            closable
            title={<p>My Fancy Modal</p>}
            footer={[
              <button
                key="back"
                type="button"
                onClick={this.handleCancel}
              >
                Return
              </button>,
              <button
                key="submit"
                type="button"
                onClick={this.handleOk}
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
}
ReactDOM.render(<App />, document.querySelector('#root'));
