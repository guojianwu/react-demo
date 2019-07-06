import React from 'react'
import { Link } from 'react-router'
export default class Two  extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'gjw'
    }
  }
  render(){
      return (
          <div>
              <li><Link to="/">page1</Link></li>
              <ul>
                  {/* <li><Link to="/two/detail">detai</Link></li> */}
                  <li><Link to="/two/info">info</Link></li>
                  <li><Link to="/two/info/users/ggg">users</Link></li>
              </ul>
              <div>
                  {this.props.children}
              </div>
          </div>
      )
  }
}