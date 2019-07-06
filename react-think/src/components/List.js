import React,{ Component } from 'react';
import listCss from "../css/list.scss"
console.log(listCss)
export default class List extends Component {
  render(){
      return(
        <div className={listCss.list}>
          <p className={listCss.test}>List</p>
          <p className="test">List</p>
        </div>
      )
  }
} 