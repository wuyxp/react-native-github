/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/18 下午3:03
 */


export const USER_INFO_LOGIN = Symbol();

export const login = userInfo => ({
    type: USER_INFO_LOGIN,
    userInfo,
})