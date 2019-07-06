import React from 'react';
import { Router, Route,hashHistory,IndexRoute,Redirect} from 'react-router'

// import App from '@/App';
import About from '@/page/one/About';
import Inbox from '@/page/one/Inbox';
import Message from '@/page/one/Message';
import One from '@/page/one/One'
import Detail from '@/page/two/Detail'
import Info from '@/page/two/Info'
import Two from '@/page/two/Two'
import Users from './page/two/Users';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={One} >
      <IndexRoute component={About}/>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
          <Route path="/messages/:id" component={Message} />
          <Redirect from="messages/:id" to="/messages/:id" />
      </Route>
    </Route>
    <Route path="/two" component={Two} >
      <IndexRoute component={Detail}/>
      <Route path="detail" component={Detail} />
      <Route path="info" component={Info}>
          <Route path="users/:id" component={Users} />
      </Route>
    </Route>
  </Router>
)