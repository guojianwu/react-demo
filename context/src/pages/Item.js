import React from 'react';
import ThemeContext from "../context/ThemeContext2"
console.log('Consumer',ThemeContext)
class Item extends React.Component{
  static contextType = ThemeContext;
  constructor(props,context){
    super(props);
    console.log(props,context)
  }
  render(){
    var value=this.context;
    return(
      <div>
         <p style={{'background':value.background}}>Consumer item</p>
      </div>
    )
  }
}
// List.contextType = ThemeContext;
export default Item;