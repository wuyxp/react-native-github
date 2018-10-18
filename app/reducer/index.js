/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 上午10:49
 */
import {combineReducers} from 'redux'
import theme from './theme'
import favorite from './favorite'
import userInfo from './userInfo'

const initReducer = combineReducers({
    theme,
    favorite,
    userInfo,
});

export default initReducer;