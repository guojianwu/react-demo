import React from "react"
import { Link } from 'react-router'
// import { One } from '@/page/One';

class One extends React.Component{
    render(){
       return (
        <div>
          <li><Link to="/two">page2</Link></li>
          <ul>
            {/* <li><Link to="/about">About</Link></li> */}
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/messages/22222">messages</Link></li>
            <li><Link to="/inbox/messages/22222">/inbox/messages</Link></li>
          </ul>
          <div>
            {this.props.children}
          </div>
        </div>
       )
    }
}

export default One;