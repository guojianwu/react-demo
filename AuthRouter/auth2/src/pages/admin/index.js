import React from 'react';
import  {Redirect, NavLink} from 'react-router-dom'
export default class Index extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li>
            <NavLink to="/admin">/admin/</NavLink>
            
          </li>
          <li>
            <NavLink to="/admin/list">/admin/list</NavLink>
          </li>
        </ul>  
          {this.props.children}
      </div>
    )
  }
}