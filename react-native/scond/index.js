/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Global from './src/Global'
import App from './App';
// import axios from 'axios';
import {name as appName} from './app.json';
// axios.create({
//   baseURL: 'https://www.guojianwu.cn'
// });
AppRegistry.registerComponent(appName, () => App);
