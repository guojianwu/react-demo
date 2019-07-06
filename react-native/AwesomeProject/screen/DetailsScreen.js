import React from "react"; 
import { View, Text,Button,StyleSheet,Image } from "react-native"; 
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '万人购',
    tabBarIcon: ({focused}) => {
        if (focused) {
            return (
                <Image style={styles.tabBarIcon} source={require('../assets/img/bottom4.png')}/>
            );
        }
        return (
            <Image style={styles.tabBarIcon} source={require('../assets/img/bottom3.png')}/>
        );
    },
  };
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerTitle: <Text style={{marginLeft:0,fontSize:20}} onPress={() => navigation.goBack()}>详情</Text>,
  //     tabBarIcon:({ focused: boolean, horizontal: boolean, tintColor: string })=>{
  //       if (focused) {
  //         return (
  //             <Image style={styles.tabBarIcon} source={require('../assets/img/bottom2.png')}/>
  //         );
  //     }
  //     return (
  //         <Image style={styles.tabBarIcon} source={require('../assets/img/bottom1.png')}/>
  //     );
  //     }
  //     // headerRight: (
  //     //   <Button
  //     //     onPress={navigation.getParam('increaseCount')}
  //     //     title="+1"
  //     //     color="#fff"
  //     //   />
  //     // ),
  //   };
  // };
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
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.goBack()}
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