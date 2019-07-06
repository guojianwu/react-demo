import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Home from './page/Home';
import Wanren from './page/Wanren';
import Quanjing from './page/Quanjing';
import ETao from './page/ETao';
import My from './page/My';

export default createBottomTabNavigator(
    {
        Index: {
          screen: Home,
          navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom2.png')}/>
                );
              }
              return (
                <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom1.png')}/>
              );
            }
          })
        },
        Wanren: {
          screen: Wanren,
          navigationOptions: ({navigation}) => ({
            tabBarLabel: '万人购',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom4.png')}/>
                );
              }
              return (
                <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom3.png')}/>
              );
            }
          })
        },
        Quanjing: {
          screen: Quanjing,
          navigationOptions: ({navigation}) => ({
            tabBarLabel: '全景',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom10.png')}/>
                );
              }
              return (
                <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom9.png')}/>
              );
            }
          })
        },
        ETao: {
          screen: ETao,
          navigationOptions: ({navigation}) => ({
            tabBarLabel: 'ETao',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom6.png')}/>
                );
              }
              return (
                <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom5.png')}/>
              );
            }
          })
        },
        My: {
          screen: My,
          navigationOptions: ({navigation}) => ({
            tabBarLabel: '我的',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom8.png')}/>
                );
              }
              return (
                <Image style={styles.tabBarIcon} source={require('../../assets/img/bottom7.png')}/>
              );
            }
          })
        }
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#4BC1D2',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#000',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                paddingBottom: 3,
                borderTopWidth: 0.3,
                paddingTop:3,
                borderTopColor: '#ccc',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: {height: 0},
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
        initialRoute:"Home"
    },
    
  );

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 25,
        height: 25,
    }
});