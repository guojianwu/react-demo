import React from 'react';
import {
  observer,
  inject
} from 'mobx-react'
import Index from "./views/idnex"
@inject('appState')
@inject('appStateTest')
@observer
class App extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  add=(event)=>{
    this.props.appState.add(10)
  }
  dec=(event)=>{
    this.props.appState.dec(20)
  }
  add2=(event)=>{
    this.props.appStateTest.add(10000)
  }
  dec2=(event)=>{
    this.props.appStateTest.dec(20000)
  }
  render(){
    return (
      <div className="App">
        <p>{this.props.appState.count}</p>
        <div>
          <button onClick={this.add}>+</button>
          <button onClick={this.dec}>-</button>
        </div>
        <Index></Index>

        <hr/>
        <div>
          <p>{this.props.appStateTest.count}</p>
          <button onClick={this.add2}>+</button>
          <button onClick={this.dec2}>-</button>
          <h1>{this.props.appStateTest.msg}</h1>
        </div>
      </div>
    );
  }
}

export default App;
