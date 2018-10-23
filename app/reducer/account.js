/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/23 下午2:39
 */
import {ACCOUNT_LOGIN} from '../action/account/login'
import {ACCOUNT_LOGOUT} from '../action/account/logout'

export default account = (state = {}, action) => {

    switch (action.type) {
        case ACCOUNT_LOGIN:
            return action.account;
        case ACCOUNT_LOGOUT:
            return {}
    }
    return state;
}