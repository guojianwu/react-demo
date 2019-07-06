import React,{Component}  from 'react';
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "@/redux/actions"
import { Button } from 'antd';
import { Pagination } from 'antd';

import './home.less'
class Home extends Component{
  constructor(props){
    super(props);
    console.log(props)
  }
  login=()=>{
    this.props.history.push("/list")
  }
  render(){
    console.log("home")
    return(
      <div>
        Home
        
        <h1>{this.props.state}</h1>
        <button onClick={this.props.actions.jia}>+</button>
        <button onClick={this.props.actions.jian}>-</button>
        <div>
        <button onClick={this.login}>to list</button>
        </div>
        <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    <Pagination defaultCurrent={1} total={500} />
  </div>
      </div>
    )
  }
}

export default connect(
  (state)=>{
    return {
      state
    }
  },
  (dispatch)=>{
    return {
      actions:bindActionCreators(actions,dispatch)
    }
  }
)(Home);