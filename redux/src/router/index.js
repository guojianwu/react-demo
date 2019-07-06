import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import App from '../App';
import A from '../components/A'
const MyRouter =()=> (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route  path="/aa" component={A} />
      </Switch>
    </div>
  </Router>
)
export default MyRouter;