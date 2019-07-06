import React from 'react';
import ThemedButton from './ThemedButton'
export default class Toolbar extends React.Component{
  render(){
    var props =this.props;
    return(
      <div>
        Toolbar
        <ThemedButton onClick={props.changeTheme}>
          Change Theme
        </ThemedButton>
      </div>
    )
  }
}