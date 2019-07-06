
import React from 'react';
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Login from '@/page/Login.js'
import Regist from '@/page/Regist'
import AuthRouter from '@/page/AuthRouter'
import Home from '@/page/auth/Home/Home.js'
import List from '@/page/auth/List/List'
const MyRouter =()=> (
  <Router>
    <div>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path='/regist' component={Regist}></Route>
        <AuthRouter exact   path="/" component={Home}></AuthRouter>
        <AuthRouter path="/list" component={List}></AuthRouter>
      </Switch>
    </div>
  </Router>
)
export default MyRouter;