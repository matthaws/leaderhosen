import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store';
import {initReactDevise} from 'react-devise';



document.addEventListener('DOMContentLoaded', () => {
  const {clientResourceName} = initReactDevise()();
  let store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});
