import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider,} from 'react-redux';
import store from './store';



const firebaseConfig = {
  apiKey: "AIzaSyAXt-6WIYvzdhB0eehuuQLxPRANMpBVFHo",
  authDomain: "chat-app-f628c.firebaseapp.com",
  projectId: "chat-app-f628c",
  storageBucket: "chat-app-f628c.appspot.com",
  messagingSenderId: "257942431110",
  appId: "1:257942431110:web:2974263fda87e19614b807",
  measurementId: "G-G2JTB35J51"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
