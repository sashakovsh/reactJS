import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const msgText = 'Hello, World';

ReactDOM.render(
  <React.StrictMode>
    <App text={msgText} />
  </React.StrictMode>,
  document.getElementById('root')
);