import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { songs } from './context';
import store from './redux/store';
import { Provider } from 'react-redux';
import DataSongs from "./data/songs.json"
import thunk from"redux-thunk"
import { applyMiddleware } from 'redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <songs.Provider value={{DataSongs}}>
    <App />
    </songs.Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
