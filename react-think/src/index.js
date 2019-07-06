import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import 'element-theme-default';
import axios from "axios"
import App from './App';
import store from "./store"
axios.defaults.headers.common['token'] = '123545484548-44454484515';
ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));
