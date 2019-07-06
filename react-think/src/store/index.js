import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from "redux"
import thunk from 'redux-thunk'
import reducer from "./reducer/reducer"
import reducer_2 from './reducer_2/reducer'

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(combineReducers({reducer,reducer_2}),enhancer);

export default store;