/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/18 下午3:00
 */
import {USER_INFO_LOGIN} from '../action/userInfo/login'
import {USER_INFO_LOGOUT} from '../action/userInfo/logout'

export default userInfo = (state = {}, action) => {

    switch (action.type) {
        case USER_INFO_LOGIN:
            return action.userInfo
        case USER_INFO_LOGOUT:
            return {}
    }
    return state;
}