import React from 'react';
import { Router, Route,hashHistory,IndexRoute,Redirect,browserHistory} from 'react-router'

// import App from '@/App';
import About from '@/page/one/About';
import Inbox from '@/page/one/Inbox';
import Message from '@/page/one/Message';
import One from '@/page/one/One'
import Detail from '@/page/two/Detail'
import Info from '@/page/two/Info'
import Two from '@/page/two/Two'
import Users from './page/two/Users';

const routeConfig=[
  {
    path:'/',
    component: One,
    indexRoute: { component: About },
    // onChange:function(a){
    //   console.log("aaaaaaaa",a)
    // },
    childRoutes:[
      {
        path:'about',
        component:About
      },
      {
        path:'inbox',
        component:Inbox,
        childRoutes:[
          {
            path:'/messages/:id',
            component:Message
          },
          {
            path:'messages/:id',
            onEnter:function(nextState, replaceState){
              // console.log(nextState, replaceState)
              // if(true){
              //   replaceState('/two');
              //   return;
              // }
              replaceState('/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  },
  {
    path:'/two',
    component:Two,
    indexRoute:{component:Detail},
    state:{name:'two'},
    // onLeave:function(nextState, replaceState){
    //   console.log(nextState, replaceState)
    // },
    childRoutes:[
      {
        path: 'detail', 
        component: Detail,
        state:{name:'detail'},
      },
      {
        path: 'info', 
        component: Info,
        state:{name:'info'},
        childRoutes:[
          {
            path: 'users/:id', 
            component: Users
          }
        ]
      }
    ] 
  }
]

function test(a){
  console.log('aaaaaaaaaa',a)
}
hashHistory.listen((to) => {
  console.log('totototototototo',to)
})
export default (
  <Router history={hashHistory} routes={routeConfig}></Router>
)