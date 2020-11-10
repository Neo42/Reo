import React from 'react';
import ReactDOM from 'react-dom';
import TreeSelect from './Components/TreeSelect';
import 'modern-css-reset/dist/reset.min.css';
import './index.css';

const arr = ['Neo', 'Trinity', 'Morpheus', 'Tank'];

const App = () => (
  <div>
    <TreeSelect values={arr} />
  </div>
);
ReactDOM.render(<App />, document.querySelector('#root'));
