/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:49
 */
import React from 'react'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import store,{ persistor } from './store'
import {connect} from 'react-redux'
import _ from 'lodash'

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
    initialRouteName: 'Trending',
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            console.log(navigation);
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Favorite') {
                iconName = 'ios-keypad'
            } else if (routeName === 'Trending') {
                iconName = 'md-stats'
            } else if (routeName === 'My') {
                iconName = 'ios-person'
            } else if (routeName === 'Settings') {
                iconName = 'ios-settings'
            }
            return <Icons name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>
        },
        tabBarOptions:{
            activeTintColor: _.get(navigation, 'state.params.theme'),

                // TODO 导航栏底部颜色没有跟随redux变量动态修改
            // activeTintColor: "#333aaa",
            labelStyle :
            {
                fontSize: 12,
            },
        } ,
    }),
})

// BottomTab.addListener('changeTheme', theme => {
//     console.log(theme);
// })
// setTimeout(
//     () => {
//
//         console.dir(BottomTab);
//         BottomTab.dispatch('changeTheme','abccccccc')
//     }, 2000
// )


const StackNavigator = createStackNavigator({
    BottomTab: {
        screen: BottomTab,
    },
    ColorList: {screen: ColorList},
    Login: {screen: Login},
}, {
    navigationOptions: ({navigation}) => ({
        header: null,
    }),
    initialRouteParams: {
        theme: '#123123'
    }
});


export default StackNavigator
