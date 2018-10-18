/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:49
 */
import React from 'react'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import store from './store'
import {connect} from 'react-redux'

import Favorite from './view/Favorite'
import Popular from './view/Popular'
import Trending from './view/Trending'
import My from './view/My'
import Setting from './view/Setting'
import Login from './view/my/Login'

import ColorList from './view/settings/ColorList'

const BottomTab = createBottomTabNavigator({
    Favorite: {screen: Favorite},
    Trending: {screen: Trending},
    My: {screen: My},
    Settings: {screen: Setting},



    // Login: {screen: Login},
}, {
    // initialRouteName: 'Favorite',
    initialRouteName: 'My',
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Favorite') {
                iconName = 'ios-keypad'
            } else if (routeName === 'Trending') {
                iconName = 'ios-heart'
            } else if (routeName === 'My') {
                iconName = 'ios-person'
            } else if (routeName === 'Settings') {
                iconName = 'ios-settings'
            }
            return <Icons name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>
        },
        tabBarOptions:{
            activeTintColor: store.getState()['theme']['color'],
                // TODO 导航栏底部颜色没有跟随redux变量动态修改
                // activeTintColor: this.props.theme.color,
            labelStyle :
            {
                fontSize: 12,
            } ,
        } ,
    }),
})

const StackNavigator = createStackNavigator({
    BottomTab,
    ColorList: {screen: ColorList},
    Login: {screen: Login},
}, {
    navigationOptions: ({navigation}) => ({
        header: null
    })
});

const mapStateToProps = state => {
    return {
        theme: state.theme
    }
}

export default connect(mapStateToProps)(StackNavigator)
