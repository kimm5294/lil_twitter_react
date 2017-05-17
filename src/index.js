import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timeline from './Timeline'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Timeline />,
  document.getElementById('tweets-container')
);
