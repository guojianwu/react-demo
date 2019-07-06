import React from 'react';
import ThemeContext from "../context/ThemeContext"
import Item from './Item'
console.log('Consumer',ThemeContext)
class List extends React.Component{
  static contextType = ThemeContext;
  constructor(props,context){
    super(props);
    console.log(props,context)
  }
  render(){
    var value=this.context;
    return(
      <div>
        <p style={{'background':value.background}}>Consumer list</p>
        
        <Item/>
      </div>
    )
  }
}
// List.contextType = ThemeContext;
export default List;