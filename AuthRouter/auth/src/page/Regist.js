import React,{Component}  from 'react';

export default class Regist extends Component{
  login=()=>{
    this.props.history.push("/login")
  }
  render(){
    console.log('Regist')
    return(
      <div>
        Regist
        <button onClick={this.login}> to login</button>
      </div>
    )
  }
}