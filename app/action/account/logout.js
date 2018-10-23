/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/18 下午3:08
 */
export const ACCOUNT_LOGOUT = Symbol();

export const logout = () => ({
    type: ACCOUNT_LOGOUT,
})