import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity 
} from 'react-native';
import axios from 'axios'
export default class Quanjing extends Component {
    // static navigationOptions = {
    //     tabBarLabel: '全景',
    //     tabBarIcon: ({focused}) => {
    //         if (focused) {
    //             return (
    //                 <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom10.png')}/>
    //             );
    //         }
    //         return (
    //             <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom9.png')}/>
    //         );
    //     },
    // };
    constructor(props){
      super(props)
      this.state={
        panoramic:[]
      }
    }
    componentDidMount(){
      axios.get(EDSTAO+'/panoramic').then((res)=>{
        console.log(res.data)
        this.setState(()=>({
          panoramic:res.data
        }))
      })
    }
    render() {
        return (
          <ScrollView style={styles.container}>
            <View>
                {
                  this.state.panoramic.map((item,index)=>{
                    return(
                      <View key={index} >
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('QianjingWebview',{
                        url:item.url
                      })}>
                        <Image style={styles.img} source={{uri:item.img}}  ></Image>
                      </TouchableOpacity>
                        
                      </View>
                    )
                  })
                }
            </View>
          </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    },
    img:{
      width:"100%",
      height:200,
      marginBottom:20
    }
}); 