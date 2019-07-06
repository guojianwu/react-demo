import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
// const ThemeContext = React.createContext('light');
axios.defaults.baseURL = 'https://sxy.edsmall.com/api';
ReactDOM.render(<App />, document.getElementById('root'));



