import React  from 'react';
import {
inject,
observer
} from 'mobx-react';

@inject("appState")
@observer
class Index extends React.Component {
   constructor(props){
     super(props)
     console.log(props)
   }
   render(){
     return(
       <div>
          <p>{this.props.appState.count}</p>
          <h1>{this.props.appState.msg}</h1>
       </div>
     )
   }
 }
 export default Index;
