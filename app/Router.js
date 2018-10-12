/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:49
 */
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'

import Favorite from './view/Favorite'
import Popular from './view/Popular'
import Trending from './view/Trending'
import My from './view/My'

export default createBottomTabNavigator({
    Favorite,
    Popular,
    Trending,
    My,
},{
    initialRouteName: 'Favorite',
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Favorite') {
                iconName = 'ios-keypad'
            } else if (routeName === 'Popular') {
                iconName = 'ios-ribbon'
            } else if (routeName === 'Trending') {
                iconName = 'ios-heart'
            } else if (routeName === 'My') {
                iconName = 'ios-person'
            }
            return <Icons name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>
        },
    }),
    tabBarOptions:{
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
    },
})
