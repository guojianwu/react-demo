import React,{Component}  from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { withRouter } from 'react-router'
class AuthRouter extends Component{

  render(){
    console.log(this.props)
    const {component,path,...props} =this.props;
    var info=localStorage.getItem('info');
    console.log('info----',info)
    if(!info){
      return(
        <Redirect to="/login"></Redirect>
      )
    }
    return(
      <Route {...props} component={component} />
    )
  }
}
export default withRouter(AuthRouter); 