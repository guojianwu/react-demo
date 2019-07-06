import React, { Component } from 'react';
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../redux/actions"
class Item extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  render(){
    return (
      <div>
        {this.props.state}
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
)(Item);