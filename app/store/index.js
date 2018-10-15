/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 上午10:44
 */
import {createStore} from 'redux'
import initReducer from '../reducer'
import initStore from './initStore'

export default store = createStore(initReducer, initStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
