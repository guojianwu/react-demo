import React from "react"; 
import { View, Text,Button,Image,StyleSheet } from "react-native"; 
// import { createStackNavigator, createAppContainer,navigationOptions  } from "react-navigation"; 
class HomeScreen extends React.Component { 
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
                <Image style={styles.tabBarIcon} source={require('../assets/img/bottom2.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('../assets/img/bottom1.png')}/>
        );
    },
  };
  render() { 
    return ( 
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> 
        <Text>Home Screen</Text> 
        <Button
          title="Go to A"
          onPress={() => this.props.navigation.navigate('A')}
        />
      </View> 
    ); 
  } 
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  tabBarIcon: {
      width: 21,
      height: 21,
  }
});
export default HomeScreen;