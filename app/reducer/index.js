/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 上午10:49
 */
import {combineReducers} from 'redux'
import {CHANGE_THEME} from '../action/changeTheme'

const theme = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {...action.theme}
    }
    return state;
};
const favorite = (state = {}, action) => {

    return state;
};
const initReducer = combineReducers({
    theme,
    favorite,
});

export default initReducer;