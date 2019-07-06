import React, { Component } from 'react';
import {bindActionCreators} from "redux"
import { Button,DatePicker } from 'element-react';

import { connect } from "react-redux"
import * as actions from "./store/reducer/actions"
import * as action_2 from './store/reducer_2/actions'
import test from './css/test.scss'
import List from './components/List';
console.log(test)
// console.log(app)
class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    console.log(props)
  }

  handleJia=()=>{
    this.props.actions.jia()
  }
  handleJian=()=>{
    this.props.actions.jian()
  }
  handleJia_2=()=>{
    this.props.actions_2.jia()
  }
  handleJian_2=()=>{
    this.props.actions_2.jian()
  }
  componentDidMount(){
    this.props.actions.load();
    // console.log(this.props)
  }
  render() {
    const {value1, value2} = this.state
    return (
      <div className={test.app}>
        <List/>
        <p className={test.test}>ssss</p>
        <div>
        <div className="block">
        <span className="demonstration">默认</span>
        <DatePicker
          value={value1}
          placeholder="选择日期"
          onChange={date=>{
            console.debug('DatePicker1 changed: ', date)
            this.setState({value1: date})
          }}
          disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
          />
      </div>
          <Button>默认按钮</Button>
          <Button type="primary">主要按钮</Button>
          <Button type="text">文字按钮</Button>
          <Button type="primary" icon="edit"></Button>
          <Button type="primary" icon="share"></Button>
          <Button type="primary" icon="delete"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary">上传<i className="el-icon-upload el-icon-right"></i></Button>
          <Button.Group>
          <Button type="primary" icon="arrow-left">上一页</Button>
          <Button type="primary">下一页<i className="el-icon-arrow-right el-icon-right"></i></Button>
          <Button type="primary" loading={true}>加载中</Button>
      </Button.Group>
      <Button.Group>
          <Button type="primary" icon="edit"></Button>
          <Button type="primary" icon="share"></Button>
          <Button type="primary" icon="delete"></Button>
      </Button.Group>
      <Button type="primary" size="large">大型按钮</Button>
      <Button type="primary">正常按钮</Button>
      <Button type="primary" size="small">小型按钮</Button>
      <Button type="primary" size="mini">超小按钮</Button>
        </div>
        <p>reducer</p>
        <button onClick={this.handleJia}>+</button>
        {this.props.state.reducer.get('value')}
        <button onClick={this.handleJian}>-</button>

        <hr/>
        {this.props.state.reducer.get('list').map((item,index)=>{
          return(<div key={index}>{item}</div>)
        })}
        <hr/>
        <p>reducer_2</p>
        <button onClick={this.handleJia_2}>+</button>
        {this.props.state.reducer_2.get('value')}
        <button onClick={this.handleJian_2}>-</button>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      state:state
    }
  },
  (dispatch) => {
    return {
      actions:bindActionCreators(actions,dispatch),
      actions_2:bindActionCreators(action_2,dispatch)
    }
  }
)(App);