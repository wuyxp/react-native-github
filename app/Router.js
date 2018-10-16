/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:49
 */
import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'
import store from './store'
import {connect} from 'react-redux'

import Favorite from './view/Favorite'
import Popular from './view/Popular'
import Trending from './view/Trending'
import My from './view/My'

import ColorList from './view/my/ColorList'

const BottomTab = createBottomTabNavigator({
    Favorite: {screen: Favorite},
    Popular: {screen: Popular},
    Trending: {screen: Trending},
    My: {screen: My},
},{
    initialRouteName: 'Favorite',
    // initialRouteName: 'My',
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
        tabBarOptions:{
            activeTintColor: store.getState()['theme']['color'],
            // activeTintColor: this.props.theme.color,
            labelStyle: {
                fontSize: 12,
            },
        },
    }),
})

const StackNavigator = createStackNavigator({
    BottomTab,
    ColorList: {screen: ColorList},
},{
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
