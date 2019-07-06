import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Quanjing extends Component {
    static navigationOptions = {
        tabBarLabel: '全景',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom10.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom9.png')}/>
            );
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>这是全景</Text>
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