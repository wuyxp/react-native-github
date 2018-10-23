/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/18 下午3:03
 */


export const ACCOUNT_LOGIN = Symbol();

export const login = account => ({
    type: ACCOUNT_LOGIN,
    account,
})