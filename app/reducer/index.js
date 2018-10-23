/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 上午10:49
 */
import {combineReducers} from 'redux'
import theme from './theme'
import favorite from './favorite'
import userInfo from './userInfo'
import trending from './trending'
import account from './account'

const initReducer = combineReducers({
    theme,
    favorite,
    userInfo,
    trending,
    account,
});

export default initReducer;