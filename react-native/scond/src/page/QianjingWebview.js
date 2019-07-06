import React from "react"; 
import { View, Text,WebView,StyleSheet } from "react-native"; 
export default class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.navigation.getParam('url'))
    var url=this.props.navigation.getParam('url');
    return ( 
      <WebView style={{ flex: 1, alignItems: "center", justifyContent: "center" }} source={{uri:url}}></WebView>
      ); 
    } 
}
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
//   tabBarIcon: {
//       width: 21,
//       height: 21,
//   }
// });