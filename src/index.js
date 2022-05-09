import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware,compose,createStore} from 'redux'


import App from './App';
import { Provider } from "react-redux";



import thunk from "redux-thunk";
import { Red } from './reducers/index';
const store = createStore(Red,applyMiddleware(compose(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


