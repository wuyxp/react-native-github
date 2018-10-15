/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 下午1:58
 */

export const CHANGE_THEME = Symbol();

export const changeTheme = color => ({
    type: CHANGE_THEME,
    theme: {
        color
    },
})
