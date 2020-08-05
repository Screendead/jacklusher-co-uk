import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance';
import 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyDXipDtVoi6fdY7k8mhxTlaF60m7aS41O8",
  authDomain: "jacklusher.firebaseapp.com",
  databaseURL: "https://jacklusher.firebaseio.com",
  projectId: "jacklusher",
  storageBucket: "jacklusher.appspot.com",
  messagingSenderId: "973424570945",
  appId: "1:973424570945:web:ca51407f3bee9e4c2d0cc0",
  measurementId: "G-8Z8KLM2M3S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.performance();
firebase.analytics();

// First we get the viewport height and we multiply it by 1% to get a value for a vh unit
let vw = document.documentElement.clientWidth * 0.01;
let vh = document.documentElement.clientHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
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
