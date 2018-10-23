/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/16 下午1:51
 */

export const parseParams = (strParams = "") => {
    let string = strParams.split('&');
    let res = {};
    for (let i = 0; i < string.length; i++) {
        let str = string[i].split('=');
        if (str[0] != '') {
            res[str[0]] = str[1];
        }
    }
    return res;
};

export const stringifyParams = (jsonParams = {}) => {
    let arr = [];
    for (let i in jsonParams) {
        if (jsonParams.hasOwnProperty(i)) {
            arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(jsonParams[i]));
        }
    }
    return arr.join("&");
};

export const isLogin = (userInfo = {}) => {
    return !!userInfo['id']
};
