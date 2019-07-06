import React from 'react';
import {ThemeContext} from '../context/theme-context';
export default class ThemedButton extends React.Component{
  static contextType =ThemeContext;
  constructor(props,context){
    super(props)
    console.log(props,context)
  }
  render(){
    let props = this.props;
    console.log(props)
    let theme = this.context;
    return(
      <div>
         <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
      </div>
    )
  }
}