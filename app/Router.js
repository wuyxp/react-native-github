/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:49
 */
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

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

})
