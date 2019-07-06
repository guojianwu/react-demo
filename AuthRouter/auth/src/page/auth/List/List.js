import React,{Component}  from 'react';

export default class List extends Component{
  login=()=>{
    this.props.history.push("/regist")
  }
  render(){
    console.log('list')
    return(
      <div>
        List
        <button onClick={this.login}> to regist</button>
      </div>
    )
  }
}