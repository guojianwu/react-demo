import React from "react"; 
import { View, Text } from "react-native"; 
import { createStackNavigator, createAppContainer } from "react-navigation"; 
class HomeScreen extends React.Component { 
  render() { 
    return ( 
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
        <Text>Home Screen</Text> 
      </View> 
    ); 
  } 
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: Details } 
  },
  {
    initialRouteName: "Home"
  }
  ); 
// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


