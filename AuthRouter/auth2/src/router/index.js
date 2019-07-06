import  {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import React from "react";
import App from '../App';
import Login from '../pages/Login'
import User from '../pages/User'
import Info from '../pages/Info'
import Home from '../pages/Home'
import Admin from '../pages/admin/index'
import About from '../pages/admin/About'
import List from '../pages/admin/List'








export default function IRouter (){
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <App>
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={User}/>
          <Route path="/info" component={Info}/>
          <Route path="/admin" render={()=>
            <Admin>
              <Route exact path="/admin" component={About}/>
              <Route path="/admin/list" component={List}/>
            </Admin>
        }/>
        
        </App>
      </Switch>
    </Router>
  )
}