import React from 'react';
import {ThemeContext,UserContext} from '../context/theme-context2'
 export default class Content extends React.Component{
  //  static contextType=[ThemeContextUserContext];
   static contextType=UserContext;
   constructor(props,context){
     super(props);
     console.log(props,context)
   }
   render(){
     return (
       <div>
         Content 
       </div>
     )
   }
 }
 Content.contextType=ThemeContext