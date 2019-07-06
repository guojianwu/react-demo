import React from 'react';

export default class Login extends React.Component{
  onLogin=()=>{
    localStorage.setItem("info",'123')
    this.props.history.replace('/');
  }
  render(){
    return(
      <div>
        <button onClick={this.onLogin}>Login</button>
      </div>
    )
  }
}