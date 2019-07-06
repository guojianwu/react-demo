import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

export default class Home extends Component {
    // static navigationOptions = {
    //     tabBarLabel: '首页',
    //     tabBarIcon: ({focused}) => {
    //         if (focused) {
    //             return (
    //                 <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom2.png')}/>
    //             );
    //         }
    //         return (
    //             <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom1.png')}/>
    //         );
    //     },
    // };

    render() {
        return (
            <View style={styles.container}>
                <Text>这是首页</Text>
                <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Home')}
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