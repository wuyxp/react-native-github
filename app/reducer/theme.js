import {CHANGE_THEME} from "../action/theme/changeTheme";

/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/18 下午2:58
 */

export default theme = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {...action.theme}
    }
    return state;
};