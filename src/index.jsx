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

  handleOk = () => console.log('OK!');

  render() {
    const { options, showModal } = this.state;
    return (
      <div className="app">
        <TreeSelect
          values={options}
          placeholder="Who is the one in the Matrix?"
        />
        <div className="modal-box">
          <button
            type="button"
            onClick={() => this.setState({ showModal: !showModal })}
          >
            Open Modal
          </button>
          {showModal && (
          <Modal
            closable
            title={<h2>Title</h2>}
            footer={[
              <button key="back" type="button" onClick={this.handleCancel}>
                Return
              </button>,
              <button key="submit" type="button" onClick={this.handleOk}>
                Submit
              </button>,
            ]}
          >
            <p>This is some content...</p>
          </Modal>
          )}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
