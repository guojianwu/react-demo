import React from "react"; 
import { View, Text } from "react-native"; 
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/page/Home';
import Details from './src/page/Details'
import tabNav from './src/page/tabNav/RootPage';
const AppNavigator = createStackNavigator(
  {
    Main:{
      screen: tabNav,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    },
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
      })
    },
    Details: { 
      screen: Details,
      navigationOptions: ({navigation}) => ({
        title: 'Details',
      })
    }
  },
  {
    initialRouteName: "Main"
  }
); 
export default createAppContainer(AppNavigator);





// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
