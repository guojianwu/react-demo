import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import store from './redux/'
import MyRouter from './router'
// let store=createStore(redux);
ReactDOM.render((
    <Provider store={store}>
      <MyRouter/>
    </Provider>
), document.getElementById('root'));

