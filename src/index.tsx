import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

// First we get the viewport width & height and we multiply them by 1% to get a value for a vw & vh unit
let vw = document.documentElement.clientWidth * 0.01;
let vh = document.documentElement.clientHeight * 0.01;
// Then we set the value in the --vw, --vh custom properties to the root of the document
document.documentElement.style.setProperty('--vw', `${vw}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
