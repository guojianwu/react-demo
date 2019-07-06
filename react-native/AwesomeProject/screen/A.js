import React from "react"; 
import { View, Text,Button,StyleSheet,Image } from "react-native"; 
export default class A extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text style={{marginLeft:0,fontSize:20}} onPress={() => navigation.navigate("Home")}>详情</Text>,
     
      }
      // headerRight: (
      //   <Button
      //     onPress={navigation.getParam('increaseCount')}
      //     title="+1"
      //     color="#fff"
      //   />
      // ),
    // };
  };
  // static navigationOptions = {
  //   headerTitle: <Text style={{marginLeft:0,fontSize:20}} onPress={() =>  console.log(this)}>详情</Text>,
  //   // headerRight: (
  //   //   <Button
  //   //     onPress={() => alert('This is a button!')}
  //   //     title="Info"
  //   //     color="#fff"
  //   //   />
  //   // ),
  // };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>a Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <View style={{marginTop:30}}>
        <Button
          title="Go to B"
          onPress={() => this.props.navigation.push("B")}
        />
        </View>
        
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