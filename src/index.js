import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Expenses from './components/Expenses';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Expenses />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

