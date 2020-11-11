import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TreeSelect from './Components/TreeSelect';
import Modal from './Components/Modal';
import 'modern-css-reset/dist/reset.min.css';
import './index.css';

const arr = ['Neo', 'Trinity', 'Morpheus', 'Tank'];
const title = 'Title.';
const content = 'Some content';
const footer = 'Footer';

class App extends Component {
  state = { options: arr }

  render() {
    const { options } = this.state;
    return (
      <div className="app">
        <TreeSelect values={options} placeholder="Who is the one?" />
        <Modal />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
