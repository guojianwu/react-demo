import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'
import List from './components/List'
import Item from "./components/Item"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super();
    console.log(props)
  }
  render() {
    return (
      <div className="App">
        <Link to="/aa">aa</Link>
        <h1>{this.props.state}</h1>
        <button onClick={this.props.action.jia}>+</button>
        <button onClick={this.props.action.jian}>-</button>
        <hr/>
        <div>
          <p>List</p>
          <List/>
          <Item/>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      state
    }
  },
  (dispatch) => {
    return {
      action: bindActionCreators(actions, dispatch)
    }
  }
)(App);
