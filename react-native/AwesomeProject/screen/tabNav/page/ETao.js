import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class ETao extends Component {
    static navigationOptions = {
        tabBarLabel: 'ETao',
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom6.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../../../assets/img/bottom5.png')}/>
            );
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>这是ETao</Text>
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