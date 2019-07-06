import React from 'react';
import Content from './Content'
import Sidebar from './Sidebar'
 export default class Layout extends React.Component{
   render(){
     return (
       <div>
         <Sidebar />
      <Content />
       </div>
     )
   }
 }