import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware,compose,createStore} from 'redux'

import App from './App';
import { Provider } from "react-redux";
import reducers from './reducers';

import thunk from "redux-thunk";
const store = createStore(reducers,applyMiddleware(compose(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

