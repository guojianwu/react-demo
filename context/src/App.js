import React from 'react';
import {ThemeContext,UserContext} from './context/theme-context2'
import Layout from './pages/Layout'
export default class App extends React.Component{
  render(){
    return (
      <div>
        <ThemeContext.Provider value="drak">
        <UserContext.Provider value={{name:"gjw"}}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
      </div>
    )
  }
}



























// import React from 'react';
// import {ThemeContext, themes} from './context/theme-context';
// import Toolbar from './pages/Toolbar'
// import ThemedButton from './pages/ThemedButton'
// export default class  App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       theme: themes.light,
//     }
//   }
//   toggleTheme=()=>{
//     this.setState(state=>({
//       theme: state.theme === themes.dark?themes.light:themes.dark
//     }))
//   }
//   render(){
//     return (
//       <div>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//           <ThemedButton onClick={this.toggleTheme}>my btn</ThemedButton>
//         </ThemeContext.Provider>
//         app
//         <div>
//           <ThemedButton>my btn</ThemedButton>
//         </div>
//       </div>
//     )
//   }
// }




























// // import React from 'react';
// // import List from './pages/List'
// // // export const ThemeContext= React.createContext('light');
// // import ThemeContext from "./context/ThemeContext"
// // class App extends React.Component{
// //   constructor(props){
// //     super(props);
// //     this.state={
// //       theme:{background: 'green', color: 'white'}
// //     }
// //   }
// //   changeTheme=()=>{
// //     var bg = this.state.theme.background=='green'?'red':'green';
// //     var theme= {background: bg, color: 'white'};
// //     this.setState({theme})
// //   }
// //   render(){
// //     return (
// //       <ThemeContext.Provider value={this.state.theme}>
// //         <List/>
// //         <button onClick={this.changeTheme}>change theme</button>
// //         <ThemeContext.Consumer>
// //           {value =>{
// //             console.log(value)
// //             return ( <p style={{'background':value.background}}>Consumer app</p>)
// //             }
// //           }
// //         </ThemeContext.Consumer>
// //       </ThemeContext.Provider>
// //     );
// //   }
// // }
// // // class List extends React.Component{
// // //   static contextType = ThemeContext;
// // //   constructor(props,context){
// // //     super(props);
// // //     console.log(props,context)
// // //   }
// // //   render(){
// // //     return(
// // //       <div>
// // //         111
// // //       </div>
// // //     )
// // //   }
// // // }
// // export default App;
