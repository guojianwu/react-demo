import React from 'react';
import  {Redirect, NavLink} from 'react-router-dom'
import { withRouter } from 'react-router'
class App extends React.Component {
  render(){
    console.log('render')
    var info=localStorage.getItem('info');
    if(!info){
      return <Redirect to="/login"/>
    }
    return (
      <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">user</NavLink>
        </li>
        <li>
          <NavLink to="/info">info</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
        <li>
          <NavLink to="/admin">/admin</NavLink>
        </li>
      </ul>  
        {this.props.children}
      </div>
    );
  }
}
// export default App;
export default withRouter(App);
