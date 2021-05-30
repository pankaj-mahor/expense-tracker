import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExpenseItem from './components/ExpenseItem';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App />
    <ExpenseItem />
  </React.StrictMode>,
  document.getElementById('root')
);

