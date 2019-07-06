import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Wanren extends Component {
    static navigationOptions = {
        tabBarLabel: '万人购',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom4.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom3.png')}/>
            );
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>这是万人购</Text>
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