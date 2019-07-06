import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
import App from './App';
import appState from './store/store' 
import appStateTest from "./store/store-test"
ReactDOM.render(
  <Provider appStateTest={appStateTest} appState={appState}>
    <App />
  </Provider>

, document.getElementById('root'));

