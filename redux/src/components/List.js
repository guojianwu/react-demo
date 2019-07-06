import React, { Component } from 'react';
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../redux/actions"
import Item from "./Item"
class List extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  render(){
    return (
      <div>
        {this.props.state}
        <Item/>
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
)(List);